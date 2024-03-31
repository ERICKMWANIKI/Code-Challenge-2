//function Declaration
function swapCase (stringinput){
      //Initianalize a string to store swapped characters
    let swappedstring ="";
    //loop each character of the string
    for (let m = 0; m < stringinput.length; m++) {
        //Get the current character
        let chara = stringinput [m]
        //cheking if character is lowercase
        if (chara === chara.toLowerCase()){
            //If lowercase,convert to uppercase
            swappedstring += chara.toUpperCase();
        }else{
             //If uppercase,convert it to lowercase 
            swappedstring += chara.toLowerCase();
        }
    }
   //Return string with swapped cases
    return swappedstring;

}
//Testing the function
let stringinput ="Ndirangu Erick"
console.log(swapCase(stringinput));