//Funcnction Declaration
function generateArray (first,second) {
     //If start is greater than end, swap them 
   if (first > second) {
        let temp = first;
        first = second;
        second = temp;
     }
     // Initialize  array to store the generated numbers.
     let array = [];
    // Generate numbers between First and Second
     for(let M = first; M<=second;M++){
        array.push(M);
     }
     // Return the generated array containing all the numbers between First and Second.
    return array;
     return array;
}
let firstNumber = 360;
let secondNumber = 370;
// Generate an array between FirstNumber and SecondNumber.
let generatedArray = generateArray(firstNumber,secondNumber);
// Output the generated array.
console.log(generatedArray);