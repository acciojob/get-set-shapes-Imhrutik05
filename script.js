//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}
	getArea(){
		return this._width * this._height;
	}
}

class Square extends Animal {
	constructor(ide){
		super(side, side);
	}
	getPerimeter(){
		return this._side * 4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
