import express from "express";
const app = express(); 

const PORT = 4000;
 
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`); //서버 생성

const handelHome = (req, res) => res.send("Hello from my ass");
//babel 사용. arrow function of javascript
const handleProfile = (req, res) => res.send("You are on my profile"); //응답.

const betweenHome = (req, res, next) => {
    console.log("between");
    next();
};

app.use(betweenHome);

app.get("/", handelHome); //라우터 생성

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

