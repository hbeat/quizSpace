// let getQuestions = async() =>{
//     let response = await fetch('http://127.0.0.1:8000/api/questions/')
//     let data = await response.json()
//     data.forEach(element => {
//         var str = element['options']
//         str = str.substring(1,str.length-1)
//         var list = str.split(",")
//         element['options'] = list
//     });
//     return await data;
// }
// var x = getQuestions()
// // console.log(x);
// export const QuestionTest = x;

// export const QuestionsList =
// [
//     {
//     question:"this is a question",
//     id:0,
//     options: ["1", "2", "3", "4"],
//     answer:"4",
// },
// {
//     category:"Calculus",
//     question:"hi a1",
//     id:1,
//     options: ["5", "6", "7", "8"],
//     answer:"7",
// },
// {
//     category:"Algebra",
//     question:"hi third",
//     id:0,
//     options: ["+", "-", "*", "/"],
//     answer:"4",
// },
// {
//     category:"Algebra",
//     question:"hi third",
//     id:0,
//     options: ["+", "-", "*", "/"],
//     answer:"4",
// },
// {
//     category:"Calculus",
//     question:"hi2",
//     id:0,
//     options: ["+", "-", "*", "/"],
//     answer:"4",
// },
// {
//     category:"Calculus",
//     question:"hi 3",
//     id:0,
//     options: ["+", "-", "*", "/"],
//     answer:"4",
// },
// {
//     category:"Algebra",
//     question:"hi last",
//     id:0,
//     options: ["+", "-", "*", "/"],
//     answer:"4",
// },
// // {
// //     category:"Calculus",
// //     question:"hi 4",
// //     id:0,
// //     options: ["+", "-", "*", "/"],
// //     answer:"4",
// // },
// ];