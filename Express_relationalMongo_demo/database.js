const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose
            .connect('mongodb://localhost:27017/farmStandTake')
            .then(() => {
                console.log('database connected....');
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

module.exports = new Database();
