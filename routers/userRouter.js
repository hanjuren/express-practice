import express from "express";
import { 
    changePassword, 
    editProfile, 
    userDetail, 
    users } from "../controller/userControllers";
import { onlyPrivate } from "../middlewares";
import routes from "../routess";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;