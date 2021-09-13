const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose
            .connect(process.env.MONGO_URL)
            .then(() => {
                console.log('database connected....');
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

module.exports = new Database();
