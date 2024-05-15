let divElement = document.querySelector(".editableDiv");
divElement.addEventListener('click', function(){
    let newText = prompt("Введіть новий текст:");
    if (newText !== null && newText !== "") {
        divElement.textContent = newText;
    }
}
) /* 2 сторінка */