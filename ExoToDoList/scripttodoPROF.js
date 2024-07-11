const taskName = document.getElementById('taskName');//input
const btnAddTask = document.getElementById('btnAddTask');//button

const tasks = document.getElementById('tasks');//ul


btnAddTask.addEventListener('click', addTask);

function addTask(){
    //nettoyage de la valeur
    let safeValue = taskName.value.trim(); //trim gets ride of the spaces before and after the text, and for extra spaces placed between words, it reduces them down to only one space between words.

    //vider le champs, puis remettre le champs en focus
    taskName.value="";
    taskName.focus();

    //verification qu'il y a une valeur, sinon on sort
    if(safeValue.value === "") return; //evite que des entrees vides soient mises dans le to-do list --> mais ceci n'est pas super efficace car l'utilisateur peut mettre l'espace comme charactère.  SOOO we use the line of code just above to "clean" the entry and analyse it.

    //creer l'element de la liste
    const li=document.createElement('li');

    //recuperer la valeur du champ et parametrer l'element de la liste
    // li.innerText = taskName.value;
    li.innerText = safeValue; //

    //Ajouter l'element de la liste à la liste
    tasks.append(li);

    //creation du bouton de suppression
    const btnRemove = document.createElement('button');
    btnRemove.innerText = " ❌";
    li.append(btnRemove);

    btnRemove.addEventListener('click', removeTask)
}

// pour le fonction en-dessous, nous n'avons pas accès aux variables qui sont créés dans une autre fonction.  Par contre, quand on a un evenement qui est déclenché, on peut le recuperer dans le callback.  Donc, l'evenement dans le addEventListener va être transmis à la fonction en-dessous si on le met dans les parentheses... (?)
function removeTask (event){
    console.log('event :>> ', event);// ici on voit que l'event a comme target le bouton
    console.log('event.target :>> ', event.target);//on recupere le bouton X
    event.target.parentElement.remove(); //donc on supprime le li
}