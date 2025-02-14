import User from "../model/recepientModel.js";

export const create = async (req, res)=>{
   try{
        const newUser = new User(req.body);
        const {telno} = newUser;
        
        const existtelno = await User.findOne({telno});
        if(existtelno){
            return res.status(400).json({message:"recipient alreadt exist"});
        }
        const saveData = await newUser.save();
        res.status(200).json(saveData)
   } catch(error){
    res.status(500).json({errorMessage: error.message});
   }
}

export const getAllUsers = async (req, res)=>{
    try{
        const userData = await User.find();
        if(!userData || userData.length === 0) {
            return res.status(404).json({message: "user data not found"});
        }
        res.status(200).json(userData);      
    }catch(error){
        res.status(500).json({message: error.message});
    }

}

export const deleteUser = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = User.findById(id);
        if(!userExist){
            return res.status(404).json({message: 'user not found'})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"user deleted successfully"})
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }

}


export const updateUser = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = User.findById(id);
        if(!userExist){
            return res.status(404).json({message: 'user not found'})
        }
        await User.findByIdAndUpdate(id);
        res.status(200).json({message:"user updated successfully"})
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }

}