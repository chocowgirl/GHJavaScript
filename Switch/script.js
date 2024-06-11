let choix = prompt("Selectionnez le fruit que vous souhaitez acheter : pomme, poire, kiwi, mangue")

let stockPoire = 2

switch(choix){
    case "pomme" : 
        console.log("le prix est de 1 euro/kg");
        break
    case "poire" :
        if(stockPoire > 0){
            console.log("le prix est de 1.10/kg");
        }
        else{
            console.log("Il n'y a plus de stock");
        }
        break
    case "kiwi" : 
    case "mangue" :
        console.log("le prix est de 4.20/kg");
        break
    default:
        console.log("le fruit n'est pas disponible");
        break
}