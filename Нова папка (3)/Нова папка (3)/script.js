let toggleVisibility = document.querySelector('.toggleVisibility')
   toggleVisibility.addEventListener('click', function() { // вішаємо обробник подій на кнопку
        let elements = [document.querySelector('.header'), document.querySelector('.paragraph')]; // створюэмо масив з двох елементів
        for (var i = 0; i < elements.length; i++) { // запускаємо цикл по довжині масиву
            if (elements[i].style.display === 'none') { // перевыряємо умови кожного елементу масиву
                elements[i].style.display = ''; 
            } else {
                elements[i].style.display = 'none'; 
            }
        }
    });
