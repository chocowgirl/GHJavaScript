//Exo: recuperer paragraph E de départ via le ID dispo
const depart = document.getElementById("depart");

// METHOD 1
console.dir(depart); //used this to look at other possible relative elements for positioning/selection of Valeur E paragraph
console.log(depart); //to show the difference btw a console log and a console directory

const valeurE = depart.nextElementSibling.nextElementSibling;
console.log("method 1 ELEMENT obtention:");
console.log(valeurE);//Here we see what we obtain when we get the ELEMENT
console.log("method 1  element.InnerHTML obtention:");
console.log(valeurE.innerHTML); // Here we can see the inner HTML (bold and text) of the element, but no longer the ELEMENT ITSELF
console.log("method 1 element.innerText obtention with escaped concatention in the code:");
console.log(`1st method ${valeurE.innerText}`); //Here we've really just gone after whats IN the element, and not really the ELEMENT anymore.


// METHOD 2
const div = depart.parentElement;
// console.log(div);
const foundIt = div.lastElementChild
console.log("method 2:");
console.log(foundIt);

// OR THE SHORT FORM OF THE ABOVE:
let paraE = depart.parentElement.lastElementChild;
console.log("method 2 abbreviated:");
console.log(paraE);


// METHOD 3 
const eureka = depart.parentElement.children[4];
console.log("method 3:");
console.log(eureka);


// METHOD 4
const yahoo = document.getElementsByTagName("div")[0].children[4]; // Here we no longer start by getting the Value C (const depart) paragraph, but rather we go directly for it's parent div.
console.log("method 4:");
console.log(yahoo);


// METHOD 5 - QUERY SELECTOR ALL
const paradepart = document.querySelectorAll("p");
console.log("method 5 - results of a console dir for query selector all 'p' below:");
console.dir(paradepart) //shows us the node list given from a query selector all
console.log("method 5: display of clg(paradepart[4] from the node list obtained:");
console.log(paradepart[4]);

// METHOD 6
//Another way to seek out the same thing (the fifth paragraph) starting with getElementsByTagName
let target = document.getElementsByTagName("p")[4];
console.log("method 6: getting the targeted element by starting with getElementsByTagName('p')[4]");
console.log(target)


// METHOD 7
console.log("method 7: using [depart.parentElement.children.length-1] as the index for paraE, and starting with paraC as the element of departure: ");
const it = depart.parentElement.children[depart.parentElement.children.length-1];
console.log(it);


// ACCESSORY STUFF 1
///Trying to get A by starting from the div
let valeurA = document.getElementsByTagName("div")[0].children[0].innerHTML;
console.log('accessory stuff 1 - getting A');
console.log(valeurA);
//when we getElementsByTagName, we get a collection, so even if there's only one of the tag, we have to indicate which one it is with the index

//or could have put document.getElementsByTagName("div");
//console.dir(div.item(0).firstElementChild);

const paragraphes = document.getElementsByTagName("p")
//The above will give us a list of paragraphs as html elements (better for "for each" statements later)
const paragraphesQuery = document.querySelector("p")
//the above will give us the first in the list of paragraphs
const paragraphesQuery2 = document.querySelectorAll("p")
//the above will give us a list of paragraphs as a node list (will need to convert to html element for "for each")
//pour voir une exemple de ^^ceci, voir l'exo GetEven dans le meme folder