import express from "express";
import {create, deleteUser, getAllUsers, updateUser}  from "../controler/recipientControler.js";


const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.delete("/delete/user/:id", deleteUser);
route.put('/update/user/:id', updateUser)

export default route;