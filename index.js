// console.log("Devesh")

// const users=[
//     {firstName : "Devesh", lastName : "Ramawat" ,age : 21},
//     {firstName : "Divya", lastName : "Gupta" , age : 19},
//     {firstName : "Kamran", lastName : "Mughal" , age:22}
// ];
// const [ {firstName} , {lastName} ,{age} ]= users;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
                                                            //   output=>Devesh
                                                            //           Gupta
                                                            //           22

// const [user]=users;

// for(let detail in user){
//     console.log(user[detail]);
// }
                                                                // output=>Devesh
                                                                //         Ramawat
                                                                //         21


// foreach in arrays
const array=[1,2,3,4,5];
array.forEach(function(number,index){
    console.log(`The numner at index ${index} is ${number} and the square of the number is ${number**2}`);
});

                                            
// 1. Write a JavaScript program that displays "Hello, World!" in the console
// solution:-
// console.log("Hello, World!");


// 2. Create a variable called name and assign it a string value. Display the value of name in the console.
// solution:-
// var name = "Devesh";
// console.log(name);


// 3. Write a program that prompts the user to enter their age and stores it in a variable called age . Display the entered age in the console.
// solution:-
// const age = prompt("Enter your age");
// console.log(age);


// 4. Create two variables, num1 and num2 , and assign them numeric values. Add them together and display the result in the console
// solution:-
// const num1=5;
// const num2=8;
// console.log(num1+num2)


// 5. Write a program that checks if a given number is even or odd and displays the
// result in the console.
// solution:-
// const num=8;
// const ans = num % 2 === 0 ? 'even' : 'odd';
// console.log(ans);


// 6. Prompt the user to enter a string and store it in a variable called input . Display the
// length of the string in the console.
// solution:-
// var input = prompt("Enter a string");
// console.log(input.length);


// 7. Create an array called fruits and add three different fruits to it. Display the array in
// the console.
// solution:-
// const fruits =["apple","mango","papaya"];
// console.log(fruits);

// 8. Write a program that prompts the user to enter three numbers and stores them in an
// array. Display the array in the console.
// solution:-
// const array =[];
// for(let i=0;i<3;i++){
//     array.push(+prompt("enter"+(i+1)+"no:"));
// }
// console.log(array);

// 9. Create an array of numbers and calculate their sum. Display the sum in the console.
// solution:-
// const array =[1,2,3,4,5,6];
// let sum=0;
// for(let i=0;i<array.length;i++){
//     sum=sum+array[i];
// }
// console.log(sum);


// 10. Write a program that checks if a given number is present in an array and displays a
// corresponding message in the console.
// solution:-
// const array =[1,2,3,4,5,6];
// let num=3;
// let num=0;
// for(let i=0;i<array.length;i++){
//     if(array[i]===num){
//         console.log("num is present");
//         break;
//     }
//     else if(i===(array.length-1)){
//         console.log("num is not present");
//     }
// }


// 11. Create a function called greet that takes a name as an argument and displays a
// greeting message in the console.
// solution:-
// const greet = (name) => {
//     console.log(`happy brithday ${name}`)
// }
// greet('devesh');


// 12. Write a function that calculates the factorial of a given number and displays the
// result in the console.
// solition:-
// const fact = (num) => {
//     let ans=1;
//     for(let i=1;i<=num;i++){
//         ans = ans*i;
//     }
//     return ans;
// }
// console.log(fact(5));