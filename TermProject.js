var buddyName;
var buddyPicture;
var bulbTree, charTree, squirtTree,evoFlag; //Shop item requirements
var finalImagePath = '';
var storedName = localStorage.getItem('storedBuddyName');
var storedImagePath = localStorage.getItem('storedBuddyImage');


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

    
    finalImagePath = 'bulb.png';
    bulbTree = true;
    squirtTree = false;
    charTree = false;
    image.src = finalImagePath; 
    window.buddyImage = finalImagePath; //default values if event isn't called
    
    valueInput.addEventListener('change', function() {
        const value = valueInput.value;
        if (value === 'buddy1'){
            finalImagePath = 'Bulb.png';
            bulbTree = true;
            squirtTree = false;
            charTree = false;
        }
        if (value === 'buddy2'){
            finalImagePath = 'Squirt.png';
            bulbTree = false;
            squirtTree = true;
            charTree = false;
        } 
        if (value === 'buddy3'){
            finalImagePath = 'Char.png';
            bulbTree = false;
            squirtTree = false;
            charTree = true;
        }

        image.src = finalImagePath; 
        window.buddyImage = finalImagePath; 
        return bulbTree,squirtTree,charTree;
    });
}

function evoShop(){
    //i created 6 specific buttons that check for conditions hence i have to make 6 variables
    const ivysaur = document.getElementById('bulb1');
    const Venasaur = document.getElementById('bulb2');
    const Charmeleon = document.getElementById('char1');
    const Charizard = document.getElementById('char2');
    const Wartortle = document.getElementById('squirt1');
    const Blastoise = document.getElementById('squirt2');
    const ImagePFP = document.getElementById('buddyPFP');

    ivysaur.addEventListener('click',function(){
        let output;
        output = storedName + " has evolved into Ivysaur!";  
        // document.getElementById('output').innerText = output

        finalImagePath = 'ivy.png';
        localStorage.setItem('storedimagePath',finalImagePath);
        showMe();
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
    setTimeout(() => {
        location.replace("StuReward.html"); /* timer exits just to stop the user from skipping too fast, can be adjusted to a larger time interval if anything*/
    }, 3000);
}


// export{ setBuddy }