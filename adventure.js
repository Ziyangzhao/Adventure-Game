//Game var
var title = document.getElementById("title");
var instructionScreen = document.getElementById("button2");
var gameContainer = document.getElementById('game-container');
var gameButtons = document.getElementById('game-buttons');
var description = document.getElementById('description'); 
var inventoryItem = document.getElementById('inventoryItem');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var img = document.createElement("img");
var p = document.createElement("p");
p.id = 'text';


//Items var
//var bow = document.createElement


// Lay Out
function layOut(){
	title.innerHTML = "Insert title";
	img.id = 'layout';
	img.src = "images/door.png"; //REMOVE DOOR.PNG
	gameContainer.appendChild(img);
	description.style.display = 'none';
	img.style.width = '100%';
	title.style.position = 'relative';
	title.style.left = '430px';
	title.style.top = '40px';
	title.style.color = 'white';	
	inventoryItem = "images/inventory.jpg";
	//button1
	button1.style.display = 'block';
	button1.style.position = 'relative';
	button1.style.top = '471px';
	button1.style.left = '840px';
	button1.style.height = '50px';
	button1.style.width = '150px';
	button1.innerHTML = 'tekst';
	//button2
	button2.style.display = 'block';
	button2.style.position = 'relative';
	button2.style.top = '417px';
	button2.style.left = '640px';
	button2.style.height = '50px';
	button2.style.width = '150px';
	button2.innerHTML = 'tekst';
	//button3
	button3.style.display = 'block';
	button3.style.position = 'relative';
	button3.style.top = '363px';
	button3.style.left = '435px';
	button3.style.height = '50px';
	button3.style.width = '150px';
	button3.style.zIndex = '1';
	button3.innerHTML = 'tekst';
	gameButtons.style.height = '20px';
	gameButtons.style.width = '300px';
	// button1.addEventListener('click', ***);
	// button2.addEventListener('click', ***);
	// button3.addEventListener('click', ***);
	var text1 = document.createElement("div");
	text1.appendChild(p);
	document.getElementById('game-container').appendChild(text1);
	text1.id = 'text1';
	text1.style.zIndex = '1';
	text1.style.width = '519px';
	text1.style.height = '142px';
	text1.style.position = 'relative';
	text1.style.bottom = '78px';
	text1.style.right = '10px';
	p.innerHTML = 'insert text';
	//Tekst 1 scene 1"You’ve woken up. You look around and you don’t remember what’s happened. You are stuck in jail. “I’ve got to find a way out of here.”";
	p.style.position = 'relative';
	p.style.top = '10px';
	p.style.left = '30px';
	p.style.width = '500px';
	text1.style.backgroundImage =  "url('images/TextBar.png')";
	var inventory = document.createElement("img");
	inventory.id = 'inventory';
	inventory.src = "images/inventory.jpg";
	gameContainer.appendChild(inventory);
	inventory.style.position = 'relative';
	inventory.style.bottom = '220px';
	inventory.style.left = '510px';
	inventory.style.width = '480px';
	inventory.style.height = '140px';
	console.log("Game level");
}

//First screen//
function gameName(){
	title.innerHTML = "Adventure Game";
	img.id = 'homescreen'; //Var = <img>
	img.src = "images/Start-Screen.jpg"; //Foto wordt geplaatst in de var
	gameContainer.appendChild(img);
	img.style.position = 'relative';
	img.style.bottom = '60px';
	img.style.right = '10px';
	img.style.zIndex = '0';
	description.style.display = 'none';
	img.style.width = '100%';
	title.style.position = 'relative';
	title.style.left = '410px';
	title.style.top = '260px';
	title.style.color = 'white';
	title.style.zIndex = '1';
	inventoryItem.style.display = 'none';
	button1.innerHTML = "Start Game";
	button1.style.zIndex = '1';
	button2.style.zIndex = '1';
	button2.innerHTML = "HowToPlay";
	button3.style.display = 'none';
	button1.style.position = 'relative';
	button1.style.top = '250px';
	button1.style.left = '445px';
	button2.style.position = 'relative';
	button2.style.top = '325px';
	button2.style.left = '290px';
	button1.addEventListener('click', jail);
	button2.addEventListener('click', instruction);
	console.log("Adventure Game");
}

function closeScreen(){
	var screen = document.getElementById('instructionScreen');
	screen.style.display = 'none';
	button3.style.display = 'none';

	gameName();
}

