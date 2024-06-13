const tabSem = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"]
const TAB = [1,2,3,4,5,6,7,8,9,10]





// //recuperation d'une node list (array)
// const PRODUITS = document.querySelectorAll("li") //will work with forEach


// // const PRODUITS = document.getElementsByTagName("li") //will work with forOf but not with ForEach bc is an html collection (not array)
// console.log(PRODUITS);


// //nodelist results if querySelectorAll, HTML collection results if getElementsByTagName


///BELOW IS THE STRUCTURE "FONCTION FLECHEE" FOR SOME FOR EACHES
// // tabSem.forEach((jour) => console.log(jour));
// // ///THE ABOVE CODE IS THE SAME AS THE CODE DIRECTLY BELOW
// // tabSem.forEach(jour => {
// //     console.log(jour);
// // });

// // tabSem.forEach(jour, i => {
// //     console.log(i + ":" + jour);
// // });


// // //// UTILISANT LES 3 PARAMETRES ////
// // tabSem.forEach((jour, i, array) => {
// //     console.log(i + ':' + jour);
// //     // console.log(array)
// // });  /// round brackets needed when we pass more than 1 parameter.  One or three can be passed.



// // for (let i = 0; i < PRODUITS.length; i++) {
// //     PRODUITS[i].addEventListener("click", function(){
// //         alert(`${produit} a été ajouté au panier`)
// //     });
    
// // }

// ///////THE ABOVE IS THE SAME AS THE BELOW
// console.log("HALOOOOOO");

// for(const produit of PRODUITS){
//     produit.addEventListener("click", function(){
//         alert(`${produit.textContent} a été ajouté au panier`)
//     })
// }




// // si nous recuperons une collection qui n'est pas un array nous pouvons faire la conversion
// Array.from(PRODUITS).forEach(produit => {
//     produit.addEventListener("click", function(){
//         alert(`${produit.textContent} est maintenant dans le panier`)
//     })
// })


//// Exo for each day of the work-week, list it in console like this: jour# X de la semaine, journame
tabSem.forEach(function (jour, i, array){
    if(i < 5){
        console.log("jour # " + (i+1) + " de la semaine, " + jour);
    }
})