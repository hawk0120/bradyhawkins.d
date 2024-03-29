 class CanvasManager {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.initCanvasSize();
    this.addEventListeners();
  }

  private initCanvasSize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private addEventListeners(): void {
    window.addEventListener('resize', () => this.initCanvasSize());
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;

  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update(): void {
    this.x += this.speedX;
    this.y += this.speedY;

    // if (this.size > 0.2) this.size -= 0.1;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#ffffff"; // Adjust particle color
    ctx.strokeStyle = '#ffffff'; // Adjust particle border color
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
  }
}

class ParticleManager {
  particles: Particle[] = [];

  createParticles(canvas: HTMLCanvasElement): void {
    const x: number = Math.random() * canvas.width;
    const y: number = Math.random() * canvas.height;
    const size: number = Math.random() * 5;
    this.particles.push(new Particle(x, y, size));
  }

  animateParticles(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.particles.forEach((particle, index) => {
      particle.update();
      particle.draw(ctx);

      if (particle.size <= 0.2) {
        this.particles.splice(index, 1);
      }
    });

    requestAnimationFrame(() => this.animateParticles(ctx));
  }
}
