//alert(), confirm(), prompt(), open(), close(), setTimeOut();

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


// const excGetRequest = () =>{
//     let URL = "https://crud.teamrabbil.com/api/v1/ReadProduct";
//     let configaration = {method:"GET"}
    
//     fetch(URL, configaration)
//     .then (response => response.json())
//     .then (result => document.write(result))
//     .catch(err => console.log(err));
// }

//postRequest

const excePostRequest = () =>{
    const URL = "https://crud.teamrabbil.com/api/v1/CreateProduct";
    const BodyData = {img:"123", ProductName:"1234", Qty:"12", TotalPrice: "125", UnitPrice: "54" };
    const Config = {
        method: "POST",
    }
}