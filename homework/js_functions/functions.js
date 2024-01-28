// Creati o functie care sa calculeze venitul total anual in lei al unei persoane prin extragerea numerelor din textele de mai jos. 
// Functia trebuie sa intoarca (return) o propozitie de forma: “Venitul total anual al lui NUME este de VALOARE lei”.

const firstSentence = 'Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.';

// computeIncome(firstSentence); Venitul anual al lui Ion este de 88000 lei.  60 000 + 10 000 + 18 000
// computeIncome(secondSentence); Venitul anual al lui Andrei este de 124790,4 lei.

function income1(){
    const firstSentenceArray = firstSentence.split(' ');
    // console.log(firstSentenceArray);

    let sum = 0;
    
    for(let i = 0; i < firstSentenceArray.length; i++) {
        if(firstSentenceArray[i] == 'lei/luna'){
            let annualIncome = firstSentenceArray[i - 1] * 12;
            sum += parseInt(annualIncome);
        } 
        
        if(firstSentenceArray[i] == 'lei/an'){
            let bonus = firstSentenceArray[i - 1];
            sum += parseInt(bonus);
        }
    }
    console.log('Venitul anual al lui Ion este de ' + sum + ' lei');
}

income1();




const secondSentence = 'Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei si mai castiga supimentar aproximativ 500 usd/luna din freelancing.';

function income2(){

    const secondSentenceArray = secondSentence.split(' ');
    // console.log(secondSentenceArray);

    let sum2 = 0;

    for(let i = 0; i < secondSentenceArray.length; i++) {
        if(secondSentenceArray[i] == 'euro/luna,'){
            let annualIncome2 = (secondSentenceArray[i - 1] * 4.95) * 12;
            sum2 += parseInt(annualIncome2);
        }

        if(secondSentenceArray[i] == 'lei'){
            let annualBonus = secondSentenceArray[i - 1];
            sum2 += parseInt(annualBonus);
        }
        
        if(secondSentenceArray[i] == 'usd/luna'){
            let bonus2 = (secondSentenceArray[i - 1] * 4.7) * 12;
            sum2 += parseInt(bonus2);
        }
    }

    console.log('Venitul anual al lui Andrei este de ' + sum2 + ' lei');

}

income2();