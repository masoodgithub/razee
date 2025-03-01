import DepositeModel from "../model/depositeModels.js";

export const depositeSubmit = async(req, res) => {
    try{
        const newDeposite = new DepositeModel(req.body)
const saveData = await newDeposite.save();
res.status(200).json(saveData);
    } catch(error) {
        res.status(500).json({errorMessage: error?.message })
    }
}

export const getDepositeAmount = async(req, res) => {
    try{
        const depositeData = await DepositeModel.find();
        if(!depositeData || depositeData.length === 0){
            return res.status(404).json({message:`Deposite amount not found`})
        }
        res.status(200).json(depositeData);
    }catch(error) {
        res.status(500).json({errorMessage:error.message});
    }
}