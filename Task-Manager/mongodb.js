const { ObjectID, MongoClient } = require("mongodb")
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

const id= new ObjectID()
console.log(id)
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString().length)

// console.log(id)
// console.log(id.getTimestamp())
// MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     console.log('connected correctly!')
// })
MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    // console.log('connected correctly!')

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Dwarak',
    //     age: 52
    // })
    // db.collection('users').insertOne({
    //     name: 'Dwarak',
    //     age: 52
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user!')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany( [
    //     {
    //         name: 'Ajai',
    //         age: 20
    //     }, {
    //         name: 'Mohit',
    //         age: 18
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany( [
    //     {
    //         description: 'Collect the Money from Mylapore',
    //         completed: true
    //     }, {
    //         description: 'Install react native',
    //         completed: false
    //     }, {
    //         description: 'Sell the scooty',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Thrisha',
    //     age: 17
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user!')
    //     }
    //     console.log(result.ops)
    // })



})

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    // console.log('connected correctly!')

    const db = client.db(databaseName)

    // db.collection('users').findOne({name:'Dwarak'}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').findOne({name:'sai'},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').findOne({_id: "603cef1fe008f43f9450b7a7"},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').findOne({_id: new ObjectID("603cef1fe008f43f9450b7a7")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({age:52}).toArray((error,user)=>{
    //     console.log(user)
    // })
    // db.collection('users').count({age:52},(error,user)=>{
    //     console.log(user)
    // })
    // db.collection('tasks').find({completed: false}).toArray((error,user)=>{
    //     console.log(user)
    // })
})
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 52
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

//     db.collection('tasks').deleteOne({
//         description: "Sell the scooty"
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// })

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("6037b40cca2814d9f47ad85e")
    // }, {
    //     $set: {
    //         name: "Ajaiy"
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    
    // db.collection('users').updateOne({
    //     _id: new ObjectID("6037b40cca2814d9f47ad85e")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
})
