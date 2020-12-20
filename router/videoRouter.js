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

const videoRouter = express.Router(); //라우터

//videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;