# Rest-API-with-mongo

# CRUD Operations
Create:
    insertOne(data, options)
    insertMany(data, options)

Read:
    find(filter, options)
        Only fetch first 20 result because it return cursor object which is iterable
        To find all result you can use .toArray() -> db.collectionName.find().toArray()
    findOne(filter, options)

Update:
    updateOne(filter, data, options)
    updateMany(filter, data, options)
    replaceOne(filter, data, options) // Only work with _id
    update(filter, data, options) Deprecated

Delete:
    deleteOne(filter, options)
    deleteMany(filter, options)

Database Stats:
    db.stats()

Referenced Data:
    aggregate([{$lookup: {from:"collectionName", localField:"localfield name pointed to the refrence", foreignField:"Field on which Relation Established"}}])
        eg: db.owner.aggregate([{$lookup:{from:"cars",localField:"cars",foreignField:"_id",as:"brand"}}])