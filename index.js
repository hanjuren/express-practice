import express from "express"; // 서버
import morgan from "morgan"; // node.js 용 로깅 미들웨어
import helmet from "helmet"; // 보안을 위해 사용
import cookieParser from "cookie-parser";
import bodyParser, { json } from "body-parser";
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

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 중첩된 객체 표현을 할지 말지 정하는것 true는 qs모듈사용 false는 query-string모듈 사용
app.use(helmet());
app.use(morgan('dev'));

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
