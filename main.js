


// // push()

// let arr = [1, "amir", true];
// let arr2 = [1, 2, 3, 4];
// arr.push(8, 10, false);
// arr.push(10);
// arr2.push(5, 6, 7, 8, 9)
// console.log(arr);
// console.log(arr2);


// //unshift

// let arr = [1, "amir", true];
// let arr2 = [1, 2, 3, 4];
// arr.unshift(8, 10, false);
// arr.unshift(10);
// arr2.unshift(5, 6, 7, 8, 9)
// console.log(arr);
// console.log(arr2);



// //pop

// let arr = [1, "amir", true];
// let arr2 = [1, 2, 3, 4];
// arrnew = arr.pop();
// arr2.pop()
// console.log(arr);
// console.log(arr2);
// console.log(arrnew);



// //shift

// let arr = [1, "amir", true];
// let arr2 = [1, 2, 3, 4];
// arr.shift();
// arr2.shift()
// arr2.shift()
// console.log(arr);
// console.log(arr2);



// //slise

// let arr = [1, "amir", true, "ad"];
// let arr2 = [1, 2, 3, 4];
// arrnew = arr.slice(1, 4)
// arrnew2 = arr2.slice(2)
// console.log(arrnew);
// console.log(arrnew2);
// console.log(arr);



// // concat

// let arr = [1, "amir", true, "ad"];
// let arr2 = [1, 2, 3, 4];
// arrnew = arr.concat("14", 45)
// console.log(arrnew);
// console.log(arr2.concat(arr));



// //reverse

// let arr = [1, "amir", true, "ad"];
// let arr2 = [1, 2, 3, 4];
// arrnew = arr.reverse()
// console.log(arr2.reverse());
// console.log(arrnew);
// console.log(arr);



//indexOf

// let arr = [1, "amir", true, "ad"];
// let arr2 = [1, 2, 3, 4];
// arrnew = arr.indexOf("amir")
// console.log(arrnew);
// console.log(arr2.indexOf(3));



// //includes

// let arr = [1, "amir", true, "ad"];
// let arr2 = [1, 2, 3, 4];
// arrnew = arr.includes("amir")
// console.log(arrnew);
// console.log(arr.includes(2));
// console.log(arr2.includes(6));



// //splice

// let arr = [1, "amir", true, "ad"];
// let arr2 = [1, 2, 3, 4];

// arrnew = arr.splice(2, 2, "fuhg", 4 ,8)
// console.log(arrnew);
// console.log(arr2.splice(1,2));
// console.log(arr);



//arr caleback

// //forEach()

// let arr = [4, 1, 20, 15, 10]

// let result1 = arr.forEach(function(elem, index, arr) {
//     return elem;
// });
// console.log(result1);

// let result2 = arr.forEach(function(elem, index, arr) {
//     console.log(elem,index);
// });

// let result3 = arr.forEach(function(elem, index, arr) {
//     console.log((index%2 == 0)?elem*2:elem);
// });


// //map()

let arr = [4, 1, -20, 15, -10]

let result1 = arr.map(elem => elem * 2);
console.log(result1);

let result2 = arr.map(function(elem, index) {
    return (index%2 == 0)?elem*2:elem;
});
console.log(result2);

let result3 = arr.map(function(elem, index, arr) {
    console.log((elem < 0)?elem*(-1):elem);
});


// //find()

//  let arr = [4, 1, 20, 15, 10]

// let result1 = arr.find(elem => elem > 10);
// console.log(result1);

// let arr2 = [4, 1, 2, 3, 10]
// let result2 = arr2.find((elem, index) => elem%2 == 1)
// console.log(result2);

// let arr3 = [4, "vh", 2, "amir", 10]
// let result3 = arr3.find(function(elem, index, arr) {
//     if (isNaN(elem) == true) {
//         return index;
//     }
// });
// console.log(result3);



// //sort()

// let arr = [4, 1, 20, 5, 10]
// let arr2 = ["d", "c", "b", "a"]

// console.log(arr.sort());
// console.log(arr.sort((a, b) => a-b));
// console.log(arr2.sort());

// //filter()

// let arr = [4, 1, 20, 5, 10]
// let result1 = arr.filter(elem => elem >= 5);
// console.log(result1);

// let arr2 = [4, 1, 2, 3, 10]
// let result2 = arr2.filter((elem, index) => elem%2 == 1)
// console.log(result2);

// let arr3 = [4, "vh", 2, "amir", 10]
// let result3 = arr3.filter(function(elem, index, arr) {
//     if (isNaN(elem) == true) {
//         return index;
//     }
// });
// console.log(result3);

// //reduce()

// let arr = [4, 1, 20, 5, 10]

// let result1 = arr.reduce((a, b) => a+b)
// console.log(result1);

// let arr2 = [4, 1, 20, 0, 10]

// let result2 = arr2.reduce((a, b) => a*b)
// console.log(result2);

// let arr3 = [40, 1, 20, 5, 10]

// let result3 = arr3.reduce((a, b,) => a-b)
// console.log(result3);





