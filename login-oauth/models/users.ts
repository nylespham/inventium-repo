import mongoose from "mongoose";
import { StringLiteral } from "typescript";
import { Password } from "../services/password";

/* An interface that describes the properties 
that are required to create a new User */

interface UserAttrs {
    email: string;
    password: string;
}


interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs: UserAttrs): UserDoc
}

interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require
    }
})

