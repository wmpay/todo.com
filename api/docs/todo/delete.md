# Delete todo

Allow the User to delete a todo.

**URL** : `http://api:9000/todo/:id`

**Method** : `DELETE`

## Success Responses

**Condition** : Record was deleted.

**Code** : `200 OK`

## Error Responses

**Condition** : No record with the id provided exists.

**Code** : `404 NOT FOUND`
