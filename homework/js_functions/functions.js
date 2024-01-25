// Creati o functie care sa calculeze venitul total anual in lei al unei persoane prin extragerea numerelor din textele de mai jos. 
// Functia trebuie sa intoarca (return) o propozitie de forma: “Venitul total anual al lui NUME este de VALOARE lei”.

const firstSentence = 'Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.';
const secondSentence = 'Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei si mai castiga supimentar aproximativ 500 usd/luna din freelancing.';

// computeIncome(firstSentence); Venitul anual al lui Ion este de 88000 lei.
// computeIncome(secondSentence); Venitul anual al lui Andrei este de 124790,4 lei.

function income(){
    const firstSentenceArray = firstSentence.split(' ');
    console.log(firstSentenceArray);

    const secondSentenceArray = secondSentence.split(' ');
    console.log(secondSentenceArray);

    for(let i = 0; i < firstSentenceArray.length; i++) {
        if(firstSentenceArray[i] == 'lei/luna'){
            let anualIncome = firstSentenceArray[i - 1] * 12;
            console.log(anualIncome);
        }
        
        if(firstSentenceArray[i] == 'lei/an'){
            let bonus = firstSentenceArray[i - 1];
            console.log(bonus);
        }
        // console.log(`${anualIncome} + ${bonus}`)
    }

}

income();