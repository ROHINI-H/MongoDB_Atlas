import express from "express"
const app = express();
import mongoose from "mongoose";
import { restaurantRoutes } from "./routers/restaurant.router.js";
import { userRoutes } from "./routers/user.router.js";
import cors from 'cors';

mongoose.connect('mongodb+srv://hrohini19_db_user:6XEdYzDXlTll3Oo9@cluster0.ls3eai7.mongodb.net/') // returns a promise
.then(()=> {
    console.log("DB Connected");
})
.catch((err)=> {
    console.log("DB failed", err);
})

app.use(express.json()) //body parsing middleware because by default req.body is undefined
app.use(cors);

app.get('/', (req,res) =>{
    res.send("Welcome to root route");
});

restaurantRoutes(app);
userRoutes(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})

// hrohini19_db_user
// BIfLFrgCbsKmUGu3
// mongodb+srv://hrohini19_db_user:BIfLFrgCbsKmUGu3@cluster0.pzauxqz.mongodb.net/