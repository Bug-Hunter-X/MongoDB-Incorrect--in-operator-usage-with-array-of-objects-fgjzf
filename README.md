# MongoDB Incorrect $in operator usage with array of objects
This example demonstrates an incorrect use of the `$in` operator in a MongoDB query with an array of objects. The correct way is to specify the field within each object in the array.
## Bug
The following query is incorrect:
```javascript
db.collection.find({field: {$in: [{a:1}, {a:2}]}});
```
This query attempts to find documents where the `field` matches either `{a:1}` or `{a:2}`.  However, MongoDB will treat these objects as complete documents and likely return no results.
## Solution
The correct approach depends on what you want to match.  If you want to match documents where the `field`'s `a` property is 1 or 2, then use the following query:
```javascript
db.collection.find({$or: [{'field.a': 1}, {'field.a': 2}]});
```
If you are storing an array within the 'field', you could use the following query:
```javascript
db.collection.find({'field.a': {$in: [1, 2]}});
```