

//create any html page[index.html] and add this tag to your file in static way [in your html without js, normal adding] 
// this is the tag <img style="position:absolute;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png" /> 
//create a variable to store the img reference 
//Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens. [it's already absolute]
//Create a function called moveJS() that moves the img 20 pixels to the right of where it started, by changing the "left" style property.

document.getElementById('image').style.left="0px";
function moveJS() //Moves image to the right

{
document.getElementById("image").style.left = "1000px";
}

function moveBack() //Moves image back to the left

{
document.getElementById("image").style.position = "absolute";
document.getElementById("image").style.left = "0px";

}

