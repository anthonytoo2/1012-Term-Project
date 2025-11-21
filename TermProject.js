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

// export{setBuddy}