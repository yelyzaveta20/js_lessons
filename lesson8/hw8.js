// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let mas=[];
// mas.push(new User(1,"Mira","Kotova","kotova@gmail.com","+380950284614"));
// mas.push(new User(2,"Dima","Mokorov","Mokorov@gmail.com","+380953463464"));
// mas.push(new User(3,"Slava","Simonov","Simonov@gmail.com","+3809743254"));
// mas.push(new User(4,"David","Popov","Popov@gmail.com","+380955474652"));
// mas.push(new User(5,"Dasha","Krotov","Krotov@gmail.com","+380968755"));
// mas.push(new User(6,"Kira","Grobov","Grobov@gmail.com","+38054232423"));
// mas.push(new User(7,"Roma","Dromov","Dromov@gmail.com","+380950284614"));
// mas.push(new User(8,"Kola","Trosov","Trosov@gmail.com","+38093453473"));
// mas.push(new User(9,"Slava","Ivanov","Ivanov@gmail.com","+3809473524"));
// mas.push(new User(10,"Liza","Petrov","Petrov@gmail.com","+38093623523"));

// for (let i=0;i<10;i++){
//     mas.push(user)
// }
// console.log(mas);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// for (const item of mas) {
//     if (item.id%2===0){
//         parni.push(item);
//     }
// }
// let arr=[]
// let filter=mas.filter((filtered)=>{
//     if (filtered.id%2===0){
//         arr.push(filtered)
//     }
// })
// console.log(arr);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort=mas.sort((a,b)=>a.id-b.id);
// console.log(sort);
// let sort2=arr.sort((a,b)=>a.id-b.id);
// console.log(sort2);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
//         this.order=order;
//     }
// }
// let masClient=[];
// masClient.push(new Client(1,"Mira","Kotova","kotova@gmail.com","+380950284614",22));
// masClient.push(new Client(2,"Dima","Mokorov","Mokorov@gmail.com","+380953463464",10));
// masClient.push(new Client(3,"Slava","Simonov","Simonov@gmail.com","+3809743254",17));
// masClient.push(new Client(4,"David","Popov","Popov@gmail.com","+380955474652",3));
// masClient.push(new Client(5,"Dasha","Krotov","Krotov@gmail.com","+380968755",12));
// masClient.push(new Client(6,"Kira","Grobov","Grobov@gmail.com","+38054232423",87));
// masClient.push(new Client(7,"Roma","Dromov","Dromov@gmail.com","+380950284614",1));
// masClient.push(new Client(8,"Kola","Trosov","Trosov@gmail.com","+38093453473",23));
// masClient.push(new Client(9,"Slava","Ivanov","Ivanov@gmail.com","+3809473524",22));
// masClient.push(new Client(10,"Liza","Petrov","Petrov@gmail.com","+38093623523",18));
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort=masClient.sort((a,b)=>a.order-b.order)
// console.log(sort);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car(model,manufacturer,year,maxSpeed,engineDisplacement,driver) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineDisplacement = engineDisplacement;
//     this.driver=driver;
//
//
//     function drive() {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//
//     drive()
//
//     function info() {
//         console.log(`Model-${model}`,
//             `Manufacturer-${manufacturer}`,
//             `Year-${year}`,
//             `MaxSpeed-${maxSpeed}`,
//             `EngineDisplacement-${engineDisplacement}`)
//     }
//
//     info()
//
//     function increaseMaxSpeed(newSpeed) {
//         maxSpeed = newSpeed;
//         console.log(maxSpeed);
//     }
//
//     increaseMaxSpeed(200)
//     function changeYear (newValue){
//         year=newValue;
//         console.log(year)
//     }
//     changeYear(2019)
//
//     function addDriver (driver){
//         console.log(driver)
//     }
//     addDriver(driver)
//
// }
// let car = new Car("Cherokee", "Jeep", 2018, 210, 2.4,{name:"Max",age:34})
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//      constructor(model,manufacturer,year,maxSpeed,engineDisplacement){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineDisplacement = engineDisplacement;}
//
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//
//
//     info() {
//         console.log(`Model-${this.model}`,
//             `Manufacturer-${this.manufacturer}`,
//             `Year-${this.year}`,
//             `MaxSpeed-${this.maxSpeed}`,
//             `EngineDisplacement-${this.engineDisplacement}`)
//     };
//
//
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(this.maxSpeed);
//     };
//
//
//      changeYear (newValue){
//          this.year=newValue;
//         console.log(this.year)
//     }
//
//
//
//     addDriver (driver){
//         console.log(driver)
//     }
//
//
// }
// let car = new Car("Cherokee", "Jeep", 2018, 210, 2.4,)
// car.increaseMaxSpeed(300)
// car.changeYear(2019)
// car.addDriver({name:"Max",age:34})
// console.log(car);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name,age,sizeLeg) {
        this.name=name;
        this.age=age;
        this.sizeLeg=sizeLeg;
    }
}
let masCinderella=[];
masCinderella.push(new Cinderella("Izabella",19,36));
masCinderella.push(new Cinderella("Rinata",20,37));
masCinderella.push(new Cinderella("Kira",32,38));
masCinderella.push(new Cinderella("Nika",16,40));
masCinderella.push(new Cinderella("Monika",20,42));
masCinderella.push(new Cinderella("Sofia",21,41));
masCinderella.push(new Cinderella("Marysa",15,35));
masCinderella.push(new Cinderella("Klavdia",29,39));
masCinderella.push(new Cinderella("Faina",22,33));
masCinderella.push(new Cinderella("Riana",23,34));

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, shoe) {
        this.name=name;
        this.age=age;
        this.shoe=shoe;
    }
}
let prince=new Prince("Karl",25,35);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of masCinderella) {
    if (prince.shoe===cinderella.sizeLeg){
        console.log(`${prince.name} + ${cinderella.name} = LOVE`)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку