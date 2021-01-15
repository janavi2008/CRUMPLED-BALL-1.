class Dustbin{
    constructor(x, y, width, height){
        var options = {
            isStatic : false,
        }
      this.body = Bodies.rectangle(x,y, width, height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        var pos =this.body.position;
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}