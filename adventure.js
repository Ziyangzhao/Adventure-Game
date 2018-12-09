//Game var
var title = document.getElementById("title");
var instructionScreen = document.getElementById("instructionScreen");
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


//Items 
var items = [];
var bow = document.createElement('img');


//Refresh
function refresh(){
	window.location = window.location; //Refresh
}

function pickItem(item) {

	if(items.indexOf(item) === -1) {
		items.push(item);
	}else {
		alert("ïtem already in inventory");
	}
}

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
	button1.style.top = '460px';
	button1.style.left = '840px';
	button1.style.height = '60px';
	button1.style.width = '150px';
	button1.innerHTML = 'tekst';
	//button2
	button2.style.display = 'block';
	button2.style.position = 'relative';
	button2.style.top = '320px';
	button2.style.left = '840px';
	button2.style.height = '60px';
	button2.style.width = '150px';
	button2.innerHTML = 'tekst';
	//button3
	button3.style.display = 'block';
	button3.style.position = 'relative';
	button3.style.top = '180px';
	button3.style.left = '840px';
	button3.style.height = '60px';
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
	//var instructionScreen = document.getElementById("instructionScreen");
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



//Scene 1 Jail
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
	p.innerHTML = "[Choice:] Towards your left is a sewer which you could take a look at/<br> Await whatever fate has in store for you."
	button1.style.display = 'block';
	button2.style.display = 'block';
	button1.innerHTML = "Wait";
	button2.innerHTML = "Sewer";
	button1.removeEventListener('click', jailThree);
	button1.addEventListener('click', wait);
	button2.addEventListener('click', sewer);
}



//Scene 1 Jail (wait)
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
	console.log("Scene 1d 'Jail'");
	img.src = "images/takenaway.png";
	p.innerHTML = "You get taken away by the guards.";
	button1.removeEventListener('click', waitTwo);
	button1.addEventListener('click', takenAway);
}

function takenAway(){
	console.log("Scene 1e'Jail'");
	img.src = "images/dialoguescreen.png";
	p.innerHTML = "The guards blindfold you, you get pushed around.";
	button1.removeEventListener('click', takenAway);
	button1.addEventListener('click', executionBlock);
}

function executionBlock(){
	console.log("'Dead'");
	title.innerHTML = "Fiore (Outside)";
	img.src = "images/execution.jpg";
	p.innerHTML = "The blindfold gets taken off and you arrive at an execution block. You get put on an execution block and get executed. You are dead.";
	button1.innerHTML = "Return to Menu";
	button1.removeEventListener('click', executionBlock);
	button1.addEventListener('click', refresh);
}



//Scene 1 Jail (sewer)
function sewer(){
	console.log("Scene 2 'Sewer'");
	title.innerHTML = "Sewer";
	img.src = "images/Sewer1.png";
	p.innerHTML = "You take a closer look at the ledge. It seems loose. You attempt to open it.";
	button1.innerHTML = "Open ledge";
	button2.style.display = 'none';
	button3.style.zIndex = '0';
	instructionScreen.style.display = 'none';
	button1.removeEventListener('click', sewer);
	button1.addEventListener('click', sewer2);
	button2.removeEventListener('click', sewer);
}

function sewer2(){
	console.log("Scene 2a 'Sewer'");
	img.src = "images/openledge.png";
	p.innerHTML = "It's open! “I’ve got to get out of here before the guards come.”";
	button1.innerHTML = "Squeeze through";
	button1.removeEventListener('click', sewer2);
	button1.addEventListener('click', sewer3);
}



//Scene 2 Sewer (escape)
function sewer3(){
	console.log("Scene 2b 'Sewer'");
	img.src = "images/sewer2.jpg";
	p.innerHTML = "You jumped through and are now in a sewer.“Ugh, it smells awfull in <br> here. Well, I'm in a sewer after all.”";
	button1.innerHTML = "Next";
	button1.removeEventListener('click', sewer3);
	button1.addEventListener('click', sewer4);
}

