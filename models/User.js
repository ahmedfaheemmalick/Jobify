import mongoose from "mongoose";

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 8
    },
    password: {
        type: String,
        required: true
    },
})

export default mongoose.model("User", Schema);