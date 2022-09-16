class Rectangle {
    constructor(length,breadth)
    {
        this.length=length;
        this.breadth=breadth;
    }
    area()
    {
        let result=this.length*this.breadth;
        return result.toFixed(4);
    }
}

class Sqaure extends Rectangle{
    constructor(length)
    {
        super(length,length);
    }
}

let obj=new Sqaure(5);
console.log(obj.area());