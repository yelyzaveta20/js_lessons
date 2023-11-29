// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sRectangle(a,b) {
    return a*b
}
console.log(sRectangle(3,5))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sKolo(r) {
    return Math.PI*r*r
}
console.log(sKolo(3))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCilindru(h,r) {
    return 2*Math.PI*r*(h+r)
}
console.log(sCilindru(2,4))
// - створити функцію яка приймає масив та виводить кожен його елемент
users=['Karl','Nolan','Kevin']
function arrayUsers(name) {
    for (const user of users) {
        console.log(user)
    }
}
arrayUsers(users)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// маю ще один варіант
// function funParagraf(text) {
//     document.write(`<p>Lorem items</p>`)
// }
// funParagraf()

function funParagraf(text) {
    document.write(`<p>${text}</p>`)
}
funParagraf('Lorem items 356')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listUl(TextLi) {
    document.write(`<ul>`);
    document.write(`<li>${TextLi}</li>`);
    document.write(`<li>${TextLi}</li>`);
    document.write(`<li>${TextLi}</li>`);
    document.write(`</ul>`);
}
listUl('sdkhfksdj')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listUlArray(text,number) {
    document.write(`<ul>`)
    for (let i=0;i<number;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
listUlArray("Hello world", 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements=[27,'khkhf',true]
function masList(item) {
    document.write(`<ul>`)
    for (const itemElement of item) {
        document.write(`<li>${itemElement}</li>`)
    }
    document.write(`</ul>`)
}
masList(elements)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
userMas=[
    {
        id:1,
        name:'Lina',
        age:34
    },
    {
        id:2,
        name:'Dima',
        age:20
    },

    {
        id:3,
        name:'Nazar',
        age:27
    }
]
function userData(arguments) {
    for (const argument of arguments) {
        document.write(`<div>
${argument.id} - ${argument.name} - ${argument.age}
</div>`)
    }
}
userData(userMas)
// - створити функцію яка повертає найменьше число з масиву
arrayNumber=[22,64,7,4,7,3,97,34];
function min(numberarray) {
    let minarray=arrayNumber[0];
    for (let minimal of arrayNumber) {
        if (minarray>minimal){
            minarray=minimal
        }
    }
    return minarray
    }
console.log(min(arrayNumber))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
sum1=[2,4,2,1,3]
function sum(arr) {
    let sumNumber=0;
    for (const sum of sum1) {
        sumNumber = sumNumber +sum;
    }
    return sumNumber
}
console.log(sum(sum1))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
arraySwap1=[11,22,33,44]
function swap(arr,index1,index2){
    let index1array=0
        index1array=arraySwap1[index1]
        arraySwap1[index1]=arraySwap1[index2]
        arraySwap1[index2]=index1array
    return arraySwap1
}
console.log(swap(arraySwap1,0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
exchangeRate=[{currency:'USD',value:40},{currency:'EUR',value:42}]
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (let sumUAHElement of exchangeRate) {
        if (exchangeCurrency===sumUAHElement.currency){
            return sumUAH/sumUAHElement.value

        }else if (exchangeCurrency===sumUAHElement.currency){
            return sumUAH/sumUAHElement.value
        }
    }

}

console.log(exchange(10000,exchangeRate,'USD'))