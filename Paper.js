class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
      this.body = Bodies.circle(x,y, radius,options);
      ellipse(30, 30, 10, 10)
      World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        var pos =this.body.position;
        fill("brown");
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}