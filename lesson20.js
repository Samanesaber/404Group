
let myObj = {name:"Ali", family:"Zekaee"}
let myJson = JSON.stringify(myObj) // Serialization
let myObj2 = JSON.parse(myJson)

let myObj3 = JSON.parse('{"Color":"Red", "Brand":"Bik"}') // Deserialization
console.log(myObj3.Brand)

//console.log(typeof myObj,typeof myJson )
// Scope

// ---------------------------------------------------------------
function Student(name, age, gender){ // Student object template, constructor Student
    // this.Property = value
    // these properties come form parameters
    // in this context, this refers to the instance (current instance) of object 
    this.name = name
    this.age = age
    this.gender = gender
    // property with default value
    this.Hardworking = true
    this.IsRegistered = true
    this.Lessons = []
}
//-------------------------------------------------------------------

let myStudent1 = new Student("Esmaeel", 40, "male") // an instance of student, new is a keyword to call the object constructor 
let myStudent2 = new Student("Sarah", 30, "female") // another instance of student, new is a keyword to call the object constructor 

myStudent1.name = "Ali"
myStudent2.name = "Pari"

myStudent2.Lessons.push("English")
myStudent2.Lessons.push("Math")

console.log(myStudent1)
console.log(myStudent2)


let x = 10 // the scope of x is the file 
let y = 10
function MyFunction(){ // the scope of x is Add function
    let x = 20
    let z = 30
    x = x + 1
    y = y + 1

    console.log("X in function", x)
    console.log("Y in function", y)
    console.log("Z in function", z)

    function MyChildFunction(){
        let x = 20
        let z = 40
        x = x + 10
        y = y + 10
    
        console.log("X in child function", x)
        console.log("Y in child function", y)
        console.log("Z in child function", z)
    }

    MyChildFunction()
}

MyFunction()

console.log("X in file", x)
console.log("Y in file", y)
