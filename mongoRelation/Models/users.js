const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/relational-demo')
    .then(() => {
        console.log('Mongo connect open');
    })
    .catch((err) => {
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [{ city: String, state: String, street: String, country: String }],
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const user = new User({
        first: 'Khuat',
        last: 'Tuan',
    });
    user.address.push({
        street: 'phu tho',
        city: 'Viet Tri',
        state: 'Phu Tho',
        country: 'Viet Name',
    });
    const res = await user.save();
    console.log(res);
};

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.address.push({
        street: 'ogawa',
        city: 'kodaira',
        state: 'Nihong',
        country: 'Japan',
    });
    const res = await user.save();
    console.log(res);
};

addAddress('61408fc210b2bf5fe14819d9');
