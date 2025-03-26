import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String},
    completed: {type: Boolean, default: false},
})

const ListSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    items: {type: [TaskSchema], default: []},
})

export default mongoose.model("List", ListSchema);