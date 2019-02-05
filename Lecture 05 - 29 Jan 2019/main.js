// For 
// While
// Do - while
// For each
// For in 

// for(let i = 0;i<10;i++) {
//     console.log(i)
// }

// let counter = 0;
// while(counter < 10) {
//     console.log(counter);
//     counter++;
// }

// let counter = 0;

// do{
//     console.log(counter);
//     counter++;
// }while(counter < 10);


// For in

// let arr = [1,2,3,4,12,12,4,1,5,1,12]

// for(let i = 0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let i in arr) {
//     console.log(arr[i]);
// }

// let arr = [];

// arr.push(10);
// arr.push(100);

// for(let i in arr) {
//     console.log(arr[i]);
// }

// let arr = [1,2,1,3,3.4,23.5,"Hello","World",{},true,function(){}]

// Math.floor(Math.random(10))

let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10));
}

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}









