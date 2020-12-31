import express from "express";
import routes from "../routess";

import {
    videos,
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo
} from "../controller/videoController";

import { uploadVideo } from "../middlewares";

const videoRouter = express.Router(); //라우터입니다.

//videoRouter.get(routes.videos, videos);

//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video detail
videoRouter.get(routes.videoDetail(), videoDetail);

//edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;