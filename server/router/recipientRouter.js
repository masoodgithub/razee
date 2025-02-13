import express from "express";
import {create, deletUser, getAllUsers}  from "../controler/recipientControler.js";


const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.delete("/delete/user/:id", deletUser)

export default route;