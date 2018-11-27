var title = document.getElementById("title");
var instructionScreen = document.getElementById("button2")
var gameContainer = document.getElementById('game-container');
var startScreen = document.createElement("img");
var description = document.getElementById('description'); 
var inventoryItem = document.getElementById('inventoryItem');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

//Eerste pagina//
function gameName(){
	title.innerHTML = "Adventure Game";
	startScreen.id = 'homescreen'; //Var = <img>
	startScreen.src = "images/Start-Screen.jpg"; //Foto wordt geplaatst in de var
	gameContainer.appendChild(startScreen);
	description.style.display = 'none';
	startScreen.style.width = '100%';
	title.style.position = 'relative';
	title.style.left = '300px';
	title.style.top = '260px';
	title.style.color = 'white';
	inventoryItem.style.display = 'none';
	button1.innerHTML = "Start Game";
	button2.innerHTML = "HowToPlay";
	button3.style.display = 'none';
	button1.style.position = 'relative';
	button1.style.top = '250px';
	button1.style.left = '335px';
	button2.style.position = 'relative';
	button2.style.top = '325px';
	button2.style.left = '180px';
	button1.addEventListener('click', jail);
	button2.addEventListener('click', instruction);
	console.log("Adventure Game");
}

function instruction(){ 
	var instructionScreen = document.createElement("div");
	instructionScreen.id = 'instructionScreen';
	var description = document.getElementById('description');
	gameContainer.insertBefore(instructionScreen, description);
	instructionScreen.style.width = '700px';
	instructionScreen.style.height = '400px';
	instructionScreen.style.backgroundColor = 'white';
	instructionScreen.style.position = 'absolute';
	instructionScreen.style.top = '140px';
	button1.style.display = 'none';
	button2.style.display = 'none';
	button3.style.display = 'block';
	button3.style.position = 'relative';
	button3.style.top = '111px';
	button3.style.left = '49px';
	button3.innerHTML = 'X';
	button3.style.fontSize = '20px';
	button3.style.padding = '20px, 20px';
	instructionScreen.style.margin = '50px';
	instructionScreen.style.border = 'black solid 3px';
	var instruction = document.createElement("div");
	instruction.id = 'instruction';
	//
	console.log("Instruction Screen");
}

function jail(){
	startScreen.src = "images/jail.jpg";
	console.log("Scene 1 'Jail'");
	title.innerHTML = "Jail";
	title.style.display = 'relative';
	title.style.top = '70px';
	title.style.left = '400px';
}

gameName();