function sewer4(){
	console.log("Scene 2c 'Sewer'");
	img.src = "images/sewer3.jpg";
	var lever = document.createElement("img");
	lever.id = "lever";
	lever.src = "images/lever.png";
	lever.style.position = 'absolute';
    lever.style.top = '34%';
    lever.style.right = '32%';
	document.getElementById("game-container").appendChild(lever);
	p.innerHTML = "You look around the area. “Perhaps there might be a way to open that <br> door?” (Click on something that could open the door)";
	button1.style.display = 'none';
	button1.removeEventListener('click', sewer4);
	lever.addEventListener('click', sewer5);
}

function sewer5(){
	console.log("Scene 2d 'Sewer'");
	img.src = "images/dialoguescreen.png";
	p.innerHTML = "The gate has opened.";
	lever.style.display = 'none';
	button1.style.display = 'block';
	button1.innerHTML = 'Next';
	lever.removeEventListener('click', sewer5);
	button1.addEventListener('click', sewer6);
}

function sewer6(){
	console.log("Scene 2e 'Sewer'");
	img.src = "images/sewerlight.png";
	title.innerHTML = 'Sewer';
	p.innerHTML = "You walk towards the light..";
	button1.innerHTML = 'Next';
	button1.removeEventListener('click', sewer6);
	button1.removeEventListener('click', gameName);
	button1.removeEventListener('click', refresh);
	button1.addEventListener('click', outside);
}



//Scene 3 Outside (escaped)
function outside(){
	console.log("Scene 3 'Outside'");
	img.src = "images/outside.png";
	title.innerHTML = 'Fiore (Outside)';
	title.style.left = '435px';
	p.innerHTML = "You have succesfully escaped.";
	button1.innerHTML = "Next";
	button3.style.display = 'none';
	button1.removeEventListener('click', outside);
	button1.removeEventListener('click', executionBlock);
	button1.addEventListener('click', outside2);
}

function outside2(){
	console.log("Scene 3a 'Outside'");
	p.innerHTML = "The sun is slowly setting. [Choice:] You see a small village just a little <br> further up ahead. You could visit there but people might recognize your <br> wanted face/You take another path but you don't know where it may lead <br> you."
	button1.innerHTML = "Village";
	button2.style.display = 'block';
	button2.innerHTML = "Other path";
	button1.removeEventListener('click', outside2);
	button1.addEventListener('click', bridge);
	button2.addEventListener('click', otherPath);
}



//Scene 4 Strange path (otherPath)
function otherPath(){
	console.log("Scene 3b 'Outside'");
	img.src = "images/otherPath.png";
	title.innnerHTML = 'Fiore (Outside)';
	p.innerHTML = "You take the other path just to make sure no one would see you've escaped out of jail.";
	button1.innerHTML = 'Next';
	button1.removeEventListener('click', otherPath);
	button1.addEventListener('click', bear);
	button3.style.display = 'none';
	instructionScreen.style.display = 'none';
	// button2.removeEventListener('click', otherPath);
	button2.style.display = 'none'; 
}

function bear(){
	console.log("Scene 3c 'Bear Encounter'");
	img.src = "images/bear.png";
	title.innerHTML = 'Strange Path';
	title.style.left = '430px';
	p.innerHTML = "You stumble upon a bear. [Choice:] Attack the bear/Run away from the <br> bear.";
	button1.innerHTML = 'Attack';
	button2.style.display = 'block';
	button2.innerHTML = 'Run';
	button1.removeEventListener('click', bear);
	button1.addEventListener('click', attackBear);
	// button2.removeEventListener('click', otherPath);
	button2.addEventListener('click', run);
}

function attackBear(){
	console.log("Scene 3d 'Bear Attack'");
	img.src = "images/attackBear.png";
	p.innerHTML = "You punch the bear on it's head. The bear seems to get furious. The bear tore your shoulder apart from your body.";
	button2.style.display = 'none';
	button1.removeEventListener('click', attackBear);
	button1.addEventListener('click', attackBear2);
}

function attackBear2(){
	console.log("Scene 3e 'Bear Attack'");
	title.style.zIndex = '5';
	img.style.zIndex = '4';
	img.src = "images/bearAttack2.jpg";
	p.innerHTML = "You bleed out slowly... Untill you're dead. You're dead.";
	button1.removeEventListener('click', attackBear2);
	button1.innerHTML = "Return to main menu";
	button1.style.display = 'block';
	button1.style.zIndex = '6';
	button1.addEventListener('click', refresh);
	button2.style.display = 'none';
}

