import express from "express"; // 서버
import morgan from "morgan"; // node.js 용 로깅 미들웨어
import helmet from "helmet"; // 보안을 위해 사용
import cookieParser from "cookie-parser";
import bodyParser, { json } from "body-parser";
import { localMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter"; // userRouter require. default로 export하지 않았기때문에  {}로 받아옴.
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routess";

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));
app.set('view engine', 'pug');
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
//app.use(express.json());
//app.use(express.urlencoded( {extended: false } ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 중첩된 객체 표현을 할지 말지 정하는것 true는 qs모듈사용 false는 query-string모듈 사용
app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;