function instruction(){ 
	var instructionScreen = document.getElementById("instructionScreen");
	if(!instructionScreen){
		instructionScreen = document.createElement("div");
	}
	instructionScreen.style.display = "block";
	instructionScreen.id = 'instructionScreen';
	var description = document.getElementById('game-container');
	description.appendChild(instructionScreen);
	instructionScreen.style.width = '700px';
	instructionScreen.style.height = '400px';
	instructionScreen.style.backgroundColor = 'white';
	instructionScreen.style.position = 'absolute';
	instructionScreen.style.top = '140px';
	instructionScreen.style.left = '320px';
	instructionScreen.style.zIndex = '2';
	button3.style.display = 'block';
	button3.style.position = 'absolute';
	button3.style.top = '187px';
	button3.style.left = '369px';
	button3.innerHTML = 'X';
	button3.style.fontSize = '20px';
	button3.style.padding = '20px, 20px';
	button3.style.zIndex = '3';
	button3.addEventListener('click', closeScreen);
	instructionScreen.style.margin = '50px';
	instructionScreen.style.border = 'black solid 3px';
	var instruction = document.createElement("div");
	instruction.id = 'instruction';
	var instructionText = document.createElement("div");
	document.getElementById('instructionScreen').appendChild(instructionText);
	instructionText.innerHTML = 'This game only involves using your mouse. <br> It’s an on-click Adventure Game with a story. <br> The choices you makes might affect your future… <br>Have fun! :)';
	instructionText.style.zIndex = '2';
	instructionText.style.position = 'relative';
	instructionText.style.top = '150px';
	instructionText.style.left = '200px';
	console.log("Instruction Screen");
}

//Scene1
function jail(){
	console.log("Scene 1 'Jail'");
	layOut();
	title.innerHTML = "Jail";
	img.src = "images/jail.jpg";
	title.style.position = 'relative';
	title.style.left = '500px';
	title.style.top = '30px';
	title.style.color = 'white';
	p.innerHTML = "You’ve woken up. You look around and you don’t remember what’s happened. You are stuck in jail. “I’ve got to find a way out of here.”";
	text.style.position = 'relative';
	text.style.left = '20px';
	document.getElementById('text').style.position = 'relative';
	document.getElementById('text').style.top = '15px';
	document.getElementById('game-buttons').style.position = 'relative';
	document.getElementById('game-buttons').style.bottom = '2px';
	button1.innerHTML = 'Look Around';
	button1.removeEventListener('click', jail);
	button1.addEventListener('click', jailTwo);
	button1.style.fontSize = '14px';
	button2.style.display = 'none';
	button3.style.display = 'none';
}

function jailTwo(){
	console.log("Scene 1a 'Jail'");
	img.src = "images/jail2.jpg";
	img.style.height = "557px";
	p.innerHTML = "You look around.";
	button1.removeEventListener('click', jailTwo);
	button1.addEventListener('click', jailThree);
}

function jailThree(){
	console.log("Scene 1b 'Jail'");
	img.src = "images/jail3.png";
	p.innerHTML = "Choice: Towards your left is a sewer which you could take a look at/Await whatever fate has in store for you."
	button1.style.display = 'block';
	button2.style.display = 'block';
	button1.innerHTML = "Wait";
	button2.innerHTML = "Sewer";
	button1.removeEventListener('click', jailThree);
	button1.addEventListener('click', wait);
	button2.addEventListener('click', sewer);
}

function wait(){
	console.log("Scene 1c 'Jail'");
	img.src = "images/guard.png";
	p.innerHTML = "You walk towards the cell door and a guard stands in front of you. “It is awake, Commander.” The guard shouted towards the Commander.";
	button1.removeEventListener('click', wait);
	button1.addEventListener('click', waitTwo);
	button1.innerHTML = "Next";
	button2.style.display = 'none';
}

function waitTwo(){
	console.log("Scene 1 'Jail'");
	img.src = "images/dialoguescreen.png";
	p.innerHTML = "You get taken away by the guards.";
	button1.removeEventListener('click', waitTwo);
	button1.addEventListener('click', takenAway);
}

function takenAway(){
	console.log("Scene 1 'Jail'");
	p.innerHTML = "The guards blindfold you, you get pushed around.";
	button1.removeEventListener('click', takenAway);
	button1.addEventListener('click', executionBlock);
}

function executionBlock(){
	console.log("Scene 2 'Outside'");
	title.innerHTML = "Fiore (Outside)";
	img.src = "images/execution.jpg";
	p.innerHTML = "The blindfold gets taken off and you arrive at an execution block. You get put on an execution block and get executed. You are dead.";
}

gameName();