function run(){
	console.log("Scene 3e 'Bear Escape'");
	img.src = "images/bearEscape.jpg";
	title.innerHTML = "Strange Path";
	p.innerHTML = "You try to run away from the bear but it seems to be faster than you are. It catches up and tears your torse apart. You're dead.";
	button1.innerHTML = "Return to menu";
	button1.removeEventListener('click', run);
	button2.removeEventListener('click', run);
	button1.addEventListener('click', refresh);
}

function bridge(){
	console.log("Scene 4 'Bridge'");
	img.src = "images/bridge.png";
	p.innerHTML = "You are crossing the bridge and a guard walks towards you. [Guard]“What brings <br> you here, stranger?” (The guard doesn't seem to recognize you.)";
	button1.innerHTML = "Passing by";
	button2.style.display = 'none';
	button1.removeEventListener('click', bridge);
	button1.addEventListener('click', bridge2);
	button2.removeEventListener('click', bridge);
}

function bridge2(){
	console.log("Scene 4a 'Bridge'");
	img.src = "images/guard2.png";
	p.innerHTML = "[Guard]“Alright, I shall take your word. I hope you won't cause any trouble along <br> the way, stranger. Or else you'll have to go to jail, depending on what <br> you do of course.”";
	button1.innerHTML = "Thank you.";
	button1.removeEventListener('click', bridge2);
	button1.addEventListener('click', bridge3);
}
	
function bridge3(){
	console.log("Scene 4b 'Bridge'");
	img.src = "images/farewell.png";
	p.innerHTML = "The guard returns to guard duty for the village. You are entering the city.";
	button1.innerHTML = "Enter Village";
	button1.removeEventListener('click', bridge3);
	button1.addEventListener('click', village);
}



//Scene 5 Village
function village(){
	console.log("Scene 5 'Village'");
	title.innerHTML = "Hateno Village";
	img.src = "images/village.jpg";
	p.innerHTML = "You've entered the village of Fiore, Hateno Village.";
	button1.innerHTML = "Next";
	button1.removeEventListener('click', village);
	button1.addEventListener('click', village2);
}

function village2(){
	console.log("Scene 5a 'Village'");
	title.innerHTML = "Hateno Village";
	img.src = "images/storeHouse.png";// Voorkant van winkel SS maken
	p.innerHTML = "You enter a store to see if you can get anything you might need later on.";
	button1.innerHTML = "Enter store";
	button1.removeEventListener('click', village2);
	button1.addEventListener('click', store);
}

function store(){
	console.log("Scene 6 'Store'");
	img.src = "images/storeEntrance.png"; 
	title.innerHTML = "Store";
	p.innerHTML = "You enter a store.";
	button1.innerHTML = "Next";
	button1.removeEventListener('click', store);
	button1.addEventListener('click', store2);
}

function store2(){
	console.log("Scene 6a 'Store'");
	img.src = "images/Merchant.png";
	p.innerHTML = "[Merchant]“Welcome to our store. I don't think I've seen your face before <br> eh? You new here?” Well, take a look it doesn't matter who you are.";
	button1.innerHTML = "Thanks";
	button1.removeEventListener('click', store2);
	button1.addEventListener('click', store3);
} 

function store3(){
	console.log("Scene 6b 'Store'");
	p.innerHTML = "You look at the items. (click on anything that you want to know the price of)";
	button1.style.display = 'none';
	img.addEventListener('click', stranger);
	button1.removeEventListener('click', store3);
}

function stranger(){
	console.log("Scene 6c 'Store'");
	p.innerHTML = "Before you wanted to ask the merchant the <br> price of that item, someone calls you. “Hey, stranger! Come here.”";
	button1.style.display = 'block';
	button1.innerHTML = "Turn around";
	img.removeEventListener('click', stranger);
	button1.addEventListener('click', stranger1);
}

