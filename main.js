console.log('outside doc ready!')

$(document).ready(function(){
  console.log('ready!');

  if (Hls.isSupported()) {
    console.log("hello hls.js!");
  }
})
