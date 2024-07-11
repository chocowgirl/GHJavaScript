const taskEntry = document.getElementById("entry");
const addbutton = document.getElementById("addbutton");
// const clrbutton = document.getElementById("clrbutton")
const list = document.getElementById("list");


// function addItem(){
//     // let safeValue = taskName.value.trim();
//     // taskName.value = "";
//     // if(safeValue ==="") return;
//     let entry = taskEntry.value;
//     const li = document.createElement("li");
//     li.innerText = entry;
//     list.append(li);
//     let entryField = document.getElementById("entry");
//     entryField.value="";
// }

// addbutton.addEventListener("click", addItem);
// clrbutton.addEventListener("click", clearItem);

// function clearItem(){
//     let entry = document.getElementById("entry").value;
//     const li = getElementsByInnerText(entry);
//     list.remove(li[0]);
//     let entryField = document.getElementById("entry");
//     entryField.value="";
// }


//creer lelement de la list
// const li = document.createElement("li");
//recuperer la valeur du champ et parametrer lele de la liste
// li.innerText = taskName.value;
//ajouter lele de la liste a la liste
//tasks.append(li);
//vider le champ


///// SOLUTION POUR AJOUTER BOUTON QUI EFFACE LA LIGNE PLUS TARD /////
function addItem(){
    // let safeValue = taskName.value.trim();
    // taskName.value = "";
    // if(safeValue ==="") return;
    let entry = taskEntry.value;
    const li = document.createElement("li");
    li.innerHTML = entry +"  " + "<button id='clrbutton'>Delete</button>";
    list.append(li);
    let entryField = document.getElementById("entry");
    entryField.value="";
}

addbutton.addEventListener("click", addItem);
clrbutton.addEventListener("click", clearItem);

function clearItem(){

}


///////////*********** PROF STUFF BELOW FOR REMOVE LINE
// const btnRemove = document.createElement('button');
// btnRemove.innerText = "🗑️";
// li.append(btnRemove);

// btnRemove.addEventListener('click', removeTask);

// function removeTask(event){
//     console.log("event: ", event);
//     console.log("event.target: ", event.target);
//     event.target.parentElement.remove();
//}