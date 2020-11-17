import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;
  
  W = window.innerWidth;
  H = window.innerHeight;
  
  speed = 0.3;
  balls = [];
  initialBalls = 300;
  
  private ctx: CanvasRenderingContext2D;
  
  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.canvas.width = this.W;
    this.ctx.canvas.height = this.H;

    this.newBall();
    this.animate();
  }

  newBall(){
    for(let i=0; i<this.initialBalls; i++){
        this.balls.push(new Ball());
    }
  }

  animate() {
    this.balls.forEach(ball => {
    
      ball.newX  = ball.radius * Math.cos(ball.angle * (Math.PI/180));
      ball.newY = ball.radius * Math.sin(ball.angle * (Math.PI/180));
      ball.x = ball.newX + ball.circleCenterX;
      ball.y = ball.newY + ball.circleCenterY;
      ball.angle += this.speed; 

      this.ctx.fillStyle = ball.color;
      this.ctx.beginPath();
      this.ctx.arc(ball.x, ball.y, ball.innerRadius, 0, Math.PI*2, false);
    
      /////////////////////////////////////////////
      //// To get a line attached at the top
          // this.ctx.moveTo( ball.x, ball.y);
          // this.ctx.lineTo( 1.2*ball.x, 0);
          // this.ctx.stroke();
          // this.ctx.strokeStyle = "#FFF";
      /////////////////////////////////////////////
      this.ctx.closePath();
      this.ctx.fill();
    });
    
    setTimeout(() => {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);    
      this.animate()
    }, 60);
  }
}


export class Ball {
  
  innerRadius = 2;

  W = window.innerWidth;
  H = window.innerHeight;
  
  radius = Math.random()*(this.W/2) + 50;
  x = Math.random()*(this.W); //+ this.radius;
  y = Math.random()*(this.H); //+ 1.2*this.innerRadius;
  newX = 0;
  newY = 0;
  // this.angle = 0;
  color = this.getRandomColor();
  angle = Math.random()*360;
  // this.circleCenterX = Math.random()*(W-2*this.radius) + this.radius;
  // this.circleCenterY = Math.random()*(H-2*this.radius) + this.radius;
  circleCenterX = this.W/2;
  circleCenterY = this.H/2;

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}

