var buddyName;
var buddyImage;

function setBuddy(){
    const button = document.getElementById('submit');
    button.addEventListener('click',function(){
        let value = document.getElementById('value').value;
        buddyName = document.getElementById('value').value;
        console.log(buddyName);
        let input = document.getElementById('input').value;
        let output;
        if (input == ""){
            output = "atleast give it a name...";
        }else{
            output = "You chose " + value + " who's name is " + input + " ridirecting...";
            setTimeout(() => {
                location.replace("indexStu.html");
            }, 3000);
        }
        document.getElementById('output').innerText = output;
    })
}

function buddyImage(){
    const image = document.getElementById('chooseBuddy');
    const valueInput = document.getElementById('value');

    valueInput.addEventListener('change',function(){
        const value = valueInput.value;

        if (value == 'buddy1'){
            image.src = 'Bulb.png'
        }
        if (value == 'buddy2'){
            image.src = 'Squirt.png'
        }
        if (value == 'buddy3'){
            image.src = 'Char.png'
        }

        buddyImage = image;
    })
}

function showMe(){
    var name = "123";
	document.getElementById('name').innerHTML= buddyName;
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