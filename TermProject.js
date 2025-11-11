// Get the video element by its ID
    var video = document.getElementById('myVideo');
    
    // Set the duration the video should play in milliseconds (e.g., 5000ms for 5 seconds)
    var playDuration = 3600000;

    // Add an event listener to ensure the video can be played (e.g., waiting for the 'canplay' event or placing the script at the end of the body)
    // A simpler way for immediate execution on load is placing the script right before </body>

    // Use setTimeout to pause the video after the specified duration
    setTimeout(function() {
        video.pause();
    }, playDuration);