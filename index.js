// console.log("Devesh")

const users=[
    {firstName : "Devesh", lastName : "Ramawat" ,age : 21},
    {firstName : "Divya", lastName : "Gupta" , age : 19},
    {firstName : "Kamran", lastName : "Mughal" , age:22}
];
// const [ {firstName} , {lastName} ,{age} ]= users;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
                                                            //   output=>Devesh
                                                            //           Gupta
                                                            //           22

const [user]=users;

for(let detail in user){
    console.log(user[detail]);
}
                                                                // output=>Devesh
                                                                //         Ramawat
                                                                //         21
                                            