// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з
// вашим об'єктом
// usersForm=[]
// let form = document.forms[0];
//
// form.onsubmit=function (ev) {
//     let name=this.name.value
//     let surname=this.surname.value
//     let age=this.age.value
//     usersForm.push({name,surname,age})
//     ev.preventDefault();
// }
// let btn=document.getElementById('but')
// btn.onclick=function (ev) {
//
//     for (const item of usersForm) {
//     let div=document.createElement('div');
//     div.innerText=(`name:${item.name},surname:${item.surname} ,age:${item.age}`)
//     document.body.append(div)
//     }
// }
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1

// let number=JSON.parse(localStorage.getItem('number')||0);
// let div=document.createElement('div');
// div.innerText=`${number}`
// document.body.append(div)
// window.onload=function () {
//     localStorage.setItem('number',JSON.stringify(number+1))
// }

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а
// побудувати дом структуру під кожну сессію



// let sessions = localStorage.getItem('sessions');
// let data=sessions?JSON.parse(sessions):[]
//     data.push(new Date())
// localStorage.setItem('sessions',JSON.stringify(data))




// let div = document.createElement('div');
// let nowDATA=new Date().getDate()
// let nowTime=new Date().getTime()
// let btn = document.createElement('button');
// btn.innerText = 'session';
// btn.onclick = function () {
//     sessions.push(nowDATA,nowTime);
//     localStorage.setItem('session', JSON.stringify(sessions))
// };
// div.appendChild(btn);
// document.body.append(div)

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let mas=[]
for (let i = 0; i < 100; i++) {
    mas.push({number:i})
}
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let storinka=1
let limit=10
let scrol=(storinka,limit)=>{
    let start=(storinka-1)*limit;
    let end=storinka*limit;
    let array=[]
    for (let i=start;i<end;i++){
        let item=mas[i];
        let div=document.createElement('div')
        div.innerText=`number: ${item.number.value}`
        array.push(item)
    }
    document.body.append(array)
}

scrol(storinka, limit);
prev.addEventListener('click', () => scrol(storinka -= 1, limit));
next.addEventListener('click', () => scrol(storinka += 1, limit));



//
// // console.log(mas);
// let prev=document.getElementById('prev')
// let next=document.getElementById('next')
//
// let p=document.createElement('p')
//
//
//
// prev.addEventListener('click', function (){
//     for (let i = 0; i < 10; i++) {
//         p.innerText=`${mas[i]}`
//     }
//     document.body.append(p)
// })
//
// next.addEventListener('click', function () {
//     for (let i = 10; i < 20; i++) {
//         p.innerText=`${mas[i]}`
//     }
//     document.body.append(p)
// })

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".
// let button=document.getElementById('textButton')
//
// let div=document.getElementById('text')
//
// button.onclick=function () {
//     if (div) {
//         div.remove()
//     }
// }
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let f1 = document.f1;
// // let userAge;
// let p=document.createElement('p')
// f1.onsubmit=function (ev) {
//     ev.preventDefault();
//     if (this.age.value<18){p.innerText=`Тобі немає 18`;}
//     else p.innerText=`Тобі є 18`;
//     document.body.append(p)
// }




// let button=document.getElementById("butt");
// button.onclick=function (ev) {
//     if (userAge<18){
//         // ev.preventDefault();
//         p.innerText=`Тобі немає 18`;
//         document.body.append(p)
//     }else if (userAge>=18) {
//         p.innerText=`Тобі є 18`;
//         document.body.append(p)
//     }
// }

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let table=document.createElement('table')
// table.classList.add('tableJS')
// let form=document.tableForm
// form.onsubmit= function(e){
//
//     e.preventDefault()
//     let row=Number(this.roww.value);
//     let collum=Number(this.collum.value);
//     let content=this.textTable.value;
//     for (let i=0;i<row;i++){
//         let tr=document.createElement('tr')
//         for (let i=0;i<collum;i++){
//             let td=document.createElement('td')
//             td.innerText=content;
//             tr.append(td)
//         }
//         table.append(tr)
//     }
//     document.body.append(table)
// }

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині
// якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
// let div=document.createElement('div')
// let money=Number(localStorage.getItem('grn'))||100;
// let time=new Date().getTime()
// let last=Number(localStorage.getItem('lastDate'))||time;
// if (last-time<100){
//     money+=10;
//     div.innerText=`${money} grn`
//     localStorage.setItem('grn',money.toString())
// }
// localStorage.setItem('lastDate',last.toString())
// document.body.append(div)

