let stockEau = 10;
let stockCoca = 4;
let stockSprite = 0;
let stockOasis = 1;
let choixValide = false;



let choix = prompt("Selectionnez un boisson :\n 1 = Eau,\n 2 = Coca,\n 3 = Sprite\n 4 = Oasis");

// if(choix === "1" || choix === "2" || choix === "3" || choix === "4"){
//     console.log("dans le if");
// choixValide = true;
//THE ABOVE (COMMENTED) WASNT NECESSARY TO ENTER IN THE SWITCH, AND DEACTIVATED THE DEFAULT ACTION

switch(choix){
    case "1" : 
        if(stockEau > 0){
            alert("Voici votre eau");
            stockEau -- ;
            // console.log("stock eau restant: " + stockEau);
        }
        else{
            alert("SOLD OUT - Il n'y a plus d'eau!");
        }
        break;
    case "2" :
        if(stockCoca > 0){
            alert("Voici votre Coca");
            stockCoca -- ;
            // console.log("stock coca restant: " + stockCoca);
        }
        else{
            alert("SOLD OUT - Il n'y a plus de Coca!");
        }
        break;
    case "3" :
        if(stockSprite > 0){
            alert("Voici votre Sprite");
            stockSprite -- ;
            // console.log("stock sprite restant: " + stockSprite);
        }
        else{
            alert("SOLD OUT - Il n'y a plus de Sprite!");
        }
        break;
    case "4" :
        if(stockOasis > 0){
            alert("Voici votre Oasis");
            stockOasis -- ;
            // console.log("stock oasis restant: " + stockOasis);
        }
        else{
            alert("SOLD OUT - Il n'y a plus d'Oasis!");
        }
        break;
    default:
        alert("choix non valide!");
        break;
}

// else{
// alert("votre choix n'est pas valide");


console.log("stock eau restant: " + stockEau);
console.log("stock coca restant: " + stockCoca);
console.log("stock sprite restant: " + stockSprite);
console.log("stock oasis restant: " + stockOasis);