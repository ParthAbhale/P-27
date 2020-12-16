class Pendulum{
    constructor(x,y){
        var options = {
          restitution: 1,
          friction: 0.3,
          density:1
            // frictionAr:0.0,
            // slop:1,
            // inertia: Infinity,
            // isStatic:true
        }
        this.r=25;
        this.body=Bodies.circle(x,y,25,options)
        World.add(world,this.body)
    }
    display(){
        let pos = this.body.position;
        let angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke()
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
  }