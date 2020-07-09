//-- Add a script tag to the bottom of the HTML body.
//-- (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
const changFont=document.querySelector("body");
changFont.style.fontFamily="Arial, sans-serif";
//-- (In the JavaScript) Replace each of the spans (nickname, fav-player, nationality) with your own story information.
const t1 = document.createTextNode("ayman");
const t2 = document.createTextNode("Nemar");
const t3 = document.createTextNode("syrian");

const nickName= document.getElementById("nickname");
const fp= document.getElementById("fav-player");
const natio= document.getElementById("nationality");

nickName.appendChild(t1);
fp.appendChild(t2);
natio.appendChild(t3);
//-- ierate through each li and change the class to "list-item".
//-- Add a link tag to link your style file [style.css] that sets a rule for .list-item to make the color crimson.
//-- Create a new img element and set its src attribute to a picture of you and append it to the body
const myPic = document.createElement("img");
myPic.src="https://th.bing.com/th/id/OIP.2dAoMqe3M0AINF6wbFAW0wHaDt?pid=Api&rs=1";
document.body.appendChild(myPic);
myPic.style.width="250px"
//-- create a bold tag to tell the reader that these data describe your story information by saying [some message.....]
const boldObj = document.createElement("B");
const somText = document.createTextNode("info about me");
boldObj.appendChild(somText);
document.body.prepend(boldObj);


