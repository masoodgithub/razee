import express from "express";
import { depositeSubmit, getDepositeAmount } from "../controler/depositeControler.js";

const depositeRouter = express.Router();

depositeRouter.post('/deposite', depositeSubmit);
depositeRouter.get('/getDeposites', getDepositeAmount);


export default depositeRouter;