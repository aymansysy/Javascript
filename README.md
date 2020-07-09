# Javascript
les8_Tasks

0- I have an img and it's in the attachments, try to destructure the entrie file by exposing all the attributes one by one 
-- try to express the output by saying some clear sentences which make sense like "Hello guys, I'm [username]" etc....
^^ you can see the file in the attachments of this task ^^
// *********************************************************************************************************************************************************
 1- I want to to expose my books inside my webpage
-- const favBooks = [
  {
    title: 'Head First Java, 2nd Edition',
    author: 'Kathy Sierra',
    hasRead: true,
	price: 44
  },
  {
    title: 'Head First Design Patterns: A Brain-Friendly Guide',
    author: 'Bert Bates',
    hasRead: false,
	price: 22.40
  },
  {
    title: 'Head First Object-Oriented Analysis and Design',
    author: 'Gary Pollice',
    hasRead: false,
	price: 40.70
  },
  {
    title: 'Introduction to Java Programming and Data Structures',
    author: 'Liang Y.',
    hasRead: false,
	price: 60.29
  }
];
-- Iterate through the array of favBooks.
-- For each book, create a <p> element with the book title, author and append it to the page, add also a span which contains the price
-- You can use a ul and li to display all the favBooks
-- Add an <img> to each book that links to a URL of the book cover. [you can get the links from google]
-- Change the style of the book based on whether you have read it (green) or not (crimson).
// *******************************************************************************************************************************************
   2- We have a simple HTMl page and it contains all these elements
-- <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My Storry</title>
  </head>
  <body>
    <h1>My Story</h1>

    <ul>
      <li>Nickname: <b id="nickname"></b></li>
      <li>Favorite player: <b id="fav-player"></b></li>
      <li>Nationality: <b id="nationality"></b></li>
    </ul>
  </body>
</html>
-- Add a script tag to the bottom of the HTML body.
-- (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
-- (In the JavaScript) Replace each of the spans (nickname, fav-player, nationality) with your own story information.
-- ierate through each li and change the class to "list-item".
-- Add a link tag to link your style file [style.css] that sets a rule for .list-item to make the color crimson.
-- Create a new img element and set its src attribute to a picture of you and append it to the body
-- create a bold tag to tell the reader that these data describe your story information by saying [some message.....]
// *******************************************************************************************************************************************
     3- we need here to replace the image/logo from this site ['https://www.bing.com/'] so
-- try to access the img/logo from the inspector of your google chrome and try to replace the current img/logo with something else
-- try to modify the style of the current search box but don't forget to access the search box and check if you can access it's properties and store them into any variable
// *******************************************************************************************************************************************
     4- Create a basic HTML file with any elements you deterine if you can get any benfits from them and include the script tag to your file[app.js]
-- try to fetch the current time in this format [hh:mm:ss] => [hour: min: sec]. hint: you need to use google to check what the correct function is 
-- use this function [setInterval()] to make sure the time stays current .. hint: you need to use google or you can ask me once you give up..
-- check how to run the function when you load the page..
// *******************************************************************************************************************************************
    5- create any html page[index.html] and add this tag to your file in static way [in your html without js, normal adding] 
 -- this is the tag <img style="position:absolute;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png" /> 
 -- create a variable to store the img reference 
 -- Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens. [it's already absolute]
 -- Create a function called moveJS() that moves the img 20 pixels to the right of where it started, by changing the "left" style property.
// *******************************************************************************************************************************************
     6- I have this varaible, str = '1111111111111111';
-- convert the content of str to an array 
-- use reduce to calcualte all the numbers
-- print the result in a clear sentence
// *******************************************************************************************************************************************
const data = [
  { name: "Rleated Party", status: "Inactive" }, // Inctive
  { name: "Customer", status: "Former Prospect" }, // Inactive
  { name: "Other Party", status: "Client" }, // Active
];																
																--Good Luck--
