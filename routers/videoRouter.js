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
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// video upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// videoDetail
videoRouter.get(routes.videoDetail(), videoDetail);

// eidt video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;