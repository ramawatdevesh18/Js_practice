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


// foreach in arrays this function return (item,itemIndex)
// const array=[1,2,3,4,5];
// array.forEach(function(number,index){
//     console.log(`The numner at index ${index} is ${number} and the square of the number is ${number**2}`); 
// });
// <------------------->
// function myfun(number,index){
//     console.log(`The numner at index ${index} is ${number} and the square of the number is ${number**2}`); 
// }
// array.forEach(myfun);


// map function in array ye bhi callback function h foreach ke jese but
// ye ek new aaray bnata h or iske argument m jo hota usse us array m dal deta.
// const arr = [1,2,3,'dev'];

// const func = function(ar){
//     return ar+" ramawat";
// }
// const newar = arr.map(func);
// console.log(newar)
//<--------------->
// const arr = [1,2,3];
// const square = function(num){
//     return num*num;
// }
// const squaredAr = arr.map(square);
// console.log(squaredAr)
                                            
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
// let num=3;  // 1st test
// let num=0;  // 2nd test 
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


// 13. Create an object called person with properties such as name , age , and gender .
// Display the object in the console.
// solution:-
// const obj={name:"Devesh Ramawat" , age: 21 , gender: "male"};
// console.log(obj);


// 14. Write a program that iterates over an array and displays each element in the
// console.
// solution:-
// const array=[1,2,3,"devesh",{name:"Devesh Ramawat" , age: 21 , gender: "male"}]
// array.forEach((item)=>{
//     console.log(item);
// });


// 15. Create a function that takes two numbers as arguments and returns their sum.
// Display the result in the console.
// solution:-
// const sum = (num1,num2)=>{
//     return num1+num2;
// };
// console.log(sum(2,3));


// 16. Write a program that converts a string to uppercase and displays the result in the
// console.
// solution:-
// const upperCs=(str)=>{
// return str.toUpperCase();
// };
// console.log(upperCs('devesh'));


// 17,33. Create a function that checks if a given string is a palindrome and displays the
// result in the console.
// solution:-
// const checkPalindrome =(str)=>{
//     let str2="";
//     for(let i=str.length-1;i>=0;i--){
//         str2=str2+str[i];
//     }
//     if(str2===str){
//         console.log("Palindrome");
//     }
//     else{
//         console.log("not Palindrome");
//     }
// };
// checkPalindrome('abcddcba');

// 18. Write a program that generates a random number between 1 and 10 and displays it
// in the console.
// solution:-
// console.log(Math.floor(Math.random()*10));

// 19. Create a function that sorts an array of numbers in ascending order and displays
// the sorted array in the console.
// solution:-
// const arr=[1,3,2,14,6,22,19];
// console.log(arr.sort((a,b)=>a-b)); //ascending
// console.log(arr.sort((a,b)=>b-a)); //decending

// 20. Write a program that checks if a given string is a valid email address and displays
// the result in the console.
// function checkEmail(email) {
//     var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
// }
// var emailAddress = "ramawatdevesh18@gmail.com";
// var TestEmail = checkEmail(emailAddress);
// console.log("email valid? :" , TestEmail);
  

// 21. Create a function that generates a random password consisting of alphanumeric
// characters and displays it in the console.
// solution:-




// 22. Write a program that calculates the sum of all even numbers between 1 and a given
// number. Display the result in the console.
// solution:-
// const sumOfeven=(num)=>{
//     let sum=0;
//     for(let i=2;i<=num;i=i+2){
//         sum=sum+i;
//     }
//     return sum;
// };
// console.log(sumOfeven(8));


// 23. Create a function that removes duplicates from an array and displays the modified
// array in the console
// solution:-
// function removeDuplicates(array){
//     const mySet =new Set(array);
//     array=Array.from(mySet);
//     return array;
// }
// const arr=[1,2,3,2,1,"dev","dev"];
// console.log(removeDuplicates(arr));


// 24. Write a program that prompts the user to enter a sentence and counts the number
// of words. Display the count in the console.
// solution:-
// function noOfWords(str){
//     str=str.trim();
//     var words=1;
//     for(let char of str){
//         if(char===" "){
//             words++;
//         }
//     }
//     return words;
// }
// console.log(noOfWords("  my name is devesh. "));


// 25. Create a function that checks if a given number is a prime number and displays the
// result in the console.
// solution:-
// function isPrime(num){
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(prompt("enter a number:")));


// 26. Write a program that calculates the factorial of each number in an array and
// displays the results in the console.
// solution:-
// const fact = (num) => {
//     let ans=1;
//     for(let i=1;i<=num;i++){
//         ans = ans*i;
//     }
//     return ans;
// }
// const arr = [1,2,3,4,5,6,7,8,9,10];
// const newar = arr.map(fact);
// console.log(newar)


// 27. Create a function that finds the maximum number in an array and displays it in the
// console.
// solution:-
// const numbers = [1,2,3,40,5,6,7,8,9,10];
// const findMax=(arr)=>{
//     var max=0;
//     for(let num of numbers){
//         if(max<num){
//             max=num;
//         }
//     }
//     return max;
// }
// console.log(findMax(numbers));

// 28. Write a program that converts a string to title case and displays the result in the
// console.
// solution:-
// const toTitle=(string)=>{
//     const a = string.split(" ");
//     for(let i=0;i<a.length;i++){
//         a[i] = a[i][0].toUpperCase() + a[i].slice(1).toLowerCase();
//     }
//     string=a.join(" ");
//     return string;
// }
// let str = "devEsh ramawat";
// console.log(toTitle(str));


