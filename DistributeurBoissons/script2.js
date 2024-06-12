const DISPLAY = document.getElementById("display")
const BOUTON = document.getElementById("acheter")
//les choix
const COCA = document.getElementById("coca")
const EAU = document.getElementById("eau")
const SPRITE = document.getElementById("sprite")
const OASIS = document.getElementById("oasis")

let stockEau = 10;
let stockCoca = 4;
let stockSprite = 0;
let stockOasis = 1;

// console.dir(BOUTON)
let stockUpdate = document.getElementsByTagName("p");
stockUpdate[0].innerText = ("Stock Eau :" + stockEau)
stockUpdate[1].innerText = ("Stock Coca :" + stockCoca)
stockUpdate[2].innerText = ("Stock Sprite :" + stockSprite)
stockUpdate[3].innerText = ("Stock Oasis :" + stockOasis)

//add event management based on button click
BOUTON.addEventListener("click", function(){
    // console.dir(SPRITE); to check attributes
    if(COCA.checked){
        if(stockCoca > 0){
            DISPLAY.value = "Vous recevez : Coca"
            stockCoca--
        }
        else{
            DISPLAY.value = "SOLD OUT!"
        }
    }

    else if(EAU.checked){
        if(stockEau > 0){
            DISPLAY.value = "Vous recevez : Eau"
            stockEau--
        }
        else{
            DISPLAY.value = "SOLD OUT!"
        }
    }

    else if(SPRITE.checked){
        if(stockSprite > 0){
            DISPLAY.value = "Vous recevez : Sprite"
            stockSprite--
        }
        else{
            DISPLAY.value = "SOLD OUT!"
        }
    }

    else if(OASIS.checked){
        if(stockOasis > 0){
            DISPLAY.value = "Vous recevez : Oasis"
            stockOasis--
        }
        else{
            DISPLAY.value = "SOLD OUT!"
        }
    }

    else{
        DISPLAY.value = "Choix invalide!"
    }

// console.dir(stockUpdate)
stockUpdate[0].innerText = ("Stock Eau :" + stockEau)
stockUpdate[1].innerText = ("Stock Coca :" + stockCoca)
stockUpdate[2].innerText = ("Stock Sprite :" + stockSprite)
stockUpdate[3].innerText = ("Stock Oasis :" + stockOasis)
})

