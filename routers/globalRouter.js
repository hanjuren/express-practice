import express from "express";
import passport from "passport";
import routes from "../routess";
import { home, search } from "../controller/videoController";
import { 
    postJoin, 
    getJoin, 
    getLogin, 
    postLogin, 
    logout, 
    githubLogin, 
    postGithubLogin, 
    getMe,
    facebookLogin,
    postFacebookLogin } from "../controller/userControllers";
import { onlyPrivate, onlyPublic } from "../middlewares";

const globalRouter = express.Router();

// 회원 가입
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

// 로그인
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate ,logout);

// 깃허브
globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
    routes.githubCallback, 
    passport.authenticate("github", { failureRedirect: "/login" } ), 
    postGithubLogin
);

// User Detail
globalRouter.get(routes.me, getMe);

// 페이스북
// globalRouter.get(routes.facebook, facebookLogin);
// globalRouter.get(
//     routes.facebookCallback, 
//     passport.authenticate("faccebook", { failureRedirect: "/login" }),
//     postFacebookLogin
// );

export default globalRouter;