

// randomDice1 = Math.floor(Math.random()*6+1);
// randomDice2 = Math.floor(Math.random()*6+1);


// let img1 , img2;
// if(randomDice1 === randomDice2){
//     const imagesContainer = document.getElementsByClassName("images")[0];

//     img1 = document.createElement("img");
//     img1.src = "images/dice" + randomDice1 + ".png";
//     img1.style.width = "200px";
//     img1.style.height = "200px";
//     img1.style.display = "block";

//     img2 = document.createElement("img");
//     img2.src = "images/dice" + randomDice1 + ".png";
//     img2.style.width = "200px";
//     img2.style.height = "200px";
//     img2.style.display = "block";

//     imagesContainer.appendChild(img1);
//     imagesContainer.appendChild(img2);
// }

// else{
//     img1 = document.getElementById("img"+randomDice1)
//     img1.style.display = "block";

//     img2 = document.getElementById("img"+randomDice2)
//     img2.style.display = "block";
// }

// const flex = document.getElementById("flexContainer");

// flex.appendChild(img1);
// flex.appendChild(img2);



const flex = document.getElementById("flexContainer");
count1=0,count2=0;
   
document.getElementById("rollButton").addEventListener("click", function() {
  while (flex.firstChild) {
        flex.removeChild(flex.firstChild);
    }

randomDice1 = Math.floor(Math.random()*6+1);
randomDice2 = Math.floor(Math.random()*6+1);

img1 = document.createElement("img");
img1.src = "dice" + randomDice1 + ".png";

img2 = document.createElement("img");
img2.src = "dice" + randomDice2 + ".png";

if(randomDice1>randomDice2)
{
    
    img1.style.width = "200px";
    img1.style.height = "200px";
   
    img2.style.width = "100px";
    img2.style.height = "100px";
}
else if(randomDice1<randomDice2)
{
    img1.style.width = "100px";
    img1.style.height = "100px";
   
    img2.style.width = "200px";
    img2.style.height = "200px";
}
else{
    img1.style.width = "200px";
    img1.style.height = "200px";
   
    img2.style.width = "200px";
    img2.style.height = "200px";
}
   
    




    flex.appendChild(img1);
    flex.appendChild(img2);

    if(randomDice1>randomDice2){
        count1++;
    }
    else if(randomDice1<randomDice2){
        count2++;
    }

 
result1 = document.getElementsByClassName("dice")[0];
result1.innerHTML=count1;
result1.style.color = "#4ECCA3";
result1.style.fontSize = "10rem";

result2 = document.getElementsByClassName("dice")[1];
result2.innerHTML=count2;
result2.style.color = "#4ECCA3";
result2.style.fontSize = "10rem";

win = document.getElementById("win");
win.style.color="#4ECCA3";

   if(count1===3)
    {
        document.getElementsByTagName('button')[0].style.display="none"; 
        win.innerHTML="Player 1 Win!";
    }
    else if(count2===3)
    {
        document.getElementsByTagName('button')[0].style.display="none";  
        win.innerHTML="Player 2 Win!";
    }
});