// Creati un algoritm care sa calculeze impozitul auto pentru capacitatea cilindrica introdusa prin prompt de utilizator. Valoarea finala va fi afisata fie printr-un alert, fie la consola.

// Pentru formula, accesati acest link: https://impozitauto.ro/.
// Hint: Math.floor

// BONUS: Calcularea impozitului pentru alte tipuri de vehicule. Tipul vehiculului se va introduce printr-un alt prompt (auto, motocicleta, camion, etc)


let city = prompt("Localitatea");
let capacity = prompt("Capacitate cilindrica");
let typeVehicle = prompt("Tip vehicul");

if(capacity <= 1399 && typeVehicle === "auto"){
    alert("Impozit = 20 lei");
} else if(capacity >= 1400 && typeVehicle === "auto"){
    alert("Impozit = 100 lei");
} alert("Va rugam sa introduceti date valide!")

if(capacity <= 1399 && typeVehicle === "motocicleta"){
    alert("Impozit = 30 lei");
} else if(capacity >= 1400 && typeVehicle === "motocicleta"){
    alert("Impozit = 50 lei");
} alert("Va rugam sa introduceti date valide!")

if(capacity <= 2999 && typeVehicle === "camion"){
    alert("Impozit = 200 lei");
} else if(capacity >= 3000 && typeVehicle === "camion"){
    alert("Impozit = 1000 lei");
} alert("Va rugam sa introduceti date valide!")