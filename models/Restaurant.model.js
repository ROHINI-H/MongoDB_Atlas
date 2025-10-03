import mongoose from "mongoose";

// creating Schema
const restaurantSchema = mongoose.Schema({
    name: String,
    imageURL: String,
    cuisines: String,
    rating: String,
});

// creating model
const RestaurantModel = mongoose.model('Restaurants', restaurantSchema);

export default RestaurantModel;