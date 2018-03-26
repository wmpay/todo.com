#!/bin/bash
set -e

DATABASE_NAME="todo"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER todo;
    CREATE DATABASE todo;
    GRANT ALL PRIVILEGES ON DATABASE todo TO todo;
EOSQL

psql todo --username todo <<-EOSQL
	  CREATE TABLE todo (
			id serial PRIMARY KEY,
			name VARCHAR(255),
			description TEXT,
			due_date TIMESTAMP,
			complete BOOLEAN 
		);
EOSQL