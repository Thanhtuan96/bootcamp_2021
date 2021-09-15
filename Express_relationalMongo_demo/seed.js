const Campground = require('./models/campground.model');

const createInitialData = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const camp = await new Campground({
            title: 'Bootcamp',
            desciption:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ad eos quo ipsam earum maxime laboriosam vitae consequuntur ipsa, fuga dolorem necessitatibus soluta aliquid. Nihil voluptatibus sapiente quae minima animi.',
            location: 'Japan',
            rating: 5,
            price: Math.floor(Math.random() * 30 + 10),
            imageUrl: 'https://source.unsplash.com/random',
        });
        await camp.save();
    }
};

createInitialData();
