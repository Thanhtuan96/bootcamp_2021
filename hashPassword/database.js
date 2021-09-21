const mongoose = require('mongoose');
class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose
            .connect(process.env.MONGO_URL)
            .then(() => {
                console.log('Mongo connected...');
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = new Database();
