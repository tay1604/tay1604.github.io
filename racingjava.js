/* author: Taylor Mauldin
*/
banners = document.getElementById("banners")
banner = document.getElemenyById"banner");
racetrack = document.getElementById("racetrack");
resError = document.getElementById("resError");
gary = document.getElementById("gary");
gary1 = document.getElemenById("gary1");
contField = document.getElementById("control");
contImage = document.getElementById("controls");

/*
Variables defined that need to carry values between functions
*/
var windWidth;
var aniTimer;

/* 
Gets width of the browser window
*/
if(self.innerWidth){
  windWidth = self.innerWidth;
}
if(document.documentElement && document.documentElement.clientWidth){
  windWidth = document.documentElement.clientWidth;
}
if(document.body){
  windWidth = document.body.clientWidth;
}
banners.width = windWidth;
racetrack.width = windWidth;
contField.width = windWidth;

/* 
If the browser window is less than 800px in width then display an error message
*/
if(windWidth < 800){
  racetrack.style.display = "none";
  contField.style.display = "none";
  resError.style.display = "block";
  resError.width = windWidth;
}

/*
This function sets the graphics for racing start and begins the racing
*/
function startRace(){
var xwidth = parseInt(windWidth);
gary.style.left = 0px;
gary1.style.left = 0px;
racetrack.style.backgroundColor = #000000;
raceCont();
}

/*
The following code is the actual race control function
*/
function raceCont(){
var x1 = parseInt(gary.style.left);
var x2 = parseInt(gary1.style.left);
var xwidth = parseInt(windWidth);
var xfinal;

/*
To set the minimum and maximum number of pixels the racers move, edit the two following formulas for (maximum - minimum) + minimum
*/
var randNum1 = Math.Floor(Math.random() * (13 - 1 ) + 1);
var randNum2 = Math.Floor(Math.random() * (13 - 1 ) + 1);

/*
Create new coordinates for the characters by adding the random number generated for each character to the character's
current x coordinates
*/
x1 = x1 + randNum1;
x2 = x2 + randNum2;

/*
Following code executes when one ship or the other reaches the right edge of the page, stops the race
by clearing the variable aniTimer and changes the banner image to the appopriate image for the winner
*/
if(x1 >= xfinal || x2 >= xfinal){
  clearTimeout(aniTimer);
  if(x1 >= xfinal){
    banner.src = "RacingBanners_Gary.png";
   }
  if(x2 >= xfinal){
    banner.src = "RacingBanners_AngrySnail.png";
   }
  if(x1 >= xfinal && x2 >= xfinal){
    banner.src = "RacingBanners_Tied.png";
   }
 racetrack.style.backgroundColor = "transparent";
}

/*
The following if statement and the if statements nested within it are used to control the movement of the characters across the page
*/
if(x1 < xfinal && x2 < xfinal){
  if(x1 != xfinal && x1 < xfinal){
    gary.style.left = x1 + "px";
   }
  else if(x1 > xfinal){
    gary.style.left = xfinal + "px";
   }
  
  if(x2 != xfinal && x2 < xfinal){
    gary1.style.left = x2 + "px";
   }
   else if(x2 > xfinal){
    gary1.style.left = xfinal + "px";
   }
   aniTimer = setTimeout(raceCont, 25);
}
  
