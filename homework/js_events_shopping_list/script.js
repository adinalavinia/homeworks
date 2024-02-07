const button = document.querySelector('.button');
const itemsList = document.querySelector('.items-list');

button.addEventListener('click', createElementList);

function createElementList() {


    let li = document.createElement('li');
    li.innerHTML = document.getElementById('textItem').value;
    document.getElementById('textItem').value = '';

    let input = document.createElement('input');
    input.type = 'checkbox';

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
    deleteBtn.style.backgroundColor = 'transparent';
    deleteBtn.style.border = 'none';
    deleteBtn.style.cursor = 'pointer';

    li.appendChild(input);
    li.appendChild(deleteBtn);
    itemsList.appendChild(li);
    
    
    deleteBtn.addEventListener('click', removeItem);
    
    function removeItem(e){
        const item = e.target.value;
        li.remove(item);
    }
      
}




