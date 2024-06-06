//Exo: recuperer paragraph E de départ via le ID dispo

const paraC=document.getElementById("depart")
console.dir(paraC); //used this to look at other possible relative elements for positioning/selection of Valeur E paragraph
console.log(paraC);


let paraE = paraC.parentElement.lastElementChild;
//can also do paraC.nextElementSibling.nextElementSibling
//or    console.log(paraC.children[paraDepartParent.childElementCount -1])
console.log(paraE);


//Another way to seek out the same thing (the fifth paragraph)
let valeurE = document.getElementsByTagName("p")[4].innerHTML;
console.log(valeurE)


///Trying to get A by starting from the div
let valeurA = document.getElementsByTagName("div")[0].children[0].innerHTML;
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