document.querySelector("button").addEventListener("click",function(){
var name2=(Math.floor(Math.random()*6)+1);
var image="dice" + name2 + ".jpg";
var storeImage=document.querySelectorAll("img")[0];
storeImage.setAttribute("src",image);
var name1=(Math.floor(Math.random()*6)+1);
var image="dice" + name1 + ".jpg";
var storeImage1=document.querySelectorAll("img")[1];
storeImage1.setAttribute("src",image);
if(name2 > name1)
{
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(name1 > name2)
{
    document.querySelector("h1").innerHTML="player2 wins";
}
else{
    document.querySelector("h1").innerHTML="match draws";
}});