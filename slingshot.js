class SlingShot{

constructor(bodyA,pointB){
    var options ={
        bodyA: bodyA,
        pointB: pointB,
        length: 10,
        stifness: 0.04

    } 
    this.slingShot = Matter.Constraint.create(options);
    World.add(world,this.slingShot);
    
    

}

display(){

    strokeWeight(5);

    
    if(this.slingShot.bodyA){
        
        line(this.slingShot.bodyA.position.x,this.slingShot.bodyA.position.y,this.slingShot.pointB.x,this.slingShot.pointB.y);

    }

    }

fly() {
   
 this.slingShot.bodyA = null;
    
}

}

