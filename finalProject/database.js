const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose
            .connect('mongodb://localhost:27017/yelp-camp')
            .then(() => {
                console.log('database connected....');
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

// const { MongoClient } = require('mongodb');

// const url =
//     'mongodb+srv://ThanhTuan96:Tuancon96@cluster0.eafat.mongodb.net/yelp-camp?retryWrites=true&w=majority';
// const client = new MongoClient(url);

// class Database {
//     constructor() {
//         this.connect();
//     }
//     async connect() {
//         try {
//             await client.connect();
//             console.log('...database connected');
//             const db = client.db('yelp-camp');
//             const campground = db.collection('campgrounds');
//             const myDoc = await campground.find({ price: { $lt: 39 } });
//             console.log(myDoc);
//         } catch (error) {
//             console.log(err);
//         }
//     }
// }
module.exports = new Database();
