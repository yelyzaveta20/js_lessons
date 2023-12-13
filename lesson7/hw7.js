// let obj = {
//     id: 1,
//     // foo: {
//     //     hash: '#451781tiwpslflsdfh',
//     //
//     // }
// }
// try {
//     console.log(obj.foo)
// }catch (e){
//    console.log(e)
// }

// let foo =(a,b)=>{
//     if (b===0 || a===0 ){
//         throw new Error('not true')
//     }
// }
//
// try {
//     foo(10,0)
// }catch (e){
//     console.error(e)
// }

// let obj={
//     id:3,
//     name:"roma"
// }
// if (obj.wife){
//     console.log(obj.wife.name);
// }
// console.log(obj.wife?.name);

//
// let foo=(id,name,age,greeting)=>{
//     return{
//         id,
//         name,
//         age,
//         greeting,
//         fooooo(){
//             console.log('come');
//         }
//     }
// }
// let arr=foo(2,"tolik",34,()=>{
//     console.log('hello');
// })
// console.log(arr);
// arr.greeting();
// arr.fooooo();

// let obj=({name:userName,age})=>{
//     // let{name,age}=item;
//     console.log(userName,age);
// }
// obj({id: 1, name: 'kokos', age: 31});
// obj({id: 2, name: 'abrikos', age: 31, status: true});


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let someUsers=[users[0], ,users[1],users[2],users[3]];
// console.log(someUsers);


// let user = {
//     id: 1,
//     name: 'vasya',
//     age: 31
// }
// let userCopy={...user,company:'Nix'};
// console.log(userCopy);
// console.log(userCopy === user);


// let user = {
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     wife: {name: 'anna'}
//
// }

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let map = users.map((user) => {
//
//     return {...user};
// });
// console.log(map);
// console.log(map === users);


// let mappedUsers = users.map((user, index) => {
//     let stringify = JSON.stringify(user);
//     let userObj = JSON.parse(stringify);
//     // userObj.id = index + 1;
//     return userObj;
// });
// console.log(mappedUsers);

// users.map(({name, age}, index) => name, age);

// let val={id:154678};
// let string=JSON.stringify(val);
// console.log(string);
// let normal=JSON.parse(string);
// console.log(normal);

// let clone={id:6789};
// let clon=structuredClone(clone);
// console.log(clon);