//class - in ES6 is advanced version of functions andderives itself from function constructors
class Area{
    constructor(length, breadth){
        this.length = length
        this.breadth = breadth
    }

    Areaofrectangle = function(){
        return this.length * this.breadth
    }

    AreaofSquare = () => this.length*this.length

    AreaOfCircle = (radius) => 3.141*radius*radius
}
let areaObj = new Area(5,10)
console.log(areaObj.Areaofrectangle())
console.log(areaObj.AreaofSquare())
console.log(areaObj.AreaOfCircle(20))