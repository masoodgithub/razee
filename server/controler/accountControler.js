import Acct from "../model/accModel.js";


export const accountActivity = async(req, res) =>{
    try {
        const newAccountActivity = new Acct(req.body);
        const {telno} = newAccountActivity;

    // const existtelno = await Acct.findOne({telno});
    // if(existtelno){
    //     return res.status(400).json({message:"account alreadt exist"});
    // }
    const saveData = await newAccountActivity.save();  
    res.status(200).json(saveData)
    } catch(error) {
        res.status(500).json({errorMessage: error.message});
    }
}

export const getAllActivities = async (req, res) =>{
    try {
      const activityData = await Acct.find();
        if(!activityData || activityData.length === 0) {
            return res.status(404).json({message: "activity data not found"});
        }
        res.status(200).json(activityData);      
    } catch(error) {
        res.status(500).json({errorMessage: error.message})
    }
}
export const getTotalExpense = async (req, res) =>{
    try {
      const activityData = await Acct.find();
        if(!activityData || activityData.length === 0) {
            return res.status(404).json({message: "activity data not found"});
        }
        const totalExpense =  activityData.filter(item => item.acctype === 'Expense')
        res.status(200).json(totalExpense);       
    } catch(error) {
        res.status(500).json({errorMessage: error.message})
    }
}
export const getTotalSalary = async (req, res) =>{
    try {
      const activityData = await Acct.find();
        if(!activityData || activityData.length === 0) {
            return res.status(404).json({message: "activity data not found"});
        }
        const totalSalary =  activityData.filter(item => item.acctype === 'Salary')
        res.status(200).json(totalSalary); 
    } catch(error) {
        res.status(500).json({errorMessage: error.message})
    }
}
export const getTotalDonation = async (req, res) =>{
    try {
      const activityData = await Acct.find();
        if(!activityData || activityData.length === 0) {
            return res.status(404).json({message: "activity data not found"});
        }
        const totalDonation =  activityData.filter(item => item.acctype === 'Donation')
        res.status(200).json(totalDonation); 
    } catch(error) {
        res.status(500).json({errorMessage: error.message})
    }
}