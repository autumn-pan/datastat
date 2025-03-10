module.exports = class Point2
{
    constructor(x,y) 
    {
        this.x = x;
        this.y = y;
    }

    abs() {
        return (this.x**2 + this.y**2)**0.5;
    }

    dis(p2)
    {
        return ((this.x - p2.x)**2 + (this.y - p2.y)**2)**0.5;
    }
}

