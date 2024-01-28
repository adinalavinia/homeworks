
// verificati daca toate elementele unui array sunt numere pare folosind metoda every

function isEven(num) {
    return num % 2 === 0;
};

let myArray = [2, 3, 5, 56, 78, 12, 35, 22, 58, 90, 122, 45, 23, 82];

let value = myArray.every(isEven);
console.log(value);




// folosind forEach, afisati toate elementele unui array

myArray.forEach((element) => console.log(element));





// folosind reduce, adunati toate numerele dintr-un array 

let array = myArray.reduce((a, b) => a + b);
console.log(array);


