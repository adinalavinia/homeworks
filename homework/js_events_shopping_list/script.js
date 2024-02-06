const button = document.querySelector('.button');
const itemsList = document.querySelector('.items-list');
button.addEventListener('click', () => {
    let element = document.createElement('p');
    element.innerHTML = document.getElementById('textItem').value;
    itemsList.appendChild(element);
    

    // let check = document.createElement('input');
    // check.setAttribute('type', 'checkbox');
    // console.log(check);

    // check.innerHTML = document.getElementById('textItem').value;

    // check.appendChild(element);

    // let deleteBtn = document.createElement('span');
    // deleteBtn.innerHTML = document.getElementsByTagName('p');
    // itemsList.appendChild(deleteBtn);

    





    document.getElementById('textItem').value = '';
    
    element.addEventListener('click', () => {
        element.style.textDecoration = 'line-through';
    })

    // let span = document.getElementById('span');
    // if(element.style.display = 'block'){
    //     span.style.display = 'block';
    // }


    // if(itemsList.value == 10){
    //     button.disable = true;
    // }
    
    let span = document.getElementById('span');
    for(let i = 0; i < itemsList.length; i++){
        itemsList[i] + span.style.display;

        // if(itemsList[i].style.display = 'block'){
        //     span.style.display = 'block';
        //     span.style.position = 'absolute';
        // }

    }

})



// for(let i = 0; i < itemsList.length; i++){
//     let span = document.createElement('SPAN');
//     let txt = document.createTextNode('\u00D7');
//     span.className = 'close';
//     span.appendChild(txt);
//     itemsList[i].appendChild(span);
// }
