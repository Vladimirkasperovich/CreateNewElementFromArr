//Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица
/*let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr){
    let p = document.createElement('p');
    p.textContent = elem;
    
    parent.appendChild(p)

    p.addEventListener('click', function(){
        p.innerHTML = Number(p.innerHTML) + 1;
    })
}*/



//Дан ul:Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
/*let elem = document.querySelector('#elem');
let array = [1, 2, 3, 4, 5];

for (let arr of array){
    let li = document.createElement('li');
    li.textContent = arr;

    elem.appendChild(li)
}*/



//Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
/*let elem = document.querySelector('#elem');
let array = [1, 2, 3, 4, 5];

for (let arr of array){
    let li = document.createElement('li');
    li.textContent = arr;

    elem.appendChild(li);

    li.addEventListener('click', function(){
        alert(li.innerHTML);
    })
}*/



//Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
/*let parent = document.querySelector('#parent');
let elems = ['vova', 'champ', 'is', 'here'];

for (let elem of elems){
    let li = document.createElement('li');
    li.textContent = elem;

    parent.appendChild(li);

    li.addEventListener('click', function(){
        li.textContent += '!';
    })
}*/




//Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
let parent = document.querySelector('#parent');
let elems = [1, 2, 3, 4, 5];

for (let elem of elems){
    let li = document.createElement('li');
    li.textContent = elem;

    parent.appendChild(li);

    li.addEventListener('click', function(event){
       this.innerHTML += '!'
         
        
     
     
    })
    
}



//


