///// ADDITION DE BOUCLE POUR AUTOMATISER //////
//besoin de recuperer le node list pour boutons de presence
const BOUT_PRES = document.querySelectorAll(".boutonPresence")
const BOUT_ABS = document.querySelectorAll(".boutonAbsence")

//pour comportement boutons presences
// et impacter le column status
for (let i = 0; i < BOUT_PRES.length; i++) {
    BOUT_PRES[i].addEventListener("click", function(){
        // console.dir(BOUT_PRES[i])//on voit que previous elem sibling is status column et next is red button column
        BOUT_PRES[i].previousElementSibling.textContent = "Présent"
        BOUT_PRES[i].textContent = ""
        BOUT_PRES[i].nextElementSibling.textContent = "❌"//to ensure that there is always the opposite button visible
    })

    BOUT_ABS[i].addEventListener("click", function(){
        // console.dir(BOUT_PRES[i])//on voit que previous elem sibling is status column et next is red button column
        BOUT_ABS[i].previousElementSibling.previousElementSibling.textContent = "Absent"//pour sauter 2 columns to affect Status column
        BOUT_ABS[i].textContent = ""
        BOUT_ABS[i].previousElementSibling.textContent = "✔️"//to ensure that there is always the opposite button visible

//// OR WE CAN NAVIGATE THE TABLE ROW BY CITING IT AS THE PARENT ELEMENT

        // BOUT_ABS[i].addEventListener("click", function(){
        //     // console.dir(BOUT_PRES[i])//on voit que previous elem sibling is status column et next is red button column
        //     BOUT_ABS[i].parentElement.children[2].textContent = "Absent"//pour sauter 2 columns to affect Status column
        //     BOUT_ABS[i].textContent = ""
        //     BOUT_ABS[i].previousElementSibling.textContent = "✔️"//to ensure that there is always the opposite button visible

    })
    
}

