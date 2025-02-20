```javascript
// Correct use of $or operator to match the 'a' field of objects
db.collection.find({$or: [{'field.a': 1}, {'field.a': 2}]});
//Correct use of $in operator in array
db.collection.find({'field.a': {$in: [1, 2]}});
```