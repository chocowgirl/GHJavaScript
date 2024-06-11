let stockEau = 10;
let stockCoca = 4;
let stockSprite = 0;
let stockOasis = 1;
let choixValide = false;



choix = prompt("Selectionnez un boisson : entrez 1 = Eau, 2 = Coca, 3 = Sprite et 4 = Oasis");

if(choix === "1" || choix === "2" || choix === "3" || choix === "4"){
    choixValide = true;
    switch(choix){
        case "1" : 
            if(stockEau > 0){
                alert("Voici votre eau");
                stockEau -- ;
                console.log(stockEau);
            }
            else{
                alert("SOLD OUT - Il n'y a plus d'eau!");
            }
            break;
        case "2" :
            if(stockCoca > 0){
                alert("Voici votre Coca");
                stockCoca -- ;
                console.log(stockCoca);
            }
            else{
                alert("SOLD OUT - Il n'y a plus de Coca!");
            }
            break;
        case "3" :
            if(stockSprite > 0){
                alert("Voici votre Sprite");
                stockSprite -- ;
                console.log(stockSprite);
            }
            else{
                alert("SOLD OUT - Il n'y a plus de Sprite!");
            }
            break;
        case "4" :
            if(stockOasis > 0){
                alert("Voici votre Oasis");
                stockOasis -- ;
                console.log(stockOasis);
            }
            else{
                alert("SOLD OUT - Il n'y a plus d'Oasis!");
            }
            break;
    }
}
else{
    alert("votre choix n'est pas valide");
}