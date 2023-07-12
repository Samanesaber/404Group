function RectangleArea(a,b) { return a * b }
function SquareArea(a) { return a ** 2 }
function CircleArea(r) { return 3.14 * r **2 }

let a = 10, b = 20
console.log(RectangleArea(a,b))
let a1 = 10
console.log(SquareArea(a))
let r = 10
console.log(CircleArea(a))

function Square(a){
    this.a = a
    this.Area = function(){
        this.a ** 2
    }

    this.Diameter = function(){
        return Math.sqrt(2) * this.a
    }
}

function Circle(r){
    this.r = r
    this.Area = function(){
        3.14 * this.r ** 2
    }

    this.Diameter = function(){
        return 2 * this.r
    }
}



let mySquare = new Square(10)
let myCircle = new Circle(10)

console.log(myRectangle.Area())
console.log(mySquare.Area())
console.log(myCircle.Area())

console.log(mySquare.Diameter())
console.log(myCircle.Diameter())

function Rectangle(a,b){
    this.a = a
    this.b = b
}

Rectangle.prototype.Area = function(){
    return this.a * this.b
}

Rectangle.prototype.Diameter = function(){
    return Math.sqrt(this.a ** 2 + this.b **2)
}

let myRectangle = new Rectangle(10,20)
let myRectangle1 = new Rectangle(16,20)
let myRectangle2 = new Rectangle(17,18)
console.log(myRectangle.Area())
console.log(myRectangle1.Area())
console.log(myRectangle2.Area())


class Triangle { // this is a template to create an Object
                 // this is not an Object
    constructor (a, h){
        this.a = a 
        this.h = h
    }

    Area() {
        return 1/2 * this.a * this.h
    }
}

let myTriangle = new Triangle(5,12) // this an instance of Triangle object

console.log(myTriangle.Area())
