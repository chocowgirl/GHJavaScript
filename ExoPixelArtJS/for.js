const jaune = document.querySelector(".jaune")
const bleu = document.querySelector(".bleu")
const noir = document.querySelector(".noir")

const rose = document.querySelector(".rose")
const vert = document.querySelector(".vert")
const bisque = document.querySelector(".bisque")

const brun = document.querySelector(".brun")
const rouge = document.querySelector(".rouge")
const magenta = document.querySelector(".magenta")


const cases = document.querySelectorAll("#canva tr td")

console.log(cases)


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



for (let icase = 0; icase < cases.length; icase++) {
    cases[icase].addEventListener("click", function(){
        cases[icase].className=couleurEncours
    })
}
