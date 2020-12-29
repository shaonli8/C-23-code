class Box {
    constructor(x,y,w,h){
        var options = {
            restitution:0.5
          }
        
          this.body=Bodies.rectangle(x,y,w,h,options);
          this.w=w;
          this.h=h;
          World.add(world,this.body);
    }
    display(){
        fill("yellow");
        rectMode(CENTER);
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rect(0,0,this.w,this.h);
        pop()
    }
}