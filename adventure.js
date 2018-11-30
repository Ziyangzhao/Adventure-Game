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

//Items var

//Lay Out
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
	var p = document.createElement("p");
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
	button1.addEventListener('click', layOut);
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
// function jail(){
// 	console.log("Scene 1 'Jail'");
// 	newImage.src = "images/jail.jpg";
// 	title.innerHTML = "Jail";
// 	title.style.display = 'relative';
// 	title.style.width = '100%';
	// title.style.position = 'relative';
	// title.style.left = '375px';
	// title.style.top = '70px';
// 	title.style.color = 'white';
// 	newImage.style.width = '100%';
// 	newImage.style.marginTop = '1px';
// 	button1.style.position = 'relative';
// 	button1.style.top = '540px';
// 	button1.style.left = '641px';
// 	button1.style.display = 'block';
// 	button1.innerHTML = 'Walk around';
// 	button1.addEventListener('click', jailTwo)
// 	button2.style.display = 'none';
// 	button3.style.display = 'none';
	// var text1 = document.createElement("div");
	// var p = document.createElement("p");
	// text1.appendChild(p);
	// document.getElementById('game-container').appendChild(text1);
	// text1.id = 'text1';
	// text1.style.width = '519px';
	// text1.style.height = '142px';
	// p.innerHTML = "You’ve woken up. /n You look around and you don’t remember what’s happened. You are stuck in jail. “I’ve got to find a way out of here.”";
	// text1.style.backgroundImage =  "url('images/TextBar.png')";
// }

// function jailTwo(){
// 	console.log("Scene 1a 'Jail'");
// 	var jail2 = document.createElement("img");
// 	jail2.src = "images/jail2.jpg";
// 	var textbar = document.createElement("img");
// 	textbar.src = "images/TextBar.png"
// 	button1.style.display = 'none';
// 	button2.style.display = 'none';
// 	button3.style.display = 'none';
// 	title.innerHTML = "Jail";
// 	title.style.display = 'relative';
// 	title.style.width = '100%';
// 	title.style.position = 'relative';
// 	title.style.left = '375px';
// 	title.style.top = '70px';
// 	title.style.color = 'white';
// }

gameName();