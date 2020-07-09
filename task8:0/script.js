//0- I have an img and it's in the attachments, try to destructure the entrie file by exposing all the attributes one by one 
//-- try to express the output by saying some clear sentences which make sense like "Hello guys, I'm [username]" etc....
//^^ you can see the file in the attachments of this task ^^
//////const obj = '{ "id": 1, "name": "Leanne Graham","username": "Bret", "email": "Sincere@apr.biz", "address": {"street": {"street_one": "Kulas Light","street_two": "Kampala"},"suite": "Apt. 556","city": "Gwenborough","zipcode": "92998-3847","geo": {"lat": "-37.3159","lng": "81.1496"}},"phone": "1-770-736-8031 x56442","website": "hildegard","compamy": {"name": "Romaguera-Crone","catchPhrase": "Multi-layered client-server natural-net","bs": "harness real-time e-markets"}}';
///const data = JSON.parse(obj);
///console.log("Hello guys, my id is: " + data.id + ", I'm "+ data.name + ", my username is: "+ data.username + ", my email is: "+ data.email+ " etc...");
///-------------------------------------------------------------------------------------------------------------------------------------------------------------
//1- I want to to expose my books inside my webpage
const favBooks = [
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
// Iterate through the array of favBooks.
//For each book, create a <p> element with the book title, author and append it to the page, add also a span which contains the price
// You can use a ul and li to display all the favBooks
//Add an <img> to each book that links to a URL of the book cover. [you can get the links from google]
//Change the style of the book based on whether you have read it (green) or not (crimson).
const ulParent = document.createElement("ul");
for (let book of favBooks){
    const bookLi = document.createElement("li");
    const bookPara = document.createElement("p");
    bookPara.innerText = book.title +" "+ book.author;
    const bookSpan = document.createElement("span");
    bookSpan.innerHTML = book.price;
    const bookLink = document.createElement("a");
    const bookImg =document.createElement("img");
    const bookSpace =document.createElement("br");

    
    
    if (book.hasRead===true){
        bookLi.style.color = "green"
    }
    else{bookLi.style.color = "crimson"};
    if(book.title==="Head First Java, 2nd Edition"){
        bookLink.href = "https://archive.org/details/HeadFirstJava2ndEdition_201511";
        bookImg.src = "http://img6a.flixcart.com/image/book/0/2/5/head-first-java-original-imadarvqgbqhupbc.jpeg";
    }
    else if(book.title==="Head First Design Patterns: A Brain-Friendly Guide"){
        bookLink.href = "https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly-ebook/dp/B00AA36RZY";
        bookImg.src = "https://th.bing.com/th/id/OIP.nlk5x_D40hx3_mDaudkjoAAAAA?w=139&h=180&c=7&o=5&pid=1.7";

    }
    else if(book.title==="Head First Object-Oriented Analysis and Design"){
        bookLink.href = "https://www.oreilly.com/library/view/head-first-object-oriented/0596008678/";
        bookImg.src = "https://images-na.ssl-images-amazon.com/images/I/51mE7FBCw8L._SX218_BO1,204,203,200_QL40_.jpg";

    }
    else if (book.title==="Introduction to Java Programming and Data Structures"){
        bookLink.href = "https://www.academia.edu/40432205/Introduction_to_Java_Programming_and_Data_Structures_Comprehensive_Version_11th_Edition_by_Y._Daniel_Liang";
        bookImg.src = "https://th.bing.com/th/id/OIP.Fuxn30AKQVr8aCyiqIxj7AHaJU?w=193&h=243&c=7&o=5&pid=1.7";

    }
    bookImg.style.width= "220px";
    bookLink.appendChild(bookImg);
    bookLi.appendChild(bookPara);
    bookLi.appendChild (bookSpan);
    bookLi.appendChild (bookSpace);
    

    bookLi.appendChild(bookLink);
    ulParent.appendChild(bookLi);
document.body.appendChild(ulParent);

    
}
