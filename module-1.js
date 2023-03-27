// //getDay running day using javascript switch;
// let now = new Date();
// let day = now.getDay();
// let daysOfWeek = ["sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday"];
// let dayOfWeekName = daysOfWeek[day]; 
// console.log(dayOfWeekName);
// switch(dayOfWeekName){
//     case 'saturday':
//         console.log("Today is saturday");
//         break;
//     case 'sunday':
//         console.log("Today is sunday");
//         break;
//     case 'Monday':
//         console.log("Today is Monday");
//         break;
//     case 'wednesday':
//         console.log("Today is wednesday");
//         break;
//     case 'Thursday':
//         console.log("Today is Thursday");
//         break;
//     default:
//         console.log("Today is anotherDay");
// };


// //array filter:
// const marks = [50,40,45,37,20];
// const check = (value) =>{
//     return value>25;
// }
// console.log(marks.filter(check))

// // array find method:
// let books = [
//     {  id: 01,title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//     {  id: 02, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     {  id: 03 ,title: "1984", author: "George Orwell", year: 1949 },
//     {  id: 04 ,title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
//   ];
//   let book = books.find( b => b.id === 04);
  
//   const output = [book.title, book.author, book.year];
//   console.log(output);

// //Array foreach()
// const arr = [10,20,30,20,15,25,23,63,54,52];
// arr.forEach(function(fetch){
//     console.log(fetch);
// });

//array includes();
// const includeArray =[5,22,36,21,45,36];
// const result = includeArray.includes(200);
// console.log(result);

// const gradeCalculator = (grade) =>{
//     let letterGrade;
//     switch(true){
//         case grade == 90 && grade <= 100:
//             letterGrade = "A";
//             break;
//         case grade == 80 && grade <= 89:
//             letterGrade = "B";
//             break;
//         case grade == 70 && grade <= 79:
//             letterGrade = "C";
//             break;
//         case grade == 60 && grade <= 69:
//             letterGrade = "D";
//             break;
//         case grade == 0 && grade <= 59:
//             letterGrade = "F";
//             break;
//         default:
//             letterGrade = "Please input 0 to 100";


//     }
//     return letterGrade;
// }

// const output = gradeCalculator(85);
// console.log(output);

//module -1 live test:

const gradeCalculator = (grade) =>{
  if(grade >= 90){
    return "A";
  }else if (grade >= 80){
      return "B";
  }else if(grade >= 70 )
      return "C";
  else if(grade >= 60)
      return "D";
  else if( grade <= 59){
      return "F";
  }
  else{
    return "Please input 0 to 100";
  }
  
}
const output = gradeCalculator(85);
console.log(output);