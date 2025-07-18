import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js"
//databse connection

mongoose.set("strictQuery", false);
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("MongoDB database connected");

    } catch (error) {
        console.log("MongoDB databse connection failed");
    }
}


dotenv.config()
const app = express()
const port = process.env.port || 8000
const corrsOptions = {
    origin:true,
    Credentials:true

}
// //for testing
// app.get('/',(req,res)=>{
//     res.send("api is working");
// });

//middleware
app.use(express.json());
app.use(cors(corrsOptions));
app.use(cookieParser());
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute);
app.listen(port, ()=>{
    connect();
    console.log('server listening on port',port);
})

