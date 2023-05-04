//tropics 1: alert(), confirm(), prompt(), open(), close(), setTimeOut();

// function objAlert(){
//     alert("Are you sure?");
// };

// function objConfirm(){
//    const confirms=  confirm("are you sure?");
//     document.write(confirms);
// };

// function objPrompt(){
    
//     const name = prompt("Enter your name: ");
//     document.write(name);
// };
// function documentOpen(){
//     open("https://www.facebook.com");
// }

//tropics 2: GET request
// const excGetRequest = () =>{
//     let URL = "https://crud.teamrabbil.com/api/v1/ReadProduct";
//     let configaration = {method:"GET"}
    
//     fetch(URL, configaration)
//     .then (response => response.json())
//     .then (result => document.write(result))
//     .catch(err => console.log(err));
// }

//tropics 3: POST Request

// const excePostRequest = () =>{
//     const URL = "https://crud.teamrabbil.com/api/v1/CreateProduct";
//     const BodyData = {img:"123", ProductName:"1234", Qty:"12", TotalPrice: "125", UnitPrice: "54" };
//     const Config = {
//         method: "POST",
//     }
// }

// //tropics 4: finding element by id
// const FindId = document.getElementById("heading");
// console.log(FindId)
// FindId.innerHTML = "Hello javascript I am fond by id";

// //tropics 5: finding element by className;
// const findClass = document.getElementsByClassName("findClass")[0]
// console.log(findClass);
// findClass.innerText = "Hello i am fond by className and I am read by innerText";

// //tropics 6: replace the document with new content;
// const replace = () =>{
//     document.open("text/html", "replace");
//     document.write("<h2>Learning about the html doom is fun</h2>");
//     // document.close();
// }

// //tropics 7: click the button to open a new window.
// const openWindow = () =>{
//     const w = window.open();
//     w.document.open();
//     w.document.write("hello world");

// }

// //how many tag in document;
// const howManyTag = () =>{
//     const howtag = document.getElementsByTagName("p");
//     const id = document.getElementById('demo');
//     id.innerHTML = howtag.length;
// }

/* //two number summition by input value;
const addTwo = () =>{
    const x = document.getElementById('num1').value ;
    const y = document.getElementById('num2').value ;
    const z = parseFloat(x)+parseFloat(y);
    alert(z);
} */


