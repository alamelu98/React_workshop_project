// console.log("Hi");

// var value=2;
// var promise= new Promise((resolve,reject)=>
// {
//     var random_value=Math.floor(Math.random()*5);

//     console.log(random_value)

//     if(random_value===value)
//     {
//         resolve("correct")
//     }
//     else{
//         reject("wrong")
//     }
// })
// console.log(promise)
// promise.then(console.log("fulfilled"))
//         .catch(console.log("error"))


var promise=new Promise((resolve,reject)=>
{
    setTimeout(function()
    {
        resolve("Done")
    },3000)
})

console.log(promise);