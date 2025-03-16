import express from "express";
import {accountActivity,getAllActivities,getTotalDonation,getTotalExpense,getTotalSalary, getTotalZakat} from "../controler/accountControler.js";


const acctRouter = express.Router();

acctRouter.post("/account", accountActivity);
acctRouter.get('/getAllActivitis', getAllActivities);
acctRouter.get('/getTotalSalary', getTotalSalary);
acctRouter.get('/getTotalExpense', getTotalExpense);
acctRouter.get('/getTotalDonation', getTotalDonation);
acctRouter.get('/getTotalZakat', getTotalZakat);




export default acctRouter;