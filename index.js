isStand=false;
turnsOver=false;

 // score values
var win=0;
var loss=0;
var draw=0;

// userdata
var cards=[2,3,4,5,6,7,8,9,10,'A','J','K','Q']
var userScore=0;
// var userSelectedCards="";
var userScoreData="";
var userSelectedCards=``;
// computer data
var dcards=[2,3,4,5,6,7,8,9,10,'A','J','K','Q']
var dealScore=0;
// var dealSelectedCards="";
var dealScoreData="";
var dealSelectedCards=``;

const hitsound=new Audio("sounds/swish.m4a");
// userFunction
function hit(){
	if(isStand==false){
		turnsOver=true;
	var i=Math.floor(Math.random()*cards.length)
	console.log(cards[i])
	var image= cards[i]+".png";
	if(cards[i]>=2  && cards[i]<=10 && userScore!="BURST"){
		userScore+=cards[i];
	}
	else if(cards[i]=="A"  && userScore!="BURST"){
		userScore+=11;
	}
	else if(userScore!="BURST"){
		userScore+=10;
	}
	if(userScore>21){
		userScore="BURST"
	}

	else{
		 userSelectedCards +=`
		<img src="images/${image}" >
	`
	hitsound.play();
	}


 		document.querySelector('.userCards').innerHTML=userSelectedCards;
 		userScoreData=`
 		${userScore}
 		`
 		document.querySelector('.userScore').innerHTML=userScoreData;


	cards.splice(i,1)
	
}
}


// clear Everything
function deal(){
	if(turnsOver==true && isStand==true){
	turnsOver=false;
	isStand=false;
	// resetiing values
	cards=[2,3,4,5,6,7,8,9,10,'A','J','K','Q']
	dcards=[2,3,4,5,6,7,8,9,10,'A','J','K','Q']

	// resetting user Area******************************************************
	userScore=0;
	userScoreData=`
 		${userScore}	`
 	document.querySelector('.userScore').innerHTML=userScoreData;
 	// removing user cards
 	 userSelectedCards=``;
 	document.querySelector('.userCards').innerHTML=userSelectedCards;
 	// **************************************************************************

	// resetting comp Area******************************************************
 	dealScore=0;
 	dealScoreData=`
 		${dealScore}
 		`
 	document.querySelector('.dealScore').innerHTML=dealScoreData;
 	// removing computer cards

	 dealSelectedCards=``;
 		document.querySelector('.dealCards').innerHTML=dealSelectedCards;
 	// **************************************************************************

 	//Resetting  Status
 	var status="Let's Play";
 	document.querySelector('.status').innerHTML=status;
}
}


function stand(){
	if(turnsOver==true && isStand==false){
		// isStand=true;
	
	var i=Math.floor(Math.random()*dcards.length)
	
	var image= dcards[i]+".png";
	if(dcards[i]>=2  && dcards[i]<=10 && dealScore!="BURST"){
		dealScore+=dcards[i];
	}
	else if(cards[i]=="A" && dealScore!="BURST"){
		userScore+=11
;	}
	else if(dealScore!="BURST"){
		dealScore+=10;
	}


	if(dealScore>20){
		dealScore="BURST"
	}

	else{
		 dealSelectedCards +=`
		<img src="images/${image}" >
	`
	hitsound.play();
		
	}
 		document.querySelector('.dealCards').innerHTML=dealSelectedCards;
 		dealScoreData=`
 		${dealScore}
 		`
 		document.querySelector('.dealScore').innerHTML=dealScoreData;


	dcards.splice(i,1)


	if(userScore>dealScore && dealScore<21 ){
		stand();
	}
	else{
		isStand=true;
		if(userScore==dealScore){
		draw+=1;
		var status="DRAW!!";
 	document.querySelector('.status').innerHTML=status;
 	var drawScore=`${draw}`
 	document.querySelector('.draw').innerHTML=drawScore;
 		var x = document.getElementById("lossSound");
	x.play();

	}

	else if(userScore =="BURST"){
	loss+=1;
	var status="You Loose!!";
 	document.querySelector('.status').innerHTML=status
	var lossScore=`${loss}`
 	document.querySelector('.loss').innerHTML=lossScore;
 	var x = document.getElementById("lossSound");
	x.play();
	}
	else if(dealScore>userScore){
	loss+=1;
		
		var status="You Loose!!";
 	document.querySelector('.status').innerHTML=status;
	var lossScore=`${loss}`
 	document.querySelector('.loss').innerHTML=lossScore;
 	var x = document.getElementById("lossSound");
	x.play();
	}
	else{
		win+=1;
	
		var status="You Won!!";
 	document.querySelector('.status').innerHTML=status;
 	var winScore=`${win}`
 	document.querySelector('.win').innerHTML=winScore;
	var x = document.getElementById("winSound");
	x.play();

	}	}

}

}