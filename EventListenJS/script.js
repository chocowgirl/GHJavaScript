const inputNom= document.querySelector("#inputNom");
const inputPrenom= document.getElementById("inputPrenom");
const inputAge= document.getElementById("inputAge");
const bouton = document.querySelector("button");

bouton.addEventListener("click", function(){
    const nomComplet = inputPrenom.value + " " + inputNom.value;
    const age = inputAge.valueAsNumber;
    const ageDansCinqAns = age + 5;
    alert("Bonjour "+nomComplet+" vous avez "+age+" ans et dans 5 ans vous aurez "+ageDansCinqAns+" ans");
})