// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let foo =(a,b)=>console.log(a+b)
foo(4,8)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let kolo = (r)=> console.log(Math.PI * r * r)
kolo(10);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let zelindr=(h,r)=> console.log(2 * Math.PI + r * (h + r))
zelindr(3,5)
// - створити функцію яка приймає масив та виводить кожен його елемент
let mas=[11,34,"come", true];
let masiv = (number)=> {
    for (const numberElement of number) {
        console.log(numberElement)
    }
}
masiv(mas)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let fun=(argument)=>{
    document.write(`<p>${argument}</p>`)
}
fun("Run time")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let litrio=(text)=>{
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}
litrio("No coments")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let funlitrio=(text, number)=>{
    document.write(`<ul>`)
    for (let i=0; i<number;i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
funlitrio("Sunrise", 4)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr1=[11,"list",false]
let funARR=(mas)=>{
    document.write(`<ul>`)
    for (const textElement of mas) {
        document.write(`<li>${textElement}</li>`)
    }
    document.write(`</ul>`)
}
funARR(arr1)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
let user=[
    {
        id:1,
        name:'Kola',
        age:34
    } ,
    {
        id:2,
        name:'Dima',
        age:20
    } ,
    {
        id:3,
        name:'Sveta',
        age:52
    }
]
let userFun=(arguments)=>{
    for (const argument of arguments) {
        document.write(`id:${argument.id} - name:${argument.name} - age:${argument.age}`)
        document.write(`<br>`)
    }
}
userFun(user)
// Для кожного об'єкту окремий блок.
let masNumber=[11,75,22,74,-12,34,6,0]
// - створити функцію яка повертає найменьше число з масиву
let minFoo=(mas)=>{
    let min=mas[0];
    for (const item of mas) {
        if (item<min){
            min=item;
        }
    }
return min
}
console.log(minFoo(masNumber));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sum=(arr)=>{
    let sum=0;
    for (const arrElement of arr) {
        sum +=arrElement;
    }
    return sum
}
console.log(sum([1, 2, 10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap=(arr,index1,index2)=>{
    let index= arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=index
    return arr
}
console.log(swap([11,22,33,44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for (const currency1 of currencyValues) {
        if (currency1.currency===exchangeCurrency){
            return sumUAH/currency1.value
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));