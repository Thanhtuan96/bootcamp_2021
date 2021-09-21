require('dotenv').config();

const User = require('./models/user.model');
const Database = require('./database');

const seedUser = async () => {
    const user = await new User({
        name: 'Ngoc',
        email: 'khanhngoc3011@gmail.com',
        phone: 09067468038,
        password: '123',
    });
    await user.save();
    console.log(`user : ${user.name} created`);
};

seedUser();
