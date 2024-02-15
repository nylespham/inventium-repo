import { app } from "./app";
import mongoose from "mongoose";

const port = 12000;
const start = async () => {

    // if (!process.env.JWT_KEY){
    //     throw new Error("JWT_KEY must be defined");
    // }

    try {
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}`);
        console.log("connected to mongodb");
    } catch (err) {
        console.error(err);
    }

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    })

}

start();
