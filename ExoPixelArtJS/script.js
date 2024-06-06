const jaune = document.querySelector(".jaune")
const bleu = document.querySelector(".bleu")
const noir = document.querySelector(".noir")
const case1 = document.querySelector("#canva tr td")
console.log(case1)

let couleurEncours;

jaune.addEventListener("click", function(){
    couleurEncours=jaune.textContent;
    console.log(couleurEncours);
})

bleu.addEventListener("click", function(){
    couleurEncours=bleu.textContent;
    console.log(couleurEncours);
})

noir.addEventListener("click", function(){
    couleurEncours=noir.textContent;
    console.log(couleurEncours);
})

case1.addEventListener("click", function(){
    case1.classList.toggle(couleurEncours)
})
case2.addEventListener("click", function(){
    case2.classList.toggle(couleurEncours)
})
case3.addEventListener("click", function(){
    case2.classList.toggle(couleurEncours)
})
case4.addEventListener("click", function(){
    case4.classList.toggle(couleurEncours)
})
case5.addEventListener("click", function(){
    case5.classList.toggle(couleurEncours)
})
case6.addEventListener("click", function(){
    case6.classList.toggle(couleurEncours)
})
case7.addEventListener("click", function(){
    case7.classList.toggle(couleurEncours)
})
case8.addEventListener("click", function(){
    case8.classList.toggle(couleurEncours)
})