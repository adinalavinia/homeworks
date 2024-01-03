// calculati media aritmetica a unui array de numere;
// avand un array cu numere, valori boolene si stringuri calculati suma tuturor numerelor. Ignorati toate valorile care nu sunt de tip numar;
// BONUS: creati un program care afiseaza primele 20 numere din sirul lui Fibonacci;

let numbers = [5, 20, 6, 90, 36, 166, 94, 615, 93];

let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log("Suma numerelor este: " + sum);

let avarage = sum / numbers.length;
console.log("Media aritmetica a numerelor este: " + avarage);

//

let object = [5, 20, 6, 90, 25, 166, 94, 45, 93, true, false, "abc", "asd"];
let sumObject = 0;

for(let i = 0; i < object.length; i++){
    if(typeof object[i] === "number"){
        sumObject += object[i];
    }
}
console.log("Suma numerelor este: " + sumObject);

// BONUS: creati un program care afiseaza primele 20 numere din sirul lui Fibonacci;

let num = prompt("Enter the limit of Fibonacci Series:");
let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
let next_num;


for(let i = 0; i <= num; i++){
    next_num = num1 + num2;
    console.log(next_num);
    num1 = num2;
    num2 = next_num;
}
console.log("Fibonacci Series: " + num2);
