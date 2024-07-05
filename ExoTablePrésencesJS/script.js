const presentButton1 = document.getElementById("presentButton1");
const absentButton1 = document.getElementById("absentButton1");
const status1 = document.getElementById("status1");

const presentButton2 = document.getElementById("presentButton2");
const absentButton2 = document.getElementById("absentButton2");
const status2 = document.getElementById("status2");

const presentButton3 = document.getElementById("presentButton3");
const absentButton3 = document.getElementById("absentButton3");
const status3 = document.getElementById("status3");


absentButton1.addEventListener("click", function(){
    status1.textContent = "Absent";
    absentButton1.textContent = " ";
    presentButton1.textContent = "✔️"
});

presentButton1.addEventListener("click", function(){
    status1.textContent="Present";
    presentButton1.textContent = " ";
    absentButton1.innerHTML = "❌"
});

absentButton2.addEventListener("click", function(){
    status2.textContent = "Absent";
    absentButton2.textContent = " ";
    presentButton2.textContent = "✔️"
});

presentButton2.addEventListener("click", function(){
    status2.textContent="Present";
    presentButton2.textContent = " ";
    absentButton2.innerHTML = "❌";
});

absentButton3.addEventListener("click", function(){
    status3.textContent = "Absent";
    absentButton3.textContent = " ";
    presentButton3.textContent = "✔️"
});

presentButton3.addEventListener("click", function(){
    status3.textContent="Present";
    presentButton3.textContent = " ";
    absentButton3.innerHTML = "❌";
});


//THIS IS ME LATER ADDING A RESET BUTTON WITH A BOUCLE :)
const resetbtns = document.querySelectorAll('.reset');
console.log("resetbtns" + resetbtns);

for (let i = 0; i < resetbtns.length; i++) {
    resetbtns[i].addEventListener("click", function(){
        resetbtns[i].previousElementSibling.textContent = "❌";
        resetbtns[i].previousElementSibling.previousElementSibling.textContent = "✔️";
        resetbtns[i].previousElementSibling.previousElementSibling.previousElementSibling.textContent = " ";
    });
};

///////////////// solution prof /////////////

// **** POUR RECUPERER LES ELEMENTS AVEC ID ****
// const boutonPresence = document.getElementById("boutonPresence")
// const boutonAbsence = document.getElementById("boutonAbsence")
// const elementstatus = document.getElementById("status")

// **** AUTRE METHOD POUR RECUPERER LES ELEMENTS SANS ID ****
// const boutonPresence = document.querySelectorAll("tbody tr")[0].children[3]
// console.log(boutonPresence);
// const boutonAbsence = document.querySelectorAll("tbody tr")[0].children[4]
// const elementstatus = document.querySelectorAll("tbody tr")[0].children[2]
// boutonPresence.addEventListener("click", MettrePresent)
// boutonAbsence.addEventListener("click", MettreAbsent)

// function MettrePresent(){
//     elementStatus.textContent = "Present"
//     boutonPresence.textContent = ""
//     boutonAbsence.textContent = "❌"
// }

// function MettreAbsent(){
//     elementStatus.textContent = "Absent"
//     boutonAbsence.textContent = ""
//     boutonPresence.textContent = "✔️"
// }