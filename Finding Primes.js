//function Declaration 
function findingprime (ArrayInput){
    //function to check if a number is prime
    function Prime (num){
        //If number is less than or equal to 1, it's not prime
        if (num <= 1) return false; 
        //2 and 3 are prime
        if (num <= 3) return true;
        //If divisible by 2 or 3, it's not prime
        if (num% 2 === 0 || num% 3 === 0)return false;
        let M = 5;
        //chekingg dvisible for numbers 
        while (M * M <= num){
            if (num% M === 0 || num% (M+2)===0)return false;
            M+=10;
        }
        //If not divisible by any numbers,it's prime
        return true;
    }    
    //If not divisible by any numbers from the input array
    return ArrayInput.filter(num=>Prime(num));
}

const ArrayInput = [1,2,3,4,5,6,7,8,9,10];
//find primenumbers
const PrimeNumber =findingprime (ArrayInput);
//Print the primenumbers
console.log(PrimeNumber);