function stranger1(){
	console.log("Scene 6d 'Store'");
	img.src = "images/stranger.png";
	p.innerHTML = "Come closer, traveler.";
	button1.innerHTML = "Next";
	button1.removeEventListener('click', stranger1);
	button1.addEventListener('click', stranger2);
}

function stranger2(){
	console.log("Scene 6e 'Store'");
	img.src = "images/stranger2.png";
	button1.removeEventListener('click', stranger2);
	p.innerHTML = "“I sense something unique about you. You have the power of a <br> 'Dragonborn'. I just know it. You have to hurry and get to 'High Hrothgar' <br> and meet 'The Greybeards'. We've been waiting for a dragonborn <br> like you for the longest time.”";
	button1.addEventListener('click', stranger3);
}

function stranger3(){
	console.log("Scene 6f 'Store'");
	button1.removeEventListener('click', stranger3);
	p.innerHTML = "The stranger gives you an enchanted strong bow.";
	button1.style.display = 'none';
	bow.id = 'bow';
	bow.src = "images/strongBow.png";
	document.getElementById("game-container").appendChild(bow);
	bow.style.position = 'absolute';
	bow.style.top = '180px';
	bow.style.left = '250px';
	bow.style.zIndex = '50';
	bow.style.width = '250px'; 
	bow.style.height = '300px';
	bow.addEventListener('click', stranger4);
	bow.myParam = "bow";
}

function stranger4(item){
	// console.dir(item);
	// console.table(items);
	console.log("Scene 6g 'Store'");
	bow.id = 'bow';
	bow.src = "images/strongBow.png";
	document.getElementById("game-container").appendChild(bow);
	bow.style.position = 'absolute';
	bow.style.top = '620px';
	bow.style.left = '750px';
	bow.style.zIndex = '50';
	bow.style.width = '50px'; 
	bow.style.height = '50px';
	bow.removeEventListener('click', stranger4);
	bow.myParam = "bow";
	pickItem(item.target.myParam);
	p.innerHTML = "You head outside in search for 'The Greybeards'";
	button1.style.display = "block";
	button1.innerHTML = "Next";
	button1.addEventListener('click', exit);

}

function exit(){
	console.log("Scene 7a 'Outside'");
	button1.removeEventListener('click', exit);
	title.innerHTML = "Outside";
	img.src = "images/theGreybeardQuest.png";
	p.innerHTML = "“I'm on my way to... High Hrothgar!” You remember now. <br> Your name is Toraq, you were on your way to tell the king about the <br> attacks of the dragons. But on your way a thief hit you which caused you <br> to be unconcious. The guards probably have mistaken you for the thief <br> and put you in jail. “I have to hurry to The Greybeards <br> and return to the king. You make pace and start going towards High Hrothgar.”";
	button1.addEventListener('click', highHrothgar);
}

function highHrothgar(){
	console.log("Scene 7b 'Outside'");
	button1.removeEventListener('click', highHrothgar);
	img.src = "images/highHrothgar1.png";
	p.innerHTML = "You're on your way.";
	button1.addEventListener('click', highHrothgar1);
}

function highHrothgar1(){
	console.log("Scene 7c 'Outside'");
	button1.removeEventListener('click', highHrothgar1);
	img.src = "images/highHrothgar2.png";
	p.innerHTML = "You stumble upon two villagers.";
	button1.addEventListener('click', highHrothgar2);
}

function highHrothgar2(){
	console.log("Scene 7d 'Outside'");
	button1.removeEventListener('click', highHrothgar2);
	img.src = "images/highHrothgar3.png"
	p.innerHTML = "They look at you surprised. “You're not trying to climb the '7.000 Steps Mountain' are you?...”";
	button1.innerHTML = "I have to";
	button1.addEventListener('click', highHrothgar3);
}

function highHrothgar3(){
	console.log("Scene 7e 'Outside'");
	button1.removeEventListener('click', highHrothgar3);
	p.innerHTML = "“Well, to each their own I guess.” You continue forward.";
	button1.innerHTML = "Next";
	button1.addEventListener('click', highHrothgar4);
}

