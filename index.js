const category = document.querySelectorAll('.category');
const items = document.querySelectorAll('.item');
const tSelector = document.querySelector('#tSelector');
const pSelector = document.querySelector('#pSelector');
const sSelector = document.querySelector('#sSelector');
const blueSelector = document.querySelector('#blueSelector');
const pinkSelector = document.querySelector('#pinkSelector');
const yellowSelector = document.querySelector('#yellowSelector');



tSelector.addEventListener('click',function(e){
    e.stopPropagation();
    items.forEach(function(elem){
        elem.classList.remove('hide');
        if(!elem.classList.contains('t')){
            elem.classList.add('hide');
        }
    }
)});
    

pSelector.addEventListener('click',function(e){
    e.stopPropagation();
    items.forEach(function(elem){
        elem.classList.remove('hide');
        if(!elem.classList.contains('p')){
            elem.classList.add('hide');
        }
    }
)});
    


sSelector.addEventListener('click',function(e){
    e.stopPropagation();
    items.forEach(function(elem){
        elem.classList.remove('hide');
        if(!elem.classList.contains('s')){
            elem.classList.add('hide');
        }
    }
)});
    

blueSelector.addEventListener('click',function(e){
    e.stopPropagation();
    items.forEach(function(elem){
        elem.classList.remove('hide');
        if(!elem.classList.contains('blue')){
            elem.classList.add('hide');
        }
    }
)});
    

pinkSelector.addEventListener('click',function(e){
    e.stopPropagation();
    items.forEach(function(elem){
        elem.classList.remove('hide');
        if(!elem.classList.contains('pink')){
            elem.classList.add('hide');
        }
    }
)});
    


yellowSelector.addEventListener('click',function(e){
    e.stopPropagation();
    items.forEach(function(elem){
        elem.classList.remove('hide');
        if(!elem.classList.contains('yellow')){
            elem.classList.add('hide');
        }
    }
)});
    
