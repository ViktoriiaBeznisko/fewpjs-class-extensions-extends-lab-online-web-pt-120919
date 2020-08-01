// Your code here
class Polygon {
    constructor(arr) {
        this.sides = arr
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        const reducer = (accumulator, item) => {
            return accumulator + item;
        };
        return this.sides.reduce(reducer)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[0] + this.sides[2] > this.sides[1])) {
            return true 
        } else { return false }
    }
}
class Square extends Polygon {
    get isValid() {
        return this.sides.every( v => v === this.sides[0] )
    }

    get area() {
        return this.sides[0] ** 2
    }

}