// 29. Create a function that calculates the average of a given array of numbers and
// displays the result in the console.
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const findAvg=(arr)=>{
//     let avg=0;
//     for(let num of numbers){
//         avg=avg+num;
//     }
//     return avg/arr.length;
// }
// console.log(findAvg(numbers));


// 30. Write a program that prompts the user to enter a number and checks if it is a perfect
// square. Display the result in the console
// solution:-
// const num = prompt(+"Enter a Number");
// function isPerSq(n){
//     if(Math.sqrt(n)===Math.floor(Math.sqrt(n))){
//         console.log("perfect square");
//     }
//     else{
//         console.log("not perfect square")
//     }
// }
// isPerSq(num);


// 31. Create a function that finds the index of a specific element in an array and displays
// the index in the console.
// solution:-
// function findIndex(arr,num){
//     let len = arr.length;
//     for(let i=0;i<len;i++){
//         if(arr[i]==num){
//             return `present at index ${i}`;
//         }
//   }
//   return "not present";
// }
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// var n =5;
// console.log(findIndex(numbers,n));


// 32. Write a program that converts a given number of seconds to hours, minutes, and
// seconds. Display the result in the console.
// solution:-
// const func=function(num){
//     const hr = Math.floor(num/(60*60));
//     const min = Math.floor(num%(60*60)/60);
//     const sec = (num%(60*60))%(60);
//     console.log(hr,':',min,":",sec);
// }
// var n=55555;
// func(n);

// 34. Write a program that reverses a given string and displays the reversed string in the
// console.
// solution:-
// const reverseStr =(str)=>{
//     let str2="";
//     for(let i=str.length-1;i>=0;i--){
//         str2=str2+str[i];
//     }
//     return str2;
// }
// console.log(reverseStr("devesh"));


// 35. Create a function that checks if a given year is a leap year and displays the result in
// the console.
// const findLeap = (year)=>{
//     return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
// }
// console.log(findLeap(2024));


// 36. Write a program that prompts the user to enter a number and checks if it is a
// Fibonacci number. Display the result in the console.



// 37. Create a function that calculates the factorial of a given number using recursion and
// displays the result in the console.
// const fact = (num) => {
//     if(num>1){
//        return num*fact(num-1);
//     }
//     else{
//         return 1;
//     }
// }
// console.log(fact(5));


// 38. Write a program that prompts the user to enter a sentence and counts the number
// of vowels. Display the count in the console.
// solution:-
// const countVowel = (str)=>{
//     str = str.toLowerCase();
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u')
//             count++;
//     }
//     return count;
// }
// console.log(countVowel("devesh ramawat"));


// 39. Create a function that checks if a given string is a valid URL and displays the result
// in the console.


// 40. Write a program that converts a temperature from Celsius to Fahrenheit and
// displays the result in the console.
// solution:-
// function celToFar(num){
//     return ((9/5*num)+32);
// }
// console.log(celToFar(6));


// 41. Create a function that calculates the sum of the squares of numbers in an array and
// displays the result in the console.
// solution:-
// const array=[1,2,3,4,5];
// const squaredArray=(arr)=>{
//     let sum=0;
//     arr.forEach(function(number){
//          sum=sum+(number**2);
//     });
//     console.log(sum);
// }
// squaredArray(array)


// 43. Create a function that finds the minimum number in an array and displays it in the
// console.
// solution:-
// const numbers = [0,1,-1,2,3,40,5,6,7,8,9,10];
// const findMin=(arr)=>{
//     var min=arr[0];
//     for(let num of numbers){
//         if(min>num){
//             min=num;
//         }
//     }
//     return min;
// }
// console.log(findMin(numbers));


// 44. Write a program that prompts the user to enter a decimal number and converts it to
// binary. Display the result in the console
// solution:-
// function decToBin(n){
//     let str="";
//     while(n>=1){
//         let d = n%2;
//         str = d+str;
//         n=Math.floor(n/2);
//     }
//     return str;
// }
// console.log(decToBin(9));


// 46. Write a program that calculates the sum of all odd numbers between 1 and a given
// number. Display the result in the console.
// 

// 47. Create a function that sorts an array of strings in alphabetical order and displays the
// sorted array in the console.
// const a = ["abc","devesh","bhumi","moni", "aaaa","ramawat"];
// console.log(a.sort());


// 48. Write a program that prompts the user to enter a sentence and checks if it is a
// pangram. Display the result in the console.
// const set = (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
// function checkPangram(string) {
//   let words = string.split(" ");
//   let result = words.join("");
//   let arr=  new Set([...result].sort());
//   let arr1=Array.from(arr)
//   if(arr1.length==set.length){
//      return "pangram";
//   }
//   else{
//     return "not pangram";
//   }
// }
// let str ="The quick brown fox jumps over the lazy dog";
// str=str.toLowerCase();
// console.log(checkPangram(str))





// 49. Create a function that calculates the exponentiation of a base number to a given
// power and displays the result in the console.
// solution:-
// const func = (b,p) => {
// console.log(Math.pow(b,p));
// }
// const base = 2
// const power = 3
// func(base,power);


// 50. Write a program that prompts the user to enter a number and checks if it is a perfect
// number. Display the result in the console.
// solution:-
// const findPerfect = (n) => {
//     let i = 1, s = 0;
//     while(i<n){
//         if(n%i==0){
//             s += i;
//         }
//         i++;
//     }
//     if(s===n)
//         return "Perfect Number";
//     return "Not a Perfect No.";
// }
// const n = 28;
// const n = 24;
// console.log(findPerfect(n));
