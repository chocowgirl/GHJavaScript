// creation d'un element HTML: createElement("tagname")
const p = document.createElement("p");

// inserer le p dans l'HTML: parent.append(childNode);
const wrapper=document.getElementById("wrapper");
wrapper.append(p);

//parametrer l'element créé
p.innerText="Hello, this is my paragraph text";
p.id = "customParagraph";
p.setAttribute("class", "myClass")
p.classList.add('myClass')
p.classList.add("myCustomClass", "myOtherCustomClass");

//parametrer le comportement de l'element
// mouseenter activates one time when in mouse-zone, whereas mouseover is continuous activation
p.addEventListener('mouseenter', (event) => {
    console.log("event:", event);
    console.log("cible de l'evenement:", event.target);
    // const target = event.target;
    // target.classList.add("highlight");
    toggleHighlight(event.target)
    event.target.style.fontWeight="bold";
    event.target.style.fontSize = "1.2em";
} );


p.addEventListener("mouseleave", (event) => {
    // const target = event.target;
    // target.classList.remove("highlight");
    toggleHighlight(event.target)
    // console.dir(target);
    event.target.style.fontWeight="normal";
    event.target.style.fontSize = "";
})

//The below was created to optimize the event listeners above 
function toggleHighlight (target){
    target.classList.toggle("highlight");


}

//JS modifications of style manifest as inline CSS in the html

//supprimer un element
// - element.remove() -> removes the element
// - parent.removeChild(element) -> erases the element in the parent

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const container = document.getElementById("container");

p1.remove(); // there is no return associated
container.removeChild(p2);

//(propriete) parentNode (permet de recuperer le noeud parent)
const addButtons =document.querySelectorAll(".addBtn");
console.log("add buttons:", addButtons);


for (const button of addButtons) {
    // console.log("element:", element);
    button.addEventListener("click", (event) => {
        // console.log("event target", event.target);
        // console.log("button", button);

//event = event triggered
//target = target of the event triggered
//parentNode = parent of the target of the event triggered
        console.log("event.target.parentNode:", event.target.parentNode);
        console.log("event.target.parentNode.parentNode:", event.target.parentNode.parentNode);
//recuperation de la ligne <tr> du produit 
        const productRow = event.target.parentNode.parentNode;
//extraction des enfants de la ligne du produit
        console.log("productRow.chilren:", productRow.children)
        console.log("productRow.children[0] :", productRow.children[0]);
        console.log("productRow.children[1] :", productRow.children[1]);
        // productRow.remove();  -->was placed to show we could remove the row
        const productName = productRow.children[0].innerText;
        const productPrice = productRow.children[1].innerText;
        console.log("productName", productName);
        console.log("productPrice", productPrice);
    })


}