/* 
Faites en sorte que lorsqu'on click sur la margarita,
l'input somme augmente de son prix (10 euros).
*/

const margarita = document.querySelectorAll("li")[0];
console.log(margarita);

// const quatreSaison = document.querySelectorAll("li")[1]

// const qtyMargarita = document.getElementById("qtyMargarita");
// console.log(qtyMargarita);

// const qty4Saison = document.getElementById("qty4Saison");
// console.log(qty4Saison);

const somme = document.getElementById("input-somme");
console.log(somme);

// const btnOrder = document.getElementsByTagName('button')[0];
// console.log(btnOrder);

margarita.addEventListener("click", function(){
    // qtyMargarita.value = parseInt(qtyMargarita.value) + 1;
    somme.valueAsNumber+=10;
});


// quatreSaison.addEventListener("click", function(){
//     qty4Saison.value = parseInt(qty4Saison.value) + 1;
//     somme.valueAsNumber+=12;
// });

//Just me fucking around with an onclick (vs an addEventListener)
// btnOrder.onclick = function(){
//     alert("msg SENT!");
//     console.log("message sent!!!");
//     btnOrder.textContent = "SENT";
// };


//could also convert input.value by input.valueAsNumber