function highHrothgar4(){
	console.log("Scene 8a '7.000 Steps Mountain'");
	title.innerHTML = "The 7.000 Steps Mountain";
	title.style.position = 'relative';
	title.style.left = '410px';
	button1.removeEventListener('click', highHrothgar4);
	img.src = "images/highHrothgar4.png";
	p.innerHTML = " And so your quest to The Greybeards have begun.";
	button1.innerHTML = "Continue";
	button1.addEventListener('click', highHrothgar5);
}

function highHrothgar5(){
	console.log("Scene 8b '7.000 Steps Mountain'");
	button1.removeEventListener('click', highHrothgar5);
	img.src = "images/highHrothgar5.png";
	p.innerHTML = " And so your quest to The Greybeards has begun.";
	button1.innerHTML = "Continue";
	button1.addEventListener('click', highHrothgar6);
}

function highHrothgar6(){
	console.log("Scene 8c '7.000 Steps Mountain'");
	button1.removeEventListener('click', highHrothgar6);
	img.src = "images/highHrothgar6.png";
	p.innerHTML = "You walk up the stairs. You hear something growling nearby.";
	button1.innerHTML = "Next";
	button1.addEventListener('click', highHrothgar7);
}

function highHrothgar7(){
	console.log("Scene 8d '7.000 Steps Mountain'");
	button1.removeEventListener('click', highHrothgar7 );
	img.src = "images/highHrothgar7.png";
	p.innerHTML = "A monster has jumped in front of you! “I'll die if I try fighting that with my hands!”";
	button1.style.display = "none";
	bow.addEventListener('click', highHrothgar8);
}

function highHrothgar8(){
	console.log("Scene 8e '7.000 Steps Mountain'");
	bow.removeEventListener('click', highHrothgar8);
	img.src = "images/highHrothgar8.png";
	p.innerHTML = "You use your enchanted bow to put a few arrows in it's head.";
	button1.style.display = "block";
	button1.innerHTML = "Next";
	button1.addEventListener('click', highHrothgar9);	
}

function highHrothgar9(){
	console.log("Scene 8f '7.000 Steps Mountain'");
	button1.removeEventListener('click', highHrothgar9);
	img.src = "images/highHrothgar9.png";
	p.innerHTML = "You get closer to retrieve your arrows and to make sure it's dead. “It's dead. Thank god.”";
	button1.innerHTML = "Next";
	button1.addEventListener('click', highHrothgar10);
}

function highHrothgar10(){
	console.log("Scene 8g '7.000 Steps Mountain'");
	button1.removeEventListener('click', highHrothgar10);
	img.src = "images/highHrothgar10.png";
	p.innerHTML = "You continue your way up... It's starting to snow.";
	button1.innerHTML = "Next";
	button1.addEventListener('click', highHrothgar11);
}

function highHrothgar11(){
	console.log("Scene 8h '7.000 Steps Mountain'");
	button1.removeEventListener('click', highHrothgar11);
	img.src = "images/highHrothgar11.png";
	p.innerHTML = "After 3 hours of walking and climbing, you finally arrive at the temple of High Hrothgar.";
	button1.innerHTML = "Enter";
	button1.addEventListener('click', greybeards);
}

function greybeards(){
	console.log("Scene 9a 'High Hrothgar");
	button1.removeEventListener('click', greybeards);
	title.innerHTML = "High Hrothgar";
	img.src = "images/greybeards.png";
	p.innerHTML = "[The Greybeards] “We've been waiting for your arrival, chosen one.” <br> “How did you all know?”";
	button1.innerHTML = "How did you know?";
	button1.addEventListener('click', greybeards1);
}

function greybeards1(){
	console.log("Scene 9b 'High Hrothgar'");
	button1.removeEventListener('click', greybeards1);
	p.innerHTML = "That does not matter right now. What matters is that an Elder Dragon <br> is on it's way to the capital. You're the only one who can stop it. <br> You're a 'Dragonborn. Take this power that shall kill the dragon <br> once it's weak and you  will absorb all it's knowledge and powers.";
	button1.innerHTML = "...Okay";
	button1.addEventListener('click', fusRoDah);
}

