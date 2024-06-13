const TAB = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < TAB.length; i++) {
//     console.log("test" + (i+1))
//     if(TAB[i] === 5){
//         continue
//     }
//     console.log(TAB[i]);
// }
/// continue is a little like ignore this one (the thing in the condition) and then continue on your way


//// Exo: afficher uniquement les nombres paires /////

for (let i = 0; i < TAB.length; i++) {
    if(TAB[i]%2 !== 0){
        continue
    }
    console.log(TAB[i]);
    
}

console.log("Ici on demarre l'exo BREAK");


for (let i = 0; i < TAB.length; i++) {
    if(TAB[i] === 3){
        break
    };
    console.log(TAB[i]);
}
console.log("fin de la boucle");


///// Demo of how break works to leave an infinite loop /////

// while(true){
//     let mot = prompt("taper 'quitter' pour sortir de la boucle")
//     if(mot === "quitter"){
//         break
//     }

//     alert(mot.toUpperCase())
// }


////// using break in variation of mystery number game with infinte loop /////

// let nombre = 12
//if we want to integrate a random generator...
let nombre = Math.floor(Math.random() * 100)
console.log("mystery number is " + nombre)

while(true){
    let guess = parseInt(prompt("guess a number between 1 and 100..."))

    if(nombre>guess){
        alert("try going lower")
    }
    else if(nombre<guess){
        alert("try going higher")
    }
    else{
        break
    }
}
alert("bravo!  C'était bien "+ nombre)

/// !!!!NOTE THE ABOVE CODE NEEDS TO BE FIXED !!!! ////