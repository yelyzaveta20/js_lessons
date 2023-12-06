// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let length1=(text)=>{
    for (const textElement of text) {
        console.log(textElement.length)
    }
}
length1(['hello world', 'lorem ipsum', 'javascript is cool'])
console.log("------------------------")
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let up=(text)=>{
    for (const textElement of text) {
        console.log(textElement.toUpperCase());
    }
}
up(['hello world', 'lorem ipsum', 'javascript is cool'])
console.log("------------------------")
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let down=(text)=>{
    for (const textElement of text) {
        console.log(textElement.toLowerCase());
    }
}
down(['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'])
console.log("------------------------")
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());
console.log("------------------------")
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
let stringToarray=(str)=>{
    return str.split(' ');
}
console.log(stringToarray(str1));
console.log("------------------------")
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в
// масиві на стрінгові.
masNum=[10,8,-7,55,987,-1011,0,1050,0];
let masFoo=(mas)=> mas.map(array => array.toString());
console.log(masFoo(masNum));
console.log("------------------------")
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого
// до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];
let sortNums=(mas,direction)=>{
    if (direction==='ascending'){
        mas.sort((mas1,mas2)=>mas1-mas2);
        return mas
    }else {
        mas.sort((mas1,mas2)=>mas2-mas1);
        return mas
    }
}
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
console.log("------------------------")
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let sort2 =coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration)
console.log(sort2);
console.log("------------------------")
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let  filtr =coursesAndDurationArray.filter((item)=>item.monthDuration>5)
console.log(filtr);
console.log("------------------------")
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map=coursesAndDurationArray.map((courses,index)=>{
    return {
        id: index, ...courses
    }
})
console.log(map);
console.log("------------------------")
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards=[
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
]
// - знайти піковий туз

let spadeAce=(card)=>{
    for (const cardElement of card) {
        if (cardElement.cardSuit==='spade' && cardElement.value==='ace' && cardElement.color==='black'){
            return cardElement
        }
    }
}
console.log(spadeAce(cards));
console.log("------------------------")
// - всі шістки
 for (const cardElement of cards) {
     if (cardElement.value==='6'){
            console.log(cardElement)
        }
    }
console.log("------------------------")
// - всі червоні карти
for (const cardElement of cards) {
    if (cardElement.color==='red'){
        console.log(cardElement)
    }
}
console.log("------------------------")
// - всі буби
for (const cardElement of cards) {
    if (cardElement.cardSuit==='diamond'){
        console.log(cardElement)
    }
}
console.log("------------------------")
// - всі трефи від 9 та більше
//
for (const cardElement of cards) {
    if (cardElement.cardSuit==='clubs'){
        if (cardElement.value==='9'||cardElement.value==='10'
            ||cardElement.value==='jack' ||cardElement.value==='queen' ||cardElement.value==='king'
            ||cardElement.value==='ace'){
            console.log(cardElement)
        }

    }
}
console.log("------------------------")
// =========================

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let sortCard=cards.reduce((accumulator,card)=>{
    if (card.cardSuit==='spade'){
        accumulator[0].push(card)
    }else if (card.cardSuit==='diamond'){
        accumulator[1].push(card)
    }else if (card.cardSuit==='heart'){
        accumulator[2].push(card)
    }else if (card.cardSuit==='clubs'){
        accumulator[3].push(card)
    }
    return accumulator
},[[],[],[],[]])
console.log(sortCard);



console.log("------------------------")
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
for (const coursesArrayElement of coursesArray) {
    for (const item of coursesArrayElement.modules) {
        if (item==='sass'){
            console.log(coursesArrayElement)
        }
    }
}
console.log("------------------------")
// --написати пошук всіх об'єктів, в який в modules є docker
for (const coursesArrayElement of coursesArray) {
    for (const item of coursesArrayElement.modules) {
        if (item==='docker'){
            console.log(coursesArrayElement)
        }
    }
}