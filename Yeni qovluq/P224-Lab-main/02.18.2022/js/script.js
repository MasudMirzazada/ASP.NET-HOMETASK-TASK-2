// Loops

// For
// for(let i=0;i<10;i++){
//     console.log(i)
// }

// While
// let i=0;
// while (i<10){
//     console.log(i++);
// }

// const students = ["Sadiqxan", "Altan", "Kamil", "Chinare", "Gunel", "Amil", "Nicat", "Metin", "Sexavet"];

// const mentor = {
//     name: "Farid",
//     surname: "Aliyev",
//     age: 20
// }

// Foreach
// students.forEach((value,index,arr)=>console.log(value,index,arr));
// students.forEach(function(value,index,arr){
//     console.log(value,index,arr);
// })
// For of
// for(let item of students){
//     console.log(item);
// }
// For in
// for (let item in mentor) {
//     console.log(item + " : " + mentor[item])
// }

// class Mentor {
//     constructor(name, surname, age, obj) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.obj = obj;
//     }
// }

// let Farid = new Mentor("Farid", "Aliyev", 40,{num:1});
// for (let item in Farid) {
//     console.log(item + " : " + Farid[item])
// }

// console.log(Farid.obj)

// for (let i = 0; i <= 100; i += 2) {
//     document.write(i + "<br>")
// }

// function btn(){
//   var x = document.getElementById('inp').value
//   alert(Math.abs(x))
// }

function Calc() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let operand = document.getElementById("operator").value.trim()
    Calculate(num1, num2, operand);
}

function Calculate(num1, num2, operand) {
    if (!operand) {
        operand = '+';
    }
    let res;
    switch (operand) {
        case '+':
            res = Number(num1) + Number(num2);
            break;
        case '-':
            res = num1 - num2;
            break;
        case '/':
            res = num1 / num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '%':
            res = num1 % num2;
            break;
        case '**':
            res = num1 ** num2;
            break;
        default:
            res = "Please provide a valid input";
    }
    document.getElementById("result").innerText = res;
}


// Task
let arr = ["Kamil", "Guliyev", 23];

function RevArr(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(RevArr(arr));