function fusRoDah(){
	console.log("Scene 9c 'High Hrothgar'");
	button1.removeEventListener('click', fusRoDah);
	img.src = "images/power.png";
	p.innerHTML = "[You've received a shout 'Fus Ro Dah'] You feel powerfull. “Now go, Dragonborn! You've got a dragon to kill.”";
	button1.innerHTML = "Next";
	button1.addEventListener('click', returnVillage);
}

function returnVillage(){
	console.log("Scene 10a 'Hateno Village'");
	button1.removeEventListener('click',returnVillage);
	title.innerHTML = 'Hateno Village';
	img.src = "images/returnVillage.png";
	p.innerHTML = "You've returned to the village. On your way to the king.";
	button1.addEventListener('click', familiarPath);
}

function familiarPath(){
	console.log("Scene 11a 'Fiore'");
	button1.removeEventListener('click', familiarPath);
	title.innerHTML = 'Fiore (Outside)'
	img.src = "images/crossBridge.png";
	p.innerHTML = "You cross the bridge, where you originally came from.";
	button1.innerHTML = "Continue walking";
	button1.addEventListener('click', familiarPath2);	
}

function familiarPath2(){
	console.log("Scene 11b 'Fiore'");
	button1.removeEventListener('click', familiarPath2);
	img.src = "images/path.png";
	p.innerHTML = "Something's near..";
	button1.innerHTML = "Take a look";
	button1.addEventListener('click', sleepBear);	
}

function sleepBear(){
	console.log("Scene 11c 'Fiore'");
	button1.removeEventListener('click', sleepBear);
	img.src = "images/sleepBear.png";
	p.innerHTML = "It's a bear. It's sound asleep though.";
	button1.style.display = 'none';
	bow.addEventListener('click', killBear);
}

function killBear(){
	bow.removeEventListener('click', killBear);
	console.log("Scene 11d 'Fiore'");
	img.src = "images/sneakkill.png";
	p.innerHTML = "You draw your bow... Shoot.";
	button1.style.display = 'block';
	button1.innerHTML = "Next";
	button1.style.zIndex = '55';
	button1.addEventListener('click', retrieveArrow);
}

function retrieveArrow(){
	console.log("Scene 11e 'Fiore'");
	button1.removeEventListener('click', retrieveArrow);
	img.src = "images/bowKillBear2.png";
	p.innerHTML = "You collect your arrows and head to the capital.";
	// button1.innerHTML = " ";
	button1.addEventListener('click', whiterun);
}

function whiterun(){
	console.log("Scene 12a 'Whiterun'");
	button1.removeEventListener('click', whiterun);
	img.src = "images/whiterun.png";
	p.innerHTML = "You arrive at the capital, Whiterun.";
	button1.style.display = 'block';
	button1.innerHTML = "Next";
	button2.style.display = 'none';
	button1.addEventListener('click', whiterun2);	
}

function whiterun2(){
	console.log("Scene 12b 'Whiterun'");
	button1.removeEventListener('click', whiterun2);
	img.src = "images/whiterun2.png";
	p.innerHTML = "You have entered the capital.";
	button1.innerHTML = "Next";
	button1.addEventListener('click', whiterun3);
}

function whiterun3(){
	console.log("Scene 12c 'Whiterun'");
	button1.removeEventListener('click', whiterun3);
	img.src = "images/whiterun3.png";
	p.innerHTML = "You make your way towards the castle."; ///
	button1.addEventListener('click', whiterun4);
}

function whiterun4(){
	console.log("Scene 12d 'Whiterun'");
	button1.removeEventListener('click', whiterun4);
	img.src = "images/whiterun4.png";
	p.innerHTML = " ";
	button1.addEventListener('click', whiterun5);
}

function whiterun5(){
	console.log("Scene 12e 'Whiterun'");
	button1.removeEventListener('click', whiterun5);
	img.src = "images/whiterun5.png";
	p.innerHTML = " ";
	button1.addEventListener('click', dragonsreach);
}

function dragonsreach(){
	console.log("Scene 13a 'Dragonsreach'");
	button1.removeEventListener('click', dragonsreach);
	img.src = "images/dragonsreach.png";
	p.innerHTML = "You arrive at the door. Let's hope the king wants to hear me out.";
	button1.innerHTML = "Next";
	button1.addEventListener('click', dragonsreach1);
}

