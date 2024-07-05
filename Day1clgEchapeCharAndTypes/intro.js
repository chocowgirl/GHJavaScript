alert("Bienvenue sur mon site!");

alert("26"+26);  // concatenation rather than addition

number = Number("26"); // conversion of a string to a number
secondNumber = +"33";// other way of converting to a number
parsedDecimal = parseFloat("36.2"); // a way to convert to float
parsedInt = parseInt("52");// a way to convert to int


console.log(`number is ${number}`);//escaping variables or JS from print statement using backticks to start and end the statement, and then ${} to escape stuff that is not the text to be printed, (thus avoiding the need to have multiple plus signs and quotation marks).

console.log(`type of number is a ${typeof(number)} and it's value is ${number}`); //shown here not just escaping a variable, but a term needed to access the desired (shown in console) indication.

console.log(`type of number is a ${typeof(secondNumber)}and it's value is ${secondNumber}`);

console.log(`type of number is a ${typeof(parsedDecimal)} and it's value is ${parsedDecimal}`);

console.log(`type of number is a ${typeof(parsedInt)} and it's value is ${parsedInt}`);
/// NOTE THAT IN THE CLG ALL OF THESE SHOW UP AS TYPE NUMBER /////////
