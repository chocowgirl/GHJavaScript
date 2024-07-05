const jaune = document.querySelector(".jaune");
const bleu = document.querySelector(".bleu");
const noir = document.querySelector(".noir");

const rose = document.querySelector(".rose");
const vert = document.querySelector(".vert");
const bisque = document.querySelector(".bisque");

const brun = document.querySelector(".brun");
const rouge = document.querySelector(".rouge");
const magenta = document.querySelector(".magenta");


const cases = document.querySelectorAll("#canva tr td");
console.log("cases: " +cases);

let couleurEncours;

const btn = document.getElementsByTagName("button")[0];
console.dir("button: " +btn);

jaune.addEventListener("click", function(){
    couleurEncours=jaune.textContent;
    console.log(couleurEncours);
});

bleu.addEventListener("click", function(){
    couleurEncours=bleu.textContent;
    console.log(couleurEncours);
});

noir.addEventListener("click", function(){
    couleurEncours=noir.textContent;
    console.log(couleurEncours);
});

rose.addEventListener("click", function(){
    couleurEncours=rose.textContent;
    console.log(couleurEncours);
});

vert.addEventListener("click", function(){
    couleurEncours=vert.textContent;
    console.log(couleurEncours);
});

bisque.addEventListener("click", function(){
    couleurEncours=bisque.textContent;
    console.log(couleurEncours);
});

brun.addEventListener("click", function(){
    couleurEncours=brun.textContent;
    console.log(couleurEncours);
});

rouge.addEventListener("click", function(){
    couleurEncours=rouge.textContent;
    console.log(couleurEncours);
});

magenta.addEventListener("click", function(){
    couleurEncours=magenta.textContent;
    console.log(couleurEncours);
});

//original exo asked for a toggle:
// for (let i = 0; i < cases.length; i++) {
//     cases[i].addEventListener("click", function(){
//         cases[i].classList.toggle(couleurEncours);
//     });
// };

//I find this works better than a toggle for colouring, because once we get into toggling the classlist with the colourEncours, css order of appearance of the classes impacts whether one colour can colour directly over another or not without needing to toggle the previous colour (for some you do and others not b/C of this order of creation of classes in css, which leads to unpredictable behaviour in the app.)
for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener("click", function(){
        cases[i].className="";
        cases[i].classList.add(couleurEncours);
    });
};


btn.addEventListener('click',function(){
    for (let i = 0; i < cases.length; i++) {
        cases[i].className="";
    };
});

console.log(btn);
console.log(jaune);

