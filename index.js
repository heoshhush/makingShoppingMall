// load from data.json

function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}


// items를 HTML string으로 바꾸어 화면에 표시합니다.

function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
<li class="item">
            <img src="${item.image}" alt="${item.type}" class="item_thumbnail"/>
            <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
`;
}


// 버튼을 통해 item들을 분류할 수 있도록 이벤트를 추가합니다.

function setEventListener(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', (event) => onButtonClick(event,items));
}


function onButtonClick(event,items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    
    if(key == null || value == null){
        return;
    } else {
        displayItems(items.filter(item => item[key] === value));
    }
}

// Run !

loadItems()
.then(items => {
    displayItems(items);
    setEventListener(items);
})
