// Week #3 coursework practice

var customerNames = [];
customerNames.push("Brent H. Thompson");
customerNames.push("Deborah A. Thompson");
customerNames.push("Morgan R. Thompson");
customerNames.push("Zoe A. Thompson");
customerNames.push("Leah C. Thompson");

console.log(customerNames[4]); //picks out one name/variable

for (let i = 0; i < customerNames.length; i++){
    console.log(customerNames[i]);
} //prints out entire array

function myFunction(){ //function practice
    for (let i = 0; i < 100; i++){
        console.log(i);
    }
}
myFunction(); //calls the function forward

function createFullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}
createFullName("Tom", "Sawyer");

function createFullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(createFullName("Tom", "Sawyer"));

function checkCanDrive(age){
    return(age > 16); //doesn't invoke- just stating
}
var currentAge = 22;
if (checkCanDrive(currentAge)){
    console.log("This person can drive.");
} else {
    console.log("This person cannot legally drive.");
}

//objects

var emergencyContactNumberOne = {
    firstName: "Reece",
    lastName: "Rothchild",
    address: {
        street: "Oak Street",
        city: "Sandpoint",
        state: "ID",
        zip: 83864,
    }
    phone: "123-456-7890",
    notes: "",
},

console.log(emergencyContactNumberOne.firstName + " " + emergencyContactNumberOne.lastName
+ "lives in" emergencyContactNumberOne.address.city + " " + emergencyContactNumberOne.address.state);
// followed instructor video, not sure where this went wrong..?

