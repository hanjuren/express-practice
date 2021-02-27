import express from "express";
import passport from "passport";
import routes from "../routess";
import { home, search } from "../controller/videoController";
import { postJoin, getJoin, getLogin, postLogin, logout, githubLogin, postGithubLogin } from "../controller/userControllers";
import { onlyPrivate, onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate ,logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(routes.githubCallback, passport.authenticate("github", { failureRedirect: "/login" } ), postGithubLogin)

export default globalRouter;