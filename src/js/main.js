var video = document.getElementById('_53mvd');
    var smallVideo = document.getElementById('_20lsnvd');

    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();

        smallVideo.srcObject = stream;
        smallVideo.play();
    });
    }

    function openNav() {
      document.getElementById("_20lsn").style.width = "320px";
    }

    function closeNav() {
      document.getElementById("_20lsn").style.width = "0";
    }