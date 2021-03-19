class Dustbin{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.Width = 200;
        this.Height=213;
        this.Thickness = 20;
		this.angle = 0;
		
		this.image = loadImage("dustbingreen.png");

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.Width, this.Thickness,{isStatic:true});
        this.leftBody =  Bodies.rectangle(this.x-this.Width/2, this.y-this.Height/2, this.Thickness, this.Height,{isStatic:true});
        Matter.Body.setAngle(this.leftBody, this.angle);

        this.rightBody=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.Thickness, this.Height, {isStatic:true});
        Matter.Body.setAngle(this.rightBody, -1*this.angle);
        
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }

    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftBody.position;
        var posRight = this.rightBody.position;
        push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);			
			angleMode(RADIANS);
			fill(255)
			rotate(this.angle)
			pop();
			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			rotate(-1*this.angle);
			pop();
			push();
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER);			
			angleMode(RADIANS);
			imageMode(CENTER);
			image(this.image, 0, -this.Height/2, this.Width, this.Height);
			pop();
    }
}