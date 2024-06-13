// // has to be used in another function (like add event listener as the "callback"(the thing that happens when the event happens))

function(para1, para2){
    return para1+para2
}
//it's normal for an anonymous function declared by itself to show this little red squiggle (above), as it can never be used by itself like this...


//it's possible to place functions inside variables
let x = function(para1, para2){
    return para1+para2
}
console.log(x(5,10)); //should show 15 in clg


// //ALSO possible to place functions in tables and then call them by their index or by using a forEach


//FONCTIONS FLECHEES are anonymous functions, but it's a shortcut way of saying this.

let y =(para1, para2, para3) => console.log("Bonjour je suis" + para1 + para2 + "et j'ai " + para3 + "ans");

y("John", "Doe", 30)


let addition =(nombre1, nombre2)=> nombre1 + nombre2

let resultat = addition(4,3)
console.log(resultat)


// if there are many instructions in a FF, open the accolades, and if not you can just put the instructions after the arrow
let superY =(para1, para2, para3) => {
    console.log("Bonjour je suis " + para1 +" " + para2 + " et j'ai "+ para3 + " ans");
    return para3 + 5
    }

let ageEn5ans = superY("John", "Doe", 30)
console.log(ageEn5ans);