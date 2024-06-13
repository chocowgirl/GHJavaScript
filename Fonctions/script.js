//Functions / methods can have no parameters, and don't have to return anything
function DireBonjour(){
    alert("Bonjour!")
}

// this is more like a "procedure" bc there is no return
function PlusDeux(nombre){
    console.log(nombre+2);
}


// this one is REALLY a function bc there is a return
function RetourPlusDeux(nombre){
    return nombre + 2
}

PlusDeux(5)
//this one we'll see in clg
RetourPlusDeux(10)
//this one we don't see and have to recover in a var to use later

//Here we recover the value in a variable and then use the variable

let resultat= RetourPlusDeux(10)
console.log(resultat);

let nombre1 = 5
console.log(nombre1); //will show 5 in clg
PlusDeux(nombre1)
console.log(RetourPlusDeux(nombre1))


////////////////////////
function ModifierJour(mots){
    mots[3] = "jeudi"
    console.log(mots);
}

const mots = ["Bonjour", "nous", "sommes", "mercredi"]
console.log(mots);
ModifierJour(mots); // paramètre est passé par reference
console.log(mots);

// simple values are treated like copies, complex values are treated by 'referencing' which means they are modified even without asking for a return ///


///////////////////////////////
//a function can have default parameters, so without citing parameters, it will use the default parameter.
function Plus2(nombre = 3){
    console.log(nombre+2);
}

let answer = Plus2()
console.log(answer);
//////////////////////////////


