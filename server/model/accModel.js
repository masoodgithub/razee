import mongoose from 'mongoose';

const accSchema=  new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    telno: {
        type: String,
        require:true
    },
    acctype: {
        type: String,
        require: true
    },
    amount:{
        type: Number,
        require:true
    },
    cdt: {
        type: Date,
        require:true
    }
})

export default mongoose.model('Acct', accSchema );