class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
}
const rectangle = new Rectangle( 500, 200);
const width = rectangle.getWidth();
const height = rectangle.getHeight();
rectangle.setWidth(300);
rectangle.setHeight(100);
const areaRect = rectangle.getArea();
const periRect = rectangle.getPerimeter();

document.getElementById("result").innerHTML = "Diện thích hình chữ nhật là " + areaRect;
document.getElementById("result1").innerHTML = "Chu vi hình chữ nhật là " + periRect;



// rectangle.setWidth(500);
// rectangle.setHeight(70);
// document.write(rectangle.getWidth());
// document.write(rectangle.getHeight());
const canvas = document.getElementById("canvasHCN");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "Blue";
ctx.fillRect(10, 10, width, height);
