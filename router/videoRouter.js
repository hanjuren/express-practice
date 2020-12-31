import express from "express";
import routes from "../routess";

import {
    videos,
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controller/videoController";

import { uploadVideo } from "../middlewares";

const videoRouter = express.Router(); //라우터입니다.

//videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;