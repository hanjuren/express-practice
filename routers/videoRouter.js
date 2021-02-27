import express from "express";
import { 
    getEditVideo,
    postEditVideo,
    postUpload,
    getUpload,
    videoDetail, 
    deleteVideo, 
     } from "../controller/videoController";
import routes from "../routess";
import { onlyPrivate, uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// video upload
videoRouter.get(routes.upload,onlyPrivate, getUpload);
videoRouter.post(routes.upload,onlyPrivate, uploadVideo, postUpload);

// videoDetail
videoRouter.get(routes.videoDetail(), videoDetail);

// eidt video
videoRouter.get(routes.editVideo(),onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(),onlyPrivate, postEditVideo);

//delete video
videoRouter.get(routes.deleteVideo(),onlyPrivate, deleteVideo);

export default videoRouter;