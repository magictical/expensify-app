// Old school style function
const functionName = function(x) {
    return x * x  
};

console.log(functionName(4));


const es6RagularFunction = (x) => {
    return x * x;
};

console.log(es6RagularFunction(5));

const es6Function = (x) =>  x * x;

console.log(es6Function(6));

// important point in arrow function!!

// arguments object - no longer bound with arrow funcitons

//es5 syntax
const add = function(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(1,2,5));

//es 6 arrow function
const es6add = (a, b) => {
    // argument로 접근 불가 - 기존 function의 기능사용할 수 없다 익명으로 사용되기 떄문 정의되지 않았다고 나옴
    // console.log(argument)
    return a+b
}
console.log("es6 : " + es6add(2, 5));


// this keyword!

const user = {
    name: 'Ian',
    cities: ['Busan', 'Sahagu', 'Dangridong'],

    printPlacesLive: function() {
        console.log(this.name); 
        console.log(this.cities);
        //es5로 익명의 함수를 쓰면 this 참조가 불가
        //es6 arrow 함수를 쓰면 this 참조 가능
        //하지만 부모가 익명이면 참조 불가하다
        this.cities.forEach((city) => {
            console.log(this.name + ' ' + city);
        });
    }
};

console.log(user.printPlacesLive())



//Chanllenge !!
const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply: function() {
        return this.numbers.map((iteratedNum) => 
            this.multiplyBy * iteratedNum
        );
    }
    
}

console.log(multiplier.multiply());