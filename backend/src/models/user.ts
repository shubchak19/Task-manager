import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    lists: {type: [String], default: []}
})

export default mongoose.model("User", UserSchema);