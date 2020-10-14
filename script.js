/*--------------------
Utils
--------------------*/
const mapRange = (a, b, c, d, e) => {
  return (a - b) * (e - d) / (c - b) + d;
};
const lerp = (v0, v1, t) => {
  return v0 * (1 - t) + v1 * t;
};
const random = (min, max) => min + Math.random() * (max - min);
const sin = t => Math.sin(t);
const cos = t => Math.cos(t);
const PI = Math.PI;
const TAO = PI * 2;
const LOOP = 4;


/*--------------------
                Raf
                --------------------*/
class Raf {
  constructor() {
    this.raf();
  }

  raf() {
    if (this.onRaf) {
      window.requestAnimationFrame(() => {
        const o = {};
        o.time = window.performance.now() / 1000;
        o.playhead = o.time % LOOP / LOOP;
        this.raf();
        this.onRaf(o);
      });
    }
  }}



/*--------------------
     Canvas
     --------------------*/
class Canvas extends Raf {
  constructor(obj) {
    super();
    this.canvas = document.getElementById(obj.id);
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.events();
  }

  resize() {
    this.dpr = window.devicePixelRatio;
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
    this.canvas.width = window.innerWidth * this.dpr;
    this.canvas.height = window.innerHeight * this.dpr;
  }

  events() {
    window.addEventListener('resize', this.resize);
  }

  clear() {
    this.ctx.clearRect(0, 0, window.innerWidth * this.dpr, window.innerHeight * this.dpr);
  }

  onRaf() {
    this.clear();
  }}



/*--------------------
     Circle
     --------------------*/
class Circle extends Raf {
  constructor(obj) {
    super();
    Object.assign(this, obj);
    this.draw();
  }

  draw(playhead, time) {
    const breathe = sin(playhead * TAO);
    this.ctx.globalCompositeOperation = "screen";
    this.ctx.save();
    this.ctx.translate(window.innerWidth / 2 * this.dpr, window.innerHeight / 2 * this.dpr - 30 * this.dpr);
    this.ctx.rotate(PI);

    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = 'rgba(0, 100, 0, 0)';
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.beginPath();

    // this.radius *= 1 + Math.sin(Math.PI * 2 * playhead) * .5

    for (let i = 0; i <= this.points; i++) {
      const p = i / this.points;

      const times = 7;

      const phase = mapRange(cos(p * TAO), -1, 1, 1, mapRange(sin(((this.offset + time * this.speed) * .2 + p) * times * TAO), -1, 1, .5, .58));

      let x = phase * this.radius * sin(p * TAO);
      let y = phase * this.radius * cos(p * TAO);

      const type = i === 0 ? 'moveTo' : 'lineTo';
      this.ctx[type](x, y);
    }

    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.restore();
  }

  onRaf({ playhead, time }) {
    this.draw(playhead, time);
  }}





/*--------------------
     Init
     --------------------*/
const canvas = new Canvas({
  id: 'canvas' });


for (let i = 0; i < 8; i++) {
  new Circle({
    ctx: canvas.ctx,
    dpr: canvas.dpr,
    lineWidth: 1 * canvas.dpr,
    points: 200,
    offset: i * 1.5,
    speed: .7,
    radius: (150 - i * 4) * canvas.dpr,
    color: `hsl(${220 + i * 10}, 60%, 70%)` });

}