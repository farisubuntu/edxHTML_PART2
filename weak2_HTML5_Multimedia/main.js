console.log('striting scripts');
var vidFileNames; //container array to hold the playlist items
var vidElement;// the <video> element that represinting player
window.onload=init;
var curPos=0;//point to the current postition index
function init(){
 // initializing the
 vidElement= document.getElementById('videoPlayer');
 // detecting the end of video:
vidElement.addEventListener('ended',nextVideo);
// fill arrays with file names of video folder:
vidFileNames=[
 "videos/10.webm",
 "videos/11.webm",
 "videos/1.mp4",
 "videos/2.mp4",
 "videos/3.mp4",
 "videos/4.mp4",
 "videos/5.mp4",
 "videos/6.mp4",
 "videos/7.mp4",
 "videos/8.mp4",
 "videos/9.mp4"
];
} //end of init function.


function play(){
 console.log('play button');
 vidElement.play();
}
function nextVideo(){

 console.log('nextVideo()');
 //TODO: check if CurPos reaching the last index (>= vidFileNames.length) and if so, reset to 0 index...
 curPos=curPos+1;
 // change video src attribute to next item
 vidElement.src=vidFileNames[curPos];
 vidElement.play();

}
function prevVideo(){
 console.log('prevVideo()');
 curPos=curPos-1;
 vidElement.src=vidFileNames[curPos];
 vidElement.play();
}
function forward10Sec(){
 console.log('forward10Sec');
}
function backward10Sec(){
 console.log('forward10sec');
}
