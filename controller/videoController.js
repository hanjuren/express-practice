import routes from "../routess";
import Video from "../models/Video";
import fs from "fs";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        //console.log(videos);  
        res.render('home', { pageTitle: 'Home', videos });
    } catch(error) {
        console.error(error);
        res.render('home', { pageTitle: 'Home', videos : []});
    }
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: 'Search', searchingBy, videos });
};

//export const videos = (req, res) => res.render("videos");
// 비디오 업로드
export const getUpload = (req, res) => 
    res.render("upload", { pageTitle: 'Upload' });

export const postUpload = async (req, res) => {
    const { 
        body : { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo)
    // upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
};


export const videoDetail = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        console.log(video);
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        console.error(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const postEditVideo =  async (req, res) => {
    const {
        params: {id},
        body: { title, description },
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};


export const deleteVideo =  async (req, res) => {
    const {
        params : {id}
    } = req;
    try {
        const video = await Video.findOneAndRemove({_id: id});
        console.log(video);
        fs.unlinkSync(video.fileUrl); // 폴더에 비디오 삭제하기 귀찮으니까...
    } catch (error) {
        console.error(error);
    }
    res.redirect(routes.home);
};