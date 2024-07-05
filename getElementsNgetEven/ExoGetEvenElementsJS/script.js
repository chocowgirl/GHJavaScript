//exo is to retrieve the even number values

const target = document.querySelectorAll('li:nth-child(odd)');
console.log(target)

target.forEach(element => {
    console.log(element.innerText)
});