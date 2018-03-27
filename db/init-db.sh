#!/bin/bash
set -e

DATABASE_NAME="todo"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER todo;
    ALTER USER todo PASSWORD 'todo';
    CREATE DATABASE todo;
    GRANT ALL PRIVILEGES ON DATABASE todo TO todo;
EOSQL

psql todo --username todo <<-EOSQL
	  CREATE TABLE todos (
			id serial PRIMARY KEY,
			name VARCHAR(255),
			description TEXT,
			due_date TIMESTAMP,
			complete BOOLEAN
		);
EOSQL

psql todo --username todo <<-EOSQL
	  INSERT INTO todos VALUES (
	  	1,
	  	'gotta code',
	  	'coding practice',
	  	date '2018-03-26',
	  	false
	  )
EOSQL