/* comment out lines 3-7 to run vitest*/

let buddyName;
let buddyPicture;
let bulbTree,charTree,squirtTree,evoFlag;
let storedName = localStorage.getItem('storedBuddyName');
let storedImagePath = localStorage.getItem('storedBuddyImage');

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

fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'hello' })
});


function buddyImage(){
    const image = document.getElementById('chooseBuddy'); 
    const valueInput = document.getElementById('value');

    let finalImagePath = 'MediaContent/bulb.png';
    bulbTree = true;
    squirtTree = false;
    charTree = false;
    evoFlag = false;
    image.src = finalImagePath; 
    window.buddyImage = finalImagePath; // default image if no event occurs

    localStorage.setItem("bulbTree", bulbTree);
    localStorage.setItem("squirtTree", squirtTree);
    localStorage.setItem("charTree", charTree);
    localStorage.setItem("evoFlag", evoFlag);//save values of boolean between pages


    valueInput.addEventListener('change', function() {
        const value = valueInput.value;
        if (value === 'Bulbasaur'){
            finalImagePath = 'MediaContent/Bulb.png';
            bulbTree = true;
            squirtTree = false;
            charTree = false;
        }
        if (value === 'Squirtle'){
            finalImagePath = 'MediaContent/Squirt.png';
            bulbTree = false;
            squirtTree = true;
            charTree = false;
        } 
        if (value === 'Charmander'){
            finalImagePath = 'MediaContent/Char.png';
            bulbTree = false;
            squirtTree = false;
            charTree = true;
        }

        localStorage.setItem("bulbTree", bulbTree);
        localStorage.setItem("squirtTree", squirtTree);
        localStorage.setItem("charTree", charTree);

        image.src = finalImagePath; 
        window.buddyImage = finalImagePath;
    });
}


function setBuddy(){
    const button = document.getElementById('submit');
  
    button.addEventListener('click', function() {
        let value = document.getElementById('value').value;
        let input = document.getElementById('input').value;

        /*saves the user name to a local variable that can be access throughout the program*/
        window.buddyName = document.getElementById('input').value;
        localStorage.setItem('storedBuddyName', window.buddyName);

        /*saves the choen buddy to a local variable that can be access throughout the program*/
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
                return (bulbTree,charTree,squirtTree)
            }, 3000);
        }
        document.getElementById('output').innerText = output;
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

    const bulbTree = JSON.parse(localStorage.getItem("bulbTree"));
    const squirtTree = JSON.parse(localStorage.getItem("squirtTree"));
    const charTree = JSON.parse(localStorage.getItem("charTree"));
    let evoFlag = JSON.parse(localStorage.getItem("evoFlag"));// grabs previous values from buddyImage

    let output;
    /**
     * There's currently 2 issues with this function that will be revised at a later time due
     * to time constraints: 
     * - the first issue is that the evolved pokemon will never populate the top
     * left image whenever you leave the shop page
     * - the second issue being that it isn't intentional for the buddy to "devolve" 
     * (i.e going from ivysaur to venasaur, then going back to ivysaur).
     * 
     * These changes will be made at a later date but the code has remnants of my attempt to fix the 2nd issue
     * as that one is a easier fix.
     */
    ivysaur.addEventListener('click',function(){
        if (evoFlag == true){
            output = "There's a time and place for this, but not right now"
        }
        if(bulbTree == true){
            output = storedName + " has evolved into Ivysaur!";  
            evoFlag = true;
            ImagePFP.src = 'MediaContent/ivy.png';
            localStorage.setItem('buddyPFP',ImagePFP);
        } else {
            output = storedName + " can't evolve into Ivysaur...";
        }
        
        document.getElementById('output').innerText = output;
    })

    Venasaur.addEventListener('click',function(){
        if(bulbTree == true && evoFlag == true){
            output = storedName + " has evolved into Venasaur!";  
            ImagePFP.src = 'MediaContent/ven.png';   
        } 
        if(bulbTree == true && evoFlag == false){
            output = storedName + " can't evolve to Venasaur just yet."; 
        }
        if(bulbTree == false){
            output = storedName + " can't evolve into Venasaur...";
        }
        document.getElementById('output').innerText = output;
    })

    Charmeleon.addEventListener('click',function(){
        if (evoFlag == true){
            output = "There's a time and place for this, but not right now"
        }
        if(charTree == true){
            output = storedName + " has evolved into Charmeleon!";  
            ImagePFP.src = 'MediaContent/charmeleon.png';
            evoFlag = true;
        } else {
            output = storedName + " can't evolve into Charmeleon...";
        }
        document.getElementById('output').innerText = output;
    })

    Charizard.addEventListener('click',function(){
        if(charTree == true && evoFlag == true){
            output = storedName + " has evolved into Charizard!";  
            ImagePFP.src = 'MediaContent/zard.png';   
        } 
        if(charTree == true && evoFlag == false){
            output = storedName + " can't evolve to Charizard just yet."; 
        }
        if(charTree == false){
            output = storedName + " can't evolve into Charizard...";
        }
        document.getElementById('output').innerText = output;
    })

    Wartortle.addEventListener('click',function(){
        if (evoFlag == true){
            output = "There's a time and place for this, but not right now"
        }
        if(squirtTree == true){
            output = storedName + " has evolved into Wartortle!";  
            ImagePFP.src = 'MediaContent/tortle.png';
            evoFlag = true;
        } else {
            output = storedName + " can't evolve into Wartortle...";
        }
        document.getElementById('output').innerText = output;
    })

    Blastoise.addEventListener('click',function(){
        if(squirtTree == true && evoFlag == true){
            output = storedName + " has evolved into Blastoise!";  
            ImagePFP.src = 'MediaContent/ven.png';   
        } 
        if(squirtTree == true && evoFlag == false){
            output = storedName + " can't evolve to Blastoise just yet."; 
        }
        if(squirtTree == false){
            output = storedName + " can't evolve into Blastoise...";
        }
        document.getElementById('output').innerText = output;
    })
}


/* button functions to redirect users, but doesnt allow them to go back to the previous page*/
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

//export{ home, shop, planner, timer }