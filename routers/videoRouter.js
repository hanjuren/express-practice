import express from "express";
import { editProfile } from "../controller/userControllers";
import { 
    editVideo, 
    upload, 
    videoDetail, 
    deleteVideo, 
    videos } from "../controller/videoController";
import routes from "../routess";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;