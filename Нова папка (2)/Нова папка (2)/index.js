let createDiv = document.querySelector('.createDiv')
createDiv.addEventListener('click', function(){
    let newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    newDiv.style.width = "200px";
    newDiv.style.height = "100px";
    newDiv.style.transform = "rotate(20deg)";
    let container = document.querySelector(".container");
    container.appendChild(newDiv);

}) /* 1 сторінка */
    


let divElement = document.querySelector(".editableDiv");
divElement.addEventListener('click', function(){
    let newText = prompt("Введіть новий текст:");
    if (newText !== null && newText !== "") {
        divElement.textContent = newText;
    }
}
) /* 2 сторінка */






