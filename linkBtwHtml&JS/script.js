/////!!! SANS dire defer in the script tag in the head, this will read before some of the things we'd like to act on which will result in null values


//ceci va afficher un pop up avec le message en parametre
alert("Bienvenue sur mon site");

//affectation
let nombre = 26;

//verification valeur
console.log(nombre == "26"); //will give true in console
console.log(nombre == 26);  //will give true in console
console.log(nombre === "26"); //will give false in console bc is not equal in value AND TYPE



//concatenation entre str et number
console.log("26" + 26); //pas de convertion implicite (resultat : 2626)

////////////////////VARIABLES////////////
console.log("variables : ");

const PI = 3.14;
console.log(PI);
//Il est impossible de modifier le valeur d'une constante (const)

let ageUtilisateur = 33;
console.log(ageUtilisateur);
ageUtilisateur = ageUtilisateur + 1;
console.log(ageUtilisateur);

ageUtilisateur = "Bonjour";
console.log(ageUtilisateur);//This shows us that a let can be modified.

////////////////////PROMPTS/////////////
//allows us to recuperer un valeur and assign values to a variable via the input
console.log("Prompt :");
ageUtilisateur = prompt("veuillez entrer votre age: ");
console.log(ageUtilisateur); //becomes what the user has put in at the prompt associated to the variable
console.log(typeof(ageUtilisateur));
ageUtilisateur = +ageUtilisateur//converstion explicite of string to number
console.log(typeof(ageUtilisateur));//this should show up as a number now and not a string
console.log(ageUtilisateur + 1);//this will do addition and not concatenation as a result

///////////DOM & GET ELEMENT//////////
//We can obtain elements by class or by id, or by tag, name, etc

const paraLorem = document.getElementById("lorem");
console.log(paraLorem); //show the text inside the p tag along with the p tags
console.dir(paraLorem); //gives access to all of the attributes of the named item

//////////// DOM & GET AND MODIFY ELEMENT/////////////

paraLorem.id = "LoremUpdate" // here we've modified the name of the id in the HTML
// This kind of thing can be used to drastically change behaviour or display after an event.

paraLorem.innerHTML="<strong>Hello</strong>";


paraLorem.className ="para red strong"; //Here we have reassigned part of the class names

paraLorem.classList.add("textColor") // adds TextColor to the names of class for paraLorem
paraLorem.classList.remove("strong") // removes strong from the names of class for paraLorem
paraLorem.classList.replace("red", "blue") // replaces red with blue in the names of class for paraLorem
paraLorem.classList.toggle("fromJS") // can add fromJS or remove fromJS from the names of class for ParaLorem

const maDiv = document.querySelector('div')
console.log(maDiv.firstChild) //gives us #text in the console b/c it found the indentation
//if there was no indentation, firstChild and firstElement child would give the same result with each of these.
console.log(maDiv.firstElementChild) //gives us p in the console


//// concerning .value and .valueAsNumber
const inputNumber=document.getElementById("inputNumber")
console.dir(inputNumber)//gives the directory of tons of info about the element
console.dir(inputNumber.valueAsNumber)//gives the specific number (in type number) value of the element
const inputText=document.getElementById("inputText")
console.dir(inputText)//gives directory of the element with tons of info about the element
console.dir(inputText.value)//gives the specific text (in type string) value of the element
//note that .valueAsNumber won't work on anything that is text.  It doesn't convert.