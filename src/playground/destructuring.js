//
//Object desructuring
//

// const person = {
//     name: 'Ian',
//     age: 33,
//     location: {
//         city: 'Busan',
//         temp: 3
//     }
// };

// // // old syntax
// // const name = person.name;
// // const age = person.age;

// // es6 new syntax
// // 변수에 default값 설정도 가능
// // 설명 surname으로 변수 이름변경, Anonymous로 기본값 변경
// const { name: surname = 'Anonymous', age } = person;

// // //old syntax
// // const city = person.location.city;
// // const temp = person.location.temp;

// // Es6 new syntax
// // 변수의 이름 변경도 가능 ==> temp: temperature (temperature로 이름변경함)
// const { city, temp: temperature } = person.location;

// console.log(`${person.name} is ${person.age}`);
// console.log(surname + " is " + age)


// console.log(`${surname} lives in ${city} and it's ${temperature} Celsius`)


// const book = {
//     title: 'Harry Potter',
//     author: 'J.K Rolling',
//     publisher: {
//         name: 'someone'
//     }
// };

// const {author: publisherName = 'Self-published'} = book;

// // if true for author = J.K , if not Self-Published
// console.log(publisherName)


//
// Array desructuring
//

const address = ['1299 S Juniper Street', , 'Pennsylvania', '19147'];

// [, , state] 사용시 3번째만 사용하고 나머지 생략가능
// object와 달리 rename 불가 - [street: 'newSteet']] => x
// default 값은 할당가능 street = 'default street'
const [ , city ='my city'] = address;
console.log(`You are in ${city}.`);

const item = ['Coffee(hot)', '$2.00', '$2.50', '$3.00'];

const [orderName, small, medium, large] = item;

 console.log(`A medium ${orderName} costs ${medium}`)