import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import { githubLoginCallback, /*fcebookLoginCallback*/ } from "./controller/userControllers";


passport.use(User.createStrategy());

passport.use(new GithubStrategy({
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        callbackURL: `http://localhost:4000/auth/github/callback`
    }, githubLoginCallback)
);

// passport.use(new FacebookStrategy({
//         clientID: process.env.FB_ID,
//         clientSecret: process.env.FB_SECRET,
//         callbackURL: `https://wetube.loca.lt/auth/facebook/callback` 
//     }, fcebookLoginCallback)
// );

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());