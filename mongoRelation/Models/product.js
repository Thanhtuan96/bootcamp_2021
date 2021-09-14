const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose
    .connect('mongodb://localhost:27017/relational-demo')
    .then(() => {
        console.log('Mongo connect open');
    })
    .catch((err) => {
        console.log(err);
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Sping', 'Summer', 'Autumn', 'Winter'],
    },
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('farm', farmSchema);

// Product.insertMany([
//     {
//         name: 'Melon',
//         price: 12,
//         season: 'Summer',
//     },
//     {
//         name: 'Banana',
//         price: 2,
//         season: 'Summer',
//     },
//     {
//         name: 'Water melon',
//         price: 10,
//         season: 'Summer',
//     },
// ]);

const makeFarm = async () => {
    const farm = await new Farm({ name: "Tuan's Farm", city: 'Tam nong' });
    const melon = await Product.findOne({ name: 'Melon' });
    farm.products.push(melon);
    farm.save();
    console.log(farm);
};

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: "Tuan's Farm" });
    const waterMelon = await Product.findOne({ name: 'Water melon' });
    farm.products.push(waterMelon);
    farm.save();
};

// addProduct();

Farm.findOne({ name: "Tuan's Farm" })
    .populate('products')
    .then((farm) => console.log(farm));