function dragonsreach1(){
	console.log("Scene 13b 'Dragonsreach'");
	button1.removeEventListener('click', dragonsreach1);
	img.src = "images/dragonsreach1.png";
	p.innerHTML = "You enter the castle of Whiterun.";
	button1.innerHTML = "Next";
	button1.addEventListener('click', dragonsreach2);
}

function dragonsreach2(){
	console.log("Scene 13c 'Dragonsreach'");
	button1.removeEventListener('click', dragonsreach2);
	img.src = "images/king.png";
	p.innerHTML = "[King Uther]“What is it that you want, stranger?” [You]“A dragon is on it's way towards Whiterun, an Elder dragon to be precise. It will destroy everything in it's way! The Greybeards have warned me and asked me to bring this message to you, my King.” [Guard] “A dragon has been spotted outside Whiterun, King!”";
	button1.addEventListener('click', dragon);
}

function dragon(){
	console.log("Scene 13d 'Dragonsreach'");
	button1.removeEventListener('click', dragon);
	img.src = "images/knight.png";
	p.innerHTML = "[Knight] Quick, come with me!"
	button1.addEventListener('click', dragon1);
}

function dragon1(){
	console.log("Scene 13e 'Dragonsreach'");
	button1.removeEventListener('click', dragon1);
	img.src = "images/dialoguescreen.png";
	p.innerHTML = "You go with the guards towards the dragon.";
	button1.addEventListener('click', dragon2);	
}

function dragon2(){
	console.log("Scene 14a 'Watchtower' ");
	button1.removeEventListener('click', dragon2);
	img.src = "images/dragonattack.png";
	p.innerHTML = "The dragon is attacking the watchtower and a few guards.";
	button1.addEventListener('click', dragon3);	
}

function dragon3(){
	console.log("Scene 14b 'Watchtower' ");
	button1.removeEventListener('click', dragon3);
	img.src = "images/dragonattack1.png";
	p.innerHTML = "You arrive at the battle.";
	button1.addEventListener('click', dragon4);
}

function dragon4(){
	console.log("Scene 14c 'Watchtower' ");
	button1.removeEventListener('click', dragon4);
	img.src = "images/dragonattack2.png";
	p.innerHTML = "What should I do?";
	button1.style.display = 'none';
	bow.addEventListener('click', dragon5);
}

function dragon5(){
	console.log("Scene 14d 'Watchtower' ");
	bow.removeEventListener('click', dragon5);
	img.src = "images/dragonattack3.png";
	p.innerHTML = "You draw your bow...";
	button1.style.display = 'block';
	//button1.innerHTML = " ";
	button1.addEventListener('click', dragon6);
}
	
function dragon6(){
	console.log("Scene 14e 'Watchtower' ");
	button1.removeEventListener('click', dragon6);
	img.src = "images/dragonattack4.png";
	p.innerHTML = "Critical hit! The arrows hit the dragon right in it's eyes. The enchanted bow made the arrows that has been shot poisonous which caused the dragon to collapse.";
	button1.innerHTML = "Next";
	button1.addEventListener('click', dragon7);
}

function dragon7(){
	console.log("Scene 14f 'Watchtower' ");
	button1.removeEventListener('click', dragon7);
	img.src = "images/dragonattack5.png";
	p.innerHTML = "The dragon is dead. You absorb it's power and claim it's head and you went back to the king.";
	button1.addEventListener('click', dragon8);	
}

function dragon8(){
	console.log("Scene 14g 'Watchtower' ");
	button1.removeEventListener('click', dragon8);
	img.src = "images/dragonattack6.png";
	p.innerHTML = "The dragon's head has been skinned and put on the Castle's wall as decoration and in memory of your heroic deeds.";
	button1.innerHTML = "Next";
	button1.addEventListener('click', end);
}

function end(){
	console.log("Scene 15 'End' ");
	button1.removeEventListener('click', end);
	img.src = "images/end.png";
	p.innerHTML = "You saved Whiterun and it's people.";
	button1.innerHTML = "Return to main menu";
	button1.addEventListener('click', refresh);
}

gameName();


