const recordContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;

const handleVideoData = (event) => {
    console.log(event);
}

const startRecording = () => {
    const videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.start(); 
    console.log(videoRecorder);
    videoRecorder.addEventListener("dataavailable", handleVideoData);
};

const getVideo = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1280, height: 620 }
        });
        videoPreview.srcObject = stream;
        videoPreview.muted = true;
        videoPreview.play();
        recordBtn.innerHTML = "Stop recording";
        streamObject = stream;
        startRecording(streamObject);
    } catch(error){
        recordBtn.innerHTML = "Can't record";
    } finally {
        recordBtn.removeEventListener("click", startRecording);
    }
};

function init() {
    recordBtn.addEventListener("click", getVideo);
}

if(recordContainer) {
    init();
}