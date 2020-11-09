import express from "express";
import routes from "../routess";
import { home, search } from "../controller/videoController"; 
import { join, login, logout} from "../controller/userController"; 

const globalRouter = express.Router(); //라우터
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;