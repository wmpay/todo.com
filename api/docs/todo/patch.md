# Update todo

Allow the User to update a todo.

**URL** : `PATCH http://api:9000/todo/:id`

**Method** : `PATCH`

**Data constraints**

```json
{
  "name": "[1 to 255 characters]",
  "description": "[unlimited characters]",
  "dueDate": "[date string]",
  "complete": [boolean]
}
```

**Data examples**

Partial data is allowed.

```json
{
  "name": "cool thing todo",
  "dueDate": "2018-03-27",
  "complete": false
}
```

## Success Responses

**Condition** : Data provided is valid.

**Code** : `200 OK`


## Error Responses

**Condition** : No record with the id provided exists.

**Code** : `404 NOT FOUND`


**Condition** : If provided data is invalid, e.g. a name field is too long.

**Code** : `400 BAD REQUEST`
