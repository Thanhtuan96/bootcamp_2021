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

module.exports = new Database();
