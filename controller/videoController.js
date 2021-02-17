import routes from "../routess";

export const home = (req, res) => {
    res.render('home', { pageTitle: 'Home', videos });
}

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

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // upload and save video
    res.redirect(routes.videoDetail(1));
};


export const videoDetail = (req, res) => 
    res.render("videoDetail", { pageTitle: 'Video Detail' });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: 'Edit Video' });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: 'Delete Video' });