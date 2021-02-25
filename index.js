// Load all items from data.json

function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// display Items by constructinng new li 

function displayItems(item){
    const img = document.createElement('img');
    img.setAttribute('class','thumbnail');
    img.setAttribute('src', item.image)
    const span = document.createElement('span');
    span.innerText = `${item.color}, ${item.size} size`;
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-type', item.type);
    li.setAttribute('data-color', item.color);
    li.append(img);
    li.append(span);
    return li;
}


// flitering by Button

function onClickButton(event,elements){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    
    elements.map(item => {
        if(item.dataset[key] === value){
            item.classList.remove('invisible');
        } else {
            item.classList.add('invisible');
        }
    })
    
}


// run 'loadItems' and filtering

loadItems()
.then(items => {
    const elements = items.map(displayItems);
    const container = document.querySelector('.items');
    container.append(...elements);
    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', event => onClickButton(event,elements))
    const logo = document.querySelector('.logo')
    logo.addEventListener('click', () => elements.map(item => item.classList.remove('invisible')))
})
