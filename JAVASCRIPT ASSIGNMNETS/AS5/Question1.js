class Cylinder{
    constructor(radius,height)
    {
        this.radius=radius;
        this.height=height;
    }

    getVolume()
    {
        let volume=3.14*this.radius*this.radius*this.height;
        console.log(volume.toFixed(4));
    }
}

let obj=new Cylinder(3,4);
obj.getVolume();

class Sphere {
    constructor(radius)
    {
        this.radius=radius;
    }
    getVolume()
    {
        let result=(4/3)*3.14*Math.pow(this.radius,3);
        console.log(result.toFixed(4));
    }
}

let obj1=new Sphere(4);
obj1.getVolume();


class Cone{
    constructor(radius,height)
    {
        this.radius=radius;
        this.height=height;
    }

    getVolume()
    {
        let volume=(3.14*this.radius*this.radius*this.height)/3;
        console.log(volume.toFixed(4));
    }
}

let obj2=new Cone(2,6);
obj2.getVolume();