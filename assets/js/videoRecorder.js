/* eslint-disable no-continue */
const recordContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
    console.log(event.timecode);
    const { data: videoFile } = event;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(videoFile);
    const down = confirm("다운로드 하시겠습니까?");
    if(down){
        let fileName = prompt("파일명을 입력해주세요.");    
        if(fileName === ""){
            fileName = "We-Tube-recorded"
        }
        link.download = `${fileName}.mp4`;
        document.body.appendChild(link);
        link.click();   
    }
};

function stopStreamedVideo(videoElem) {
    const stream = videoElem.srcObject;
    const tracks = stream.getTracks();
    
    tracks.forEach(function(track) {
    track.stop();
    });
    
    videoElem.srcObject = null;
}

const stopRecording = () => {
    videoRecorder.stop();
    recordBtn.removeEventListener("click", stopRecording);
    recordBtn.addEventListener("click", getVideo);
    recordBtn.innerHTML = "Start recording";
    stopStreamedVideo(videoPreview);
};
  
const startRecording = () => {
    videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.start();
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    recordBtn.addEventListener("click", stopRecording);
};
  
const getVideo = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1280, height: 720 }
        });
        videoPreview.srcObject = stream;
        videoPreview.muted = true;
        videoPreview.play();
        recordBtn.innerHTML = "Stop recording";
        streamObject = stream;
        startRecording();
    } catch (error) {
        recordBtn.innerHTML = "☹️ Cant record";
    } finally {
        recordBtn.removeEventListener("click", getVideo);
    }
};
  
function init() {
    recordBtn.addEventListener("click", getVideo);
}
  
if (recordContainer) {
    init();
}