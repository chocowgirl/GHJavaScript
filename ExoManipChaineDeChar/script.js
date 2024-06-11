const chaine = document.querySelector("h1").innerText;
// console.log(chaine);



let am = document.getElementById("am");
am.innerText=chaine[1]+chaine[0];

// *** console.log(chaine.indexOf("Ma"));



let indiceDeP = document.getElementById("indiceDeP");
indiceDeP.innerText=chaine.length-2;

// *** console.log(chaine.indexOf("p"));



let lettreIndex21 = document.getElementById("lettreIndex21");
lettreIndex21.innerText=chaine[21];

// *** console.log(chaine.charAt(21));



let java = chaine.slice(0,[13]);
// console.log(java);
let capJ = chaine[13].toUpperCase();
// console.log(capJ);
let ava = chaine.slice(14,[17]);
// console.log(ava);
let myFormaJava = document.getElementById("Java");
myFormaJava.innerText=java+capJ+ava;

// *** console.log(chaine.replace("javascript", "Java"));




let decoupeChaineEspace = document.getElementById("decoupeChaineEspace");
let arrayChaineCoupee = chaine.split(" ");
console.log(arrayChaineCoupee);
// decoupeChaineEspace.innerText = 
// let ma = arrayChaineCoupee[0];
// let formation = arrayChaineCoupee[1];
// let javascript = arrayChaineCoupee[2];
// decoupeChaineEspace.innerText=ma+formation+javascript;

// *** let chaineArray = chaine.split(" ");
// *** console.log(chaineArray);



let ainverser = chaine.split("");
console.log(ainverser);
let inverse = ainverser.reverse().join("");
console.log(inverse);
// let inversestring = inverse.toString();
// console.log(inversestring);
let reversed = document.getElementById("inverse").innerText=inverse;

// *** let chaineInverse = chaine.split("").reverse().join("");
// *** console.log(chaineInverse);