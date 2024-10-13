

function permittedGetUserMedia(){
    return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
}



if(permittedGetUserMedia()){

    const video = document.querySelector('#live-vid');
    const mediaSource = new MediaSource();
    video.src = URL.createObjectURL(mediaSource);


    navigator.mediaDevices.getUserMedia({
        video: true
    }).then((stream) => processStream(stream, mediaSource));
}


function processStream(stream, mediaSource){
    const mediaRecorder  = new MediaRecorder(stream);
    const videoBuffer = mediaSource.addSourceBuffer('video/webm;codec=vp8');

    mediaRecorder.ondataavailable = (data)=>{
        let fileReader = new FileReader();
        let arrayBuffer;

        fileReader.onloadend = () => {
            arrayBuffer = fileReader.result;
            videoBuffer.appendBuffer(arrayBuffer)
        }
        fileReader.readAsArrayBuffer(data.data);
    }
    mediaRecorder.start()

    setInterval(() => {
        mediaRecorder.requestData()
    }, 1000);
}


