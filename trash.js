class Trash{
    constructor(x,y,r){
      var options={
        isStatic: false,
        'restitution': 0.3,
        'friciton': 0.5,
        'density': 1.2
    }
     this.body = Bodies.circle(x,y,r/2,options)
     this.x = x;
     this.r = r;
     this.y = y;
     World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER)
        fill ("grey")
        ellipse(pos.x,pos.y,this.width,this.height);
    }
}