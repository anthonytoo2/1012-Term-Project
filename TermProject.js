function setBuddy(){
    const button = document.getElementById('submit');
    button.addEventListener('click',function(){
        let value = document.getElementById('value').value;
        console.log(value);
        let input = document.getElementById('input').value;
        let output;
        if (input == ""){
            output = "atleast give it a name...";
        }else{
            output = "You chose " + value + " who's name is " + input;
        }
        document.getElementById('display').innerText = output;
    })
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


function studyVideo(){
    // Get the video element
  const myVideo = document.getElementById('myVideo');

  // Add an event listener for the 'ended' event
  myVideo.addEventListener('ended', function() {

    location.replace("StuReward.html");
    
  });
}

// export{ setBuddy }