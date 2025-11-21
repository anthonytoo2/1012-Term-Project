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


function setBuddy(){
    const button = document.getElementById('submit');
    let value = document.getElementById('value').value();
    let input = document.getElementById('input').value();
    let output = "";
    document.getElementById('output').innerText = output;
    button.addEventListener('click',function(){
    
        if (input == ""){
            output = "atleast give it a name...";
        }else{
            output = "you chose" + value + "who's name is" + input;
        }

    })
}

//this will update a point variable for the reward page, with a button that says Home

//this exists outside the block so that it doesn't reset to 0 each time the pointVariable function is called
// var reward = 0;

// function pointVariable(){
//     const button = document.getElementById('rewardButton');
//         rewardButton.addEventListener('click',function(){
//         reward += 5;
//         sessionStorage.setItem('userRewards', reward);
//         location.replace("IndexStu.html");
//         })
//     }

function display(){
        document.getElementById("displayValue").innerHTML = output;
        let retrievedVariable = sessionStorage.getItem('userRewards');
        output = "Current Points:" + userRewards;
        document.getElementById('displayElementId').innerText = output;
}

function home(){
    location.replace("IndexStu.html");
}

function shop(){
    location.replace("StuShop.html");
}

function planner(){
    location.replace("StuImportantDates.html");
}
function timer(){
    location.replace("StuTimer.html");
}
function homework(){
    location.replace("StuHomework.html");
}


function studyVideo(){
    // Get the video element
  const myVideo = document.getElementById('myVideo');

  // Add an event listener for the 'ended' event
  myVideo.addEventListener('ended', function() {

    location.replace("StuReward.html");
    
  });
}

// export{setBuddy}