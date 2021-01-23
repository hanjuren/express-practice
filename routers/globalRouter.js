import express from "express";
import { join, login, logout } from "../controller/userControllers";
import { home, search } from "../controller/videoController";
import routes from "../routess";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;