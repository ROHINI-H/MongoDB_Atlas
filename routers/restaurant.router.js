import { createRestaurant, deleteRestaurant, fetchRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";
import { verifyToken } from "../middleware/verify.js";

export function restaurantRoutes (app){
    app.get('/api/restaurants', fetchRestaurant);
    app.post('/api/restaurant', verifyToken, createRestaurant);
    app.patch('/api/restaurant/:id', verifyToken, updateRestaurant);
    app.delete('/api/restaurant/:id', verifyToken, deleteRestaurant);
}