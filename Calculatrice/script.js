// ////DEMO SIMPLE OPERATEURS DE COMPARAISON:
// const login = "johndoe@mail.com"
// const password = "Test1234"

// let loginUtilisateur = prompt("votre login? : ")
// let passwordUtilisateur = prompt("votre password? : ")

// if(login === loginUtilisateur && password === passwordUtilisateur){
//     alert("Bienvenue sur le site!")
// }
// else {
//     alert("le login ou le mot de passe est invalide")
// }


// ////DEMO QQCHOSE UN PEU PLUS COMPLIQUEE:
// let age = parseInt(prompt("Veuillez entrer votre age : "));
// console.log(age);

// if(!isNaN(age)){
//     if(age > 0 && age <= 25){
//         console.log("vous etes un étudiant");
//     }
//     else if(age > 25 && age < 67){
//         console.log("vous etes un travailleur");
//     }
//     else if(age >= 67){
//         console.log("vous etes à la retraite");
//     }
//     else{
//         console.log("age invalide");
//     }
// }
// else{
//     console.log("Veuillez entrer un nombre");
// }
////APPROCHE CONSEILLEE: partir de supérieur à 66 puis supérieur à 25, puis supérieur à 0, puis age invalide.
////on peut même éviter des opérateurs logiques de && et >= dans cette ordre.


////Calculatrice: nous avons besoin d'un nombre, un opérateur, puis un autre nombre, puis donner total.

let nombre1 = parseFloat(prompt("Donnez moi une chiffre: "));
if(!isNaN(nombre1)){
    alert("Bon!  Maintenant il faut selectionner l'opération vous désirez faire ...");
    

    let operator = prompt("Si vous voulez faire une addition, entrez +, si vous voulez soustraire, entrez -, pour multiplier entrez *, pour diviser entrez /");

    if(operator === "+" || operator === "-" || operator === "/" || operator === "*"){
        let nombre2 = parseFloat(prompt("Donnez moi une deuxième chiffre: "));
        if(!isNaN(nombre2)){
            if(operator === "/"){
                let result = nombre1 / nombre2;
                alert("votre resultat est :" + result)
            }
            else if(operator === "*"){
                let result = nombre1 * nombre2;
                alert("votre resultat est :" + result)
            }
            else if(operator === "+"){
                let result = nombre1 + nombre2;
                alert("votre resultat est :" + result)
            }
            else if(operator === "-"){
                let result = nombre1 - nombre2;
                alert("votre resultat est :" + result)
            }
        }
        else{
            alert("UNE CHIFFRE J'AI DIT");
        }
    }
    else {
        alert("vous n'avez pas entré un opérateur valide.");
    }
}
else {alert("mais noooon, j'ai besoin que vous me donnez une chiffre.");
}