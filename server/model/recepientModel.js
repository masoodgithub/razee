import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    telno:{
        type: String,
        require: true
    },
    acctype:{
        type: String,
        require: true
    },
    amount:{
        type: Number,
        require: true
    },
    info:{
        type: String,
        require: true
    }
});

export default mongoose.model('Users', userSchema);