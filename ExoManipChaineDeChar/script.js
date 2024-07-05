const chaine = document.querySelector("h1").innerText;
console.log("Z"<"z");

//PROF** a fait un input et l'a donné un id "monInput" avec le value"ma formation javascript"
//**const CHAINE = document.getElementById("monInput");
// **console.dir(CHAINE);  On a récuperé un input
//on voit que le value est comme attendu
//**let chaine_recupere = CHAINE.value;
//**console.log(chaine_recupere);
//voilà, nous avons recupere le text.


//RETOURNER LA POSITION DE MA (mai j'avais compris renverser...)
let am = document.getElementById("am");
am.innerText=chaine[1]+chaine[0];

//PROF**console.log(chaine_recupere.indexOf("ma"));  ->ca nous donne 0 comme position de ma



//INDIQUER L'INDICE DE LA LETTRE P
let indiceDeP = document.getElementById("indiceDeP");
indiceDeP.innerText=chaine.length-2;

//PROF**console.log(chaine_recupere.indexOf("p"));



//RETROUVER LA LETTRE SITUEE A L'INDICE 21
let lettreIndex21 = document.getElementById("lettreIndex21");
lettreIndex21.innerText=chaine[21];

//PROF**console.log(chaine_recupere.charAt(21));



//REMPLACER "JAVASCRIPT" PAR "JAVA"
let java = chaine.slice(0,[13]);
// console.log(java);
let capJ = chaine[13].toUpperCase();
// console.log(capJ);
let ava = chaine.slice(14,[17]);
// console.log(ava);
let myFormaJava = document.getElementById("Java");
myFormaJava.innerText=java+capJ+ava;

//PROF**chaine_recupere = chaine_recupere.replace("javascript", "Java");
//PROF**console.log(chaine_recupere);



//DECOUPER LA CHAINE AVEC LE DELIMITEUR " " (ESPACE)
let decoupeChaineEspace = document.getElementById("decoupeChaineEspace");
let arrayChaineCoupee = chaine.split(" ");
console.log(arrayChaineCoupee);
// decoupeChaineEspace.innerText = 
// let ma = arrayChaineCoupee[0];
// let formation = arrayChaineCoupee[1];
// let javascript = arrayChaineCoupee[2];
// decoupeChaineEspace.innerText=ma+formation+javascript;

//PROF**let chaineArray = chaine_recupere.split(" ");
//PROF**console.log(chaineArray);



//INVERSER LA CHAINE DE CARACTERES
let ainverser = chaine.split("");//ici je rend le string en tableau
console.log(ainverser);//ici j'inverse le tableau
let inverse = ainverser.reverse().join("");//ici je retransforme le tableau renverse en string
console.log(inverse);
// let inversestring = inverse.toString();
// console.log(inversestring);
let reversed = document.getElementById("inverse").innerText=inverse;

//PROF** let chaineInverse = chaine.split("").reverse().join("");
//PROF** console.log(chaineInverse);