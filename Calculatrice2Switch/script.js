
let nombre1 = parseFloat(prompt("Donnez-moi un nombre : "))
let operateur = prompt("Donner moi un operateur (*, +, -, /) : ")
let nombre2 = parseFloat(prompt("Donnez-moi un autre nombre : "))
let resultat
let operationValide = true

if(!isNaN(nombre1) && !isNaN(nombre2)){
    switch(operateur){
        case "+":
            resultat = nombre1 + nombre2
            break
        case "-":
            resultat = nombre1 - nombre2
            break
        case "/":
            if(nombre2 != 0){
            resultat = nombre1 / nombre2
            }
            else{
                alert("division par zero impossible");
                operationValide = false
            }
            break
        case "*":
            resultat = nombre1 * nombre2
            break
        default:
            alert("l'operateur donné n'est pas valide");
            operationValide = false
    }

    if(operationValide){
        alert(`${nombre1} ${operateur} ${nombre2} = ${resultat}`)
    }
}

else{
    alert("L'une des valeurs n'est pas un nombre")
}
