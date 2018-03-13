var R = document.querySelector("#R");
var G = document.querySelector("#G");
var B = document.querySelector("#B");
var lis = document.querySelectorAll("td");
var res = document.querySelector("#resetcolor");
var ease = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var ans;
var check = document.querySelector("#hello");
var di = document.querySelector("#top");
var pass=true;
var resul = document.querySelector("#result");

//Funtion to convert rbg value into string
function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}

//Function to rest game is hard mode
function reset1(){
  pass = true;
  result.style.color = rgb(255,51,153);
  result.textContent = "Begin!";
  di.style.backgroundColor = rgb(16,78,139);
  hard.style.backgroundColor=rgb(16,78,139);
  ease.style.backgroundColor="white";
  var choice = Math.floor(Math.random()*6);
  for(var i = 0; i<lis.length; i++){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    if(i===choice){
      R.textContent = r;
      G.textContent = g;
      B.textContent = b;
      ans = rgb(r,g,b);
    }
    lis[i].style.backgroundColor = rgb(r,g,b);
  }
}

//Function to reset game is easy mode
function reset2(){
  pass=false;
  result.textContent = "Begin!";
  result.style.color = rgb(255,51,153);
  hard.style.backgroundColor="white";
  di.style.backgroundColor = rgb(16,78,139);
  ease.style.backgroundColor=rgb(16,78,139);
  var choice = Math.floor(Math.random()*3);
  for(var i = 0; i<3; i++){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    if(i===choice){
      R.textContent = r;
      G.textContent = g;
      B.textContent = b;
      ans = rgb(r,g,b);
    }
    lis[i].style.backgroundColor = rgb(r,g,b);
  }
  lis[3].style.backgroundColor = "black";
  lis[4].style.backgroundColor = "black";
  lis[5].style.backgroundColor = "black";
}

//Function to generate hex code from rgb values
function rgbToHex(color) {
  var bg = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
}

//Event listener to start new game based on mode of the game
res.addEventListener("click",function(){
  if(pass === true){
    reset1();
  }else{
    reset2();
  }
});

//Loop to contain the color selection and give result
for(var i = 0; i < 6; i++){
  lis[i].addEventListener("click",function(){
    if(rgbToHex(String(this.style.backgroundColor)) == rgbToHex(String(ans))){
      if(pass == true){
        for(var j = 0;j<6;j++){
          lis[j].style.backgroundColor = ans;
        }
      }else{
        for(var j = 0;j<3;j++){
          lis[j].style.backgroundColor = ans;
        }
      }
      di.style.backgroundColor = ans;
      result.textContent = "Congratulations You Guessed It Right!"
      result.style.color = ans;
    }else{
        this.style.backgroundColor = "black";
        result.textContent = "Wrong Choice, Try Again!"
        result.style.Color = String(this.style.backgroundColor);
    }
  });
}

//Start the game in hard mode
reset1();

//Switch to easy mode
ease.addEventListener("click",reset2);

//Switch to hard mode
hard.addEventListener("click",reset1);
