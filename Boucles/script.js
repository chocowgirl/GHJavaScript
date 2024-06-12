// const LOGIN = "johndoe@mail.com"
// const PASSWORD = "Test1234="
// const NBRESSAI = 3
// let compteur = 1

// let loginUtilisateur = prompt("Essai N°" + compteur + "Entrez votre login:")
// let passwordUtilisateur = prompt("Essai N°" + compteur + "Entrez votre mot de passe:")



// while((LOGIN !== loginUtilisateur || PASSWORD !== passwordUtilisateur) && compteur < NBRESSAI){

//     alert("Mauvais login ou mot de passe")
//     compteur ++
//     loginUtilisateur = prompt("Essai N°" + compteur + "Entrez votre login:")
//     passwordUtilisateur = prompt("Essai N°" + compteur + "Entrez votre mot de passe:")

// }

// if(compteur > 3 && (LOGIN !== loginUtilisateur || PASSWORD !== passwordUtilisateur)){
//     alert("ACCESS DENIED")
// }
// else{
//     alert("Bienvenue!")
// }


///// OTHER EXAMPLE ///////

// const MYSTERYNUM = 42
// let nbrUtlisateur = parseInt(prompt("Enter your number : "))

// while(nbrUtlisateur != MYSTERYNUM){
//     if(MYSTERYNUM > nbrUtlisateur){
//         alert("Nope, go higher!");
//     }
//     else{
//         alert("Nope, go smaller!");
//     }

//     nbrUtlisateur = parseInt(prompt("Enter your number : "))
// }

// alert("bravo you found it!")



//// EXO /////////

// const NUM = 7
// let guess

// while(guess !== NUM){
//     guess=parseInt(prompt("Pick a number between 1 and 10"))
// }

// alert("You found it!")



/////// EXO ALT ////////
// let guess = parseInt(prompt("Pick a number between 1 and 10"))

// while(guess < 1 || guess > 10 || isNaN(guess)){
//     guess=parseInt(prompt("Pick a number between 1 and 10"))
// }

// alert(guess + ".  Super, thanks!")

///// *****EXO ALT W DO WHILE ////////
let guess

do{
    guess = parseInt(prompt("Pick a number between 1 and 10"))
}while(guess < 1 || guess > 10 || isNaN(guess))

alert(guess + ".  Super thanks!")