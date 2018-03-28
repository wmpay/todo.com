# Create todo

Allow the User to create a todo.

**URL** : `http://api:9000/todo`

**Method** : `POST`

**Data constraints**

```json
{
  "name": "[1 to 255 characters]",
  "description": "[unlimited characters]",
  "dueDate": "[date string]",
  "complete": "[boolean]"
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

**Condition** : If provided data is invalid, or no data was sent.

**Code** : `400 BAD REQUEST`
