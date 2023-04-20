let addToDoButton = document.getElementById("addContant");
let inputButton = document.getElementById("input-value");
let addContant = document.getElementById("toDoContant");


addToDoButton.addEventListener('click',()=>{
let createPara = document.createElement('p');
createPara.classList.add('toDoList');
createPara.innerText = inputButton.value;
addContant.appendChild(createPara);
inputButton.value ='';

createPara.addEventListener('click',()=>{
    createPara.style.textDecoration = 'line-through';
});

createPara.addEventListener('dblclick',()=>{
    addContant.removeChild(createPara);

});
});