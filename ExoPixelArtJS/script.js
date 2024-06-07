const jaune = document.querySelector(".jaune")
const bleu = document.querySelector(".bleu")
const noir = document.querySelector(".noir")

const rose = document.querySelector(".rose")
const vert = document.querySelector(".vert")
const bisque = document.querySelector(".bisque")

const brun = document.querySelector(".brun")
const rouge = document.querySelector(".rouge")
const magenta = document.querySelector(".magenta")


const case1 = document.querySelector("#canva tr td .row1 .col1")
console.log(case1)

// const case2 = document.querySelector("#canva tr td .row1.col2")
// console.log(case2)

// const case3 = document.querySelector("#canva tr td .row1 .col3")
// console.log(case3)
// const case4 = document.querySelector("#canva tr td .row1 .col4")
// console.log(case4)
// const case5 = document.querySelector("#canva tr td")
// console.log(case5)
// const case6 = document.querySelector("#canva tr td")
// console.log(case6)
// const case7 = document.querySelector("#canva tr td")
// console.log(case7)
// const case8 = document.querySelector("#canva tr td")
// console.log(case8)
// const case9 = document.querySelector("#canva tr td")
// console.log(case9)
// const case10 = document.querySelector("#canva tr td")
// console.log(case10)
// const case11 = document.querySelector("#canva tr td")
// console.log(case11)
// const case12 = document.querySelector("#canva tr td")
// console.log(case12)
// const case13 = document.querySelector("#canva tr td")
// console.log(case13)
// const case14 = document.querySelector("#canva tr td")
// console.log(case14)
// const case15 = document.querySelector("#canva tr td")
// console.log(case15)
// const case16 = document.querySelector("#canva tr td")
// console.log(case16)

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


rose.addEventListener("click", function(){
    couleurEncours=rose.textContent;
    console.log(couleurEncours);
})

vert.addEventListener("click", function(){
    couleurEncours=vert.textContent;
    console.log(couleurEncours);
})

bisque.addEventListener("click", function(){
    couleurEncours=bisque.textContent;
    console.log(couleurEncours);
})


brun.addEventListener("click", function(){
    couleurEncours=brun.textContent;
    console.log(couleurEncours);
})

rouge.addEventListener("click", function(){
    couleurEncours=rouge.textContent;
    console.log(couleurEncours);
})

magenta.addEventListener("click", function(){
    couleurEncours=magenta.textContent;
    console.log(couleurEncours);
})




case1.addEventListener("click", function(){
    case1.classList.toggle(couleurEncours)
})
// case2.addEventListener("click", function(){
//     case2.classList.toggle(couleurEncours)
// })
// case3.addEventListener("click", function(){
//     case2.classList.toggle(couleurEncours)
// })
// case4.addEventListener("click", function(){
//     case4.classList.toggle(couleurEncours)
// })
// case5.addEventListener("click", function(){
//     case5.classList.toggle(couleurEncours)
// })
// case6.addEventListener("click", function(){
//     case6.classList.toggle(couleurEncours)
// })
// case7.addEventListener("click", function(){
//     case7.classList.toggle(couleurEncours)
// })
// case8.addEventListener("click", function(){
//     case8.classList.toggle(couleurEncours)
// })