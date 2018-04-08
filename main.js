console.log('js file, ready!')

$(document).ready(function(){
  console.log('jQuery, ready!');

  if(Hls.isSupported()) {
      var video = document.getElementById('video');
      var hls = new Hls();
      hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
    });
   }
   // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
   // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
   // This is using the built-in support of the plain video element, without using hls.js.
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
      video.addEventListener('canplay',function() {
        video.play();
      });
    }
    
  // if (Hls.isSupported()) {
  //   console.log("hello hls.js!");
  //   var video = document.getElementById('video');
  //     var hls = new Hls();
  //     // bind them together
  //     hls.attachMedia(video);
  //     // MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
  //       hls.on(Hls.Events.MEDIA_ATTACHED, function () {
  // 		    console.log("video and hls.js are now bound together !")
  //         hls.loadSource("https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8")
  //           hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
  //           console.log("manifest loaded, found " + data.levels.length + " quality level");
  //           video.play();
  //         })
  //       })
  // }
  // // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
  //      // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
  //      // This is using the built-in support of the plain video element, without using hls.js.
  //       else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  //         console.log("hls.js not supported!");
  //         video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
  //         video.addEventListener('canplay',function() {
  //           video.play();
  //         });
  //
  //       }
})
