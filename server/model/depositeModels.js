import mongoose from "mongoose";

const depositeSchima = new mongoose.Schema({
    deposite: {
        type: Number,
        require: true
    },
    month: {
        type:String,
        require: true
    },
    cdt: {
        type: Date,
        require: true
    }
});

export default mongoose.model("Deposite", depositeSchima)