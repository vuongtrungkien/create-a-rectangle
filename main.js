let rectangle = function (x, y, width,length) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;

    this.getArea =  function () {
       return width * length;

    };

    this.getPerimeter = function () {
        return (width + length) * 2;
    };

    function getRandomHex() {
        return Math.floor(Math.random() * 255);
    };

    function getRandomColor() {
        let red = getRandomHex();
        let green = getRandomHex();
        let blue = getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
    };

    this.CreatRectangle = function () {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        let color = getRandomColor();
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.fillRect(x,y,width,length);

    };
};

function start() {
    let width = parseInt(prompt("Enter the width"));
    let length = parseInt(prompt("Enter the length"));
    display(width,length);
 function display(val1,val2) {
     let rec = new rectangle(20,20,val1,val2);
     rec.CreatRectangle();
     let area = rec.getArea();
     let perimeter = rec.getPerimeter();
     document.getElementById("area").innerHTML = "area is :  " + area;
     document.getElementById("perimeter").innerHTML = "perimeter is :  "  + perimeter;


 }
}