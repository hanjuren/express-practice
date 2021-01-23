import express from "express";
import { nextTick } from "process";
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on http://localhost:${PORT}`);
}

const handleHome = (req, res) => {
    res.send('<a href="/profile">Info</a> Hello from Home!!');
}

const handleProfile = (req, res) => {
    res.send('Hello from Profile');
}

const betweenHome = (req, res, next) => { // 미들웨어는 req, res, next
    console.log("i'm between");
    next(); // next를 호출해야 다음 미들웨어로 넘어간다.
}

app.use(betweenHome); // 미들웨어 순서 중요...

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
