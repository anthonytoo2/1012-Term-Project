var buddyName;

function setBuddy(){
const button = document.getElementById('submit');
  
  button.addEventListener('click', function() {
    let value = document.getElementById('value').value;
    let input = document.getElementById('input').value;

    window.buddyName = document.getElementById('input').value;
    localStorage.setItem('storedBuddyName', window.buddyName);

    if (window.buddyImage) {
        localStorage.setItem('storedBuddyImage', window.buddyImage);
    } else {
        console.warn("User did not select an image. Using default path.");
        localStorage.setItem('storedBuddyImage', 'default.png');
    }
    let output;
    if (input === "") {
        output = "atleast give it a name...";
    } else {
        output = "You chose " + value + " who's name is " + input + " redirecting...";
        setTimeout(() => {
            location.replace("indexStu.html");
        }, 3000);
    }
    document.getElementById('output').innerText = output;
  });
}

function showMe(){

    const storedName = localStorage.getItem('storedBuddyName');
    const storedImagePath = localStorage.getItem('storedBuddyImage');


    const nameElement = document.getElementById('name'); 
    if (storedName && nameElement) {
         nameElement.innerHTML = storedName;
    }

    const imageElement = document.getElementById('buddyPFP');
    if (storedImagePath && imageElement) {
        imageElement.src = storedImagePath; 
    }
}


function buddyImage(){
const image = document.getElementById('chooseBuddy'); 
  const valueInput = document.getElementById('value');

  valueInput.addEventListener('change', function() {
    const value = valueInput.value;
    let finalImagePath = '';
    

    if (value == 'buddy1'){
      finalImagePath = 'Bulb.png';
    }
    if (value == 'buddy2'){
      finalImagePath = 'Squirt.png';
    } 
    if (value == 'buddy3'){
      finalImagePath = 'Char.png';
    }

    image.src = finalImagePath; 
    
    window.buddyImage = finalImagePath; 

  });
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

  const myVideo = document.getElementById('myVideo');

  myVideo.addEventListener('ended', function() {

    location.replace("StuReward.html");
    
  });
}

// export{ setBuddy }