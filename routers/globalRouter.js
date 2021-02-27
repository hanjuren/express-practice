import express from "express";
import { postJoin, getJoin, getLogin, postLogin, logout } from "../controller/userControllers";
import { home, search } from "../controller/videoController";
import routes from "../routess";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;