// Write your code here!
//const element = document.createElement("div");
// const element = document.getElementById("main");
// element.style.height = "300px";
// element.style.backgroundColor = "#27647B";
// element.style.fontSize = "24px";
// element.style.marginLeft = "30px";
// element.style.lineHeight = 2;
// element.textContent = "You've changed what's on the screen!";
// element.className = "pet-listing dog";
// element.classList.remove("dog");
// element.classList.add("cat", "sale");

// .createElement creates element
// DOM = document object model
// DOM is part of the browser
// DOM can only be used in web environment
// JS can interact with DOM

// const div = document.createElement("div");


// document.body.append(element);
// document.body.append(div);


// .append makes created element appear

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {

//     //creates 3 list items
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     li.textContent = "Hi there!";
//     console.log(li.textContent);
//     ul.append(li);

    // ul.append makes ul appear
//}

//document.body.append(ul);
// body is the bottle, ul is the contents inside


// ul is the bottle, the li is the contents inside

//element.append(ul);
// element is the bottle, ul is what's inside

//const main = document.getElementById("main");

//not recommended to mess with innerHTML
// too dirty 
//main.innerHTML =
//    "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>"

//document.body.remove("main");
// got rid of whole body tag because .remove removes the element body

const main = document.querySelector("main");
console.log(main);
main.remove();


const newHeader = document.createElement("h1");
// creates h1 header

newHeader.setAttribute('id','victory');

const yourName = "Donald";
newHeader.textContent = `${yourName} is the champion`;

document.body.append(newHeader);

const bearMaker = document.createElement("h2");

bearMaker.setAttribute('id', 'bearName');
bearMaker.textContent = "Larry";

document.body.append(bearMaker);