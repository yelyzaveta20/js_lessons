// console.log('hello')
// setTimeout(()=>{
//     console.log('2 seconds')
// },2000)

// setTimeout(()=>{
//     console.log('1');
//     setTimeout(()=>{
//         console.log('2');
//         setTimeout(()=>{
//             console.log('3')
//         },3000)
//     },2000)
// },1000)

// setTimeout(()=>{
//     let x=1;
//     setTimeout(()=>{
//         x++;
//         console.log(x)
//     },1000)
// },1000)

// new Promise((resolve) => {
//     let x=1;
//     setTimeout(()=>{
//         x++;
//         console.log(x);
//         resolve(x)
//     },1000)
// })
// .then((xxx)=>{
//     new Promise(resolve => {
//         setTimeout(() => {
//             xxx++;
//             console.log(xxx);
//             resolve(xxx)
//
//         }, 1000)
//     }).then(r  =>{})
// })

// new Promise((resolve, reject) => {
//     let number=3
//     if (number===3){
//         reject('pomilka')
//     }
//     setTimeout(()=>{
//         number++;
//         console.log(number);
//         resolve(number)
//     },1000)
// })
// .then((xxx)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             xxx++;
//             console.log(xxx);
//             resolve(xxx)
//         },1000)
//     }).then(r  =>{})
// })
// .catch((pom)=>{
//     console.log(pom)
// })


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => console.log(value))

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => {
//         for (const item of value) {
//             let div=document.createElement('div');
//             div.innerText=item.id+ '. '+item.name;
//             document.body.append(div)
//         }
//         return fetch('https://jsonplaceholder.typicode.com/posts')
//     })
//     .then(value => value.json())
//     .then(value => {
//         for (const item of value) {
//             let div=document.createElement('div');
//             div.innerText=item.userId+ '. '+item.title;
//             document.body.append(div)
//         }
//     })

// Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()),
//     fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json())
// ])
//     .then(value => console.log(value))

// async function foo() {
//     let posts=await fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(value => value.json())
//     await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
//     console.log(posts)
// }
// foo().then(r => {})

