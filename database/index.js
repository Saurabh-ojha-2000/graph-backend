import mongoose from "mongoose";

export const connectDatabase = () => {
   
    mongoose.connect('mongodb+srv://sourabhojha12:saurabh@cluster0.6rb2olc.mongodb.net/dvd?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Database connected successfully...");
    })
    .catch((error) => {
        console.log("not connected to databse",error);
    });
}
