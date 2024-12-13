const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name:"ARTZ Coffee",
        img:'https://images.pexels.com/photos/13741278/pexels-photo-13741278.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 1400,
        desc: "A pure taste of perfection in every sip"
    },
    {
        name:"Logitech Keyboard",
        img:'https://images.pexels.com/photos/18311093/pexels-photo-18311093/free-photo-of-orange-keybord-renderd-by-blender-3d.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 6500,
        desc: "Blue switch mechanical keyboard with clicky sound"
    },
    {
        name:"Steam Deck",
        img:'https://images.pexels.com/photos/14005916/pexels-photo-14005916.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 85000,
        desc: "Play all legendary games in one console with dual motors"
    },
    {
        name:"XBox Controller",
        img:'https://images.pexels.com/photos/6962206/pexels-photo-6962206.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 7000,
        desc: "XBOX Controller with wifi6 and dual shock sensitivity"
    },
    {
        name:"Yoda Baby Figure",
        img:'https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 3200,
        desc: "Detailed yoda baby figure with magnetic support"
    }
]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully")
}

module.exports = seedDB;