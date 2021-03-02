import express from "express";
import { 
    getChangePassword, 
    postChangePassword, 
    getEditProfile,
    postEditProfile, 
    userDetail, 
     } from "../controller/userControllers";
import { onlyPrivate, uploadAvatar } from "../middlewares";
import routes from "../routess";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar ,postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;