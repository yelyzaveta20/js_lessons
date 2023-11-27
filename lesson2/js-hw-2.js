// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['anna', 23, [], {}, true, false, 'abcd', 76, [], {}];
console.log(arr)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: "Kric",
    pageCount: 12,
    genre: "fantacy"
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори"
// - являється масивом. Кожен автор має поля name та age.

let book1 ={
    title: "Frend Dog",
    pageCount: 120,
    genre: "animals",
    authors:[
        name = "Mia",
        age = 18
    ]
}
let book2 ={
    title: "Biblia",
    pageCount: 879,
    genre: "none",
    authors:[
        name = "God",
        age = 27
    ]
}

let book3 ={
    title: "Sea",
    pageCount: 67,
    genre: "national",
    authors:[
        name = "Kavin",
        age = 41
    ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
console.log("-----------------------------")
let mas=[
    user={
        name: "Kris",
        username:"longhear",
        password:"hgdgfcvb"
    },
    user={
        name: "Mia",
        username:"Mia45",
        password:"uytfdx"
    },
    user={
        name: "Lia",
        username:"tooLia",
        password:"mnbv"
    },
    user={
        name: "Mark",
        username:"Mark6ed",
        password:"hgdgfcvb"
    },
    user={
        name: "Liam",
        username:"Liamtools",
        password:"okjhgrewasdfgh"
    },
    user={
        name: "Yana",
        username:"Yanok",
        password:"poiuytredfghnjm"
    },
    user={
        name: "Lyda",
        username:"lyda2000",
        password:"fxsdess"
    },
    user={
        name: "Max",
        username:"BigMax",
        password:"oiuytfdc"
    },
    user={
        name: "David",
        username:"floverDavid",
        password:"oiuyfdcvbnm,mngfd"
    },
    user={
        name: "Pavel",
        username:"hostpavel",
        password:"hngfbsfdhd"
    }
]
console.log(mas[0].password);
console.log(mas[1].password);
console.log(mas[2].password);
console.log(mas[3].password);
console.log(mas[4].password);
console.log(mas[5].password);
console.log(mas[6].password);
console.log(mas[7].password);
console.log(mas[8].password);
console.log(mas[9].password);
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x1=10;
if(x1!==0){
    console.log("Вірно")
}
else{
    console.log("Невірно")
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log("----------------------------")
 let time=50;
if (time >= 0 && time <= 15){
    console.log("першa частинa години")
}else if(time >= 16 && time <= 30){
    console.log("другa частинa години")
}else if(time >= 31 && time <= 45){
    console.log("третя частинa години")
}else if(time >= 46 && time <= 59){
    console.log("четвертa частинa години")
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).
console.log("----------------------------")

let day=20;
if (day >= 1 && day <= 10){
    console.log("першa декадa місяця")
}else if(day >= 11 && day <= 20){
    console.log("другa декадa місяця")
}else if(day >= 21 && day <= 31){
    console.log("третя декадa місяця")
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і
// на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву
// дня англійською).
console.log("----------------------------")
let week=+prompt("Введіть порядковий номер тижня");
switch (week){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Write the number of the week from 1 to 7");
        break;

}



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
console.log("----------------------------")

let num1=+prompt("Введіть число 1");
let num2=+prompt("Введіть число 2");
if (num1>num2){
    console.log(num1)
} else if (num1<num2){
    console.log(num2)
}
else if (num1===num2){
    console.log(num1)
}
else{
    console.log("Write number!!!!!!!")
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
console.log("----------------------------")

let x = 0;
if (x==null||""||0||undefined){
    x ="default";
    console.log(x)
}else {
    console.log(x)
}

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість
//     довша за 5 місяців вивести в консоль "Супер".
console.log("----------------------------")

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log("Супер")
}