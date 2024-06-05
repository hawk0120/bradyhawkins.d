import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})

export class GameCanvasComponent implements OnInit {
  @ViewChild('gameCanvas', { static: true }) gameCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('menu', { static: true }) menu!: ElementRef<HTMLDivElement>;
  private ctx!: CanvasRenderingContext2D;
  private birdImage = new Image();
  private pipeImage = new Image();
  private backgroundImage = new Image();
  private bird = { x: 100, y: 0, velocityY: 0, gravity: 0.2, jump: -4 };
  private pipes: any[] = [];
  private gameOver = false;
  private score = 0;

  ngOnInit(): void {
    this.birdImage.src = 'assets/images/niks_bg.png';
    this.pipeImage.src = 'assets/images/pipe.png';
    this.backgroundImage.src = 'assets/images/background.png';

    this.setCanvasSize();
    this.ctx = this.gameCanvas.nativeElement.getContext('2d')!;
    window.addEventListener('resize', () => this.setCanvasSize());
    this.bird.y = this.gameCanvas.nativeElement.height / 2;

    this.loadFont();
    this.draw();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Space') {
      if (!this.gameOver) {
        this.bird.velocityY = this.bird.jump;
      } else {
        this.restartGame();
      }
    }
  }

  @HostListener('window:touchstart', ['$event'])
  handleTouchStart(): void {
    if (!this.gameOver) {
      this.bird.velocityY = this.bird.jump;
    } else {
      this.restartGame();
    }
  }

  private setCanvasSize(): void {
    const canvas = this.gameCanvas.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private drawBird(): void {
    this.ctx.drawImage(this.birdImage, this.bird.x - 20, this.bird.y - 20, 100, 100);
  }

  private drawPipe(pipe: any): void {
    this.ctx.drawImage(this.pipeImage, pipe.x, 0, pipe.width, pipe.topHeight);
    this.ctx.drawImage(this.pipeImage, pipe.x, pipe.topHeight + 150, pipe.width, this.gameCanvas.nativeElement.height - (pipe.topHeight + 150));
  }

  private draw(): void {
    const canvas = this.gameCanvas.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.drawImage(this.backgroundImage, 0, 0, canvas.width, canvas.height);

    if (!this.gameOver) {
      this.bird.velocityY += this.bird.gravity;
      this.bird.y += this.bird.velocityY;

      if (this.bird.y + 20 > canvas.height || this.bird.y - 20 < 0) {
        this.gameOver = true;
        this.showMenu();
      }

      if (this.pipes.length === 0 || this.pipes[this.pipes.length - 1].x <= canvas.width - 300) {
        this.createPipe();
      }

      for (let i = this.pipes.length - 1; i >= 0; i--) {
        this.pipes[i].x -= 2;

        if (
          this.bird.x + 5 > this.pipes[i].x &&
          this.bird.x - 5 < this.pipes[i].x + this.pipes[i].width &&
          (this.bird.y - 5 < this.pipes[i].topHeight || this.bird.y + 5 > this.pipes[i].bottomY)
        ) {
          this.gameOver = true;
          this.showMenu();
        }

        if (this.pipes[i].x + this.pipes[i].width < 0) {
          this.pipes.splice(i, 1);
          this.score++;
          document.getElementById('score')!.innerText = 'Score: ' + this.score;
        }
      }
    }

    this.pipes.forEach(pipe => this.drawPipe(pipe));
    this.drawBird();

    if (!this.gameOver) {
      requestAnimationFrame(() => this.draw());
    }
  }

  private createPipe(): void {
    const canvas = this.gameCanvas.nativeElement;
    const pipe = {
      x: canvas.width,
      width: 50,
      topHeight: Math.random() * (canvas.height - 200) + 50,
      bottomY: 0,
    };
    pipe.bottomY = pipe.topHeight + 150;
    this.pipes.push(pipe);
  }

  private showMenu(): void {
    this.menu.nativeElement.style.display = 'block';
  }

  public restartGame(): void {
    const canvas = this.gameCanvas.nativeElement;
    this.bird.y = canvas.height / 2;
    this.bird.velocityY = 0;
    this.pipes = [];
    this.gameOver = false;
    this.score = 0;
    document.getElementById('score')!.innerText = 'Score: 0';
    this.menu.nativeElement.style.display = 'none';
    this.draw();
  }

  goHome(): void {
    window.location.href = "https://www.bradyhawkins.dev";
  }

  private loadFont(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    document.head.appendChild(link);
  }
}
