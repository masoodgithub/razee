import express from "express";
import {accountActivity, 
    getAllActivities,getTotalDonation,
    getTotalExpense,getTotalSalary} from "../controler/accountControler.js";


const acctRouter = express.Router();

acctRouter.post("/account", accountActivity);
acctRouter.get('/getAllActivitis', getAllActivities);
acctRouter.get('/getTotalSalary', getTotalSalary);
acctRouter.get('/getTotalExpense', getTotalExpense);
acctRouter.get('/getTotalDonation', getTotalDonation);



export default acctRouter;