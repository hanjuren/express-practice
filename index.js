import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express(); 

const PORT = 4000;
 
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`); //서버 생성

const handelHome = (req, res) => res.send("Hello from my ass");
//babel 사용. arrow function of javascript
const handleProfile = (req, res) => res.send("You are on my profile"); //응답.

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handelHome); //라우터 생성

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

