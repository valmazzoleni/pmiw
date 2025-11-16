class Jugador {
  constructor() {
    this.x = width / 2;
    this.y = height - 60;
    this.vel = 5;

    this.ancho = 60;
    this.alto = 80;

    this.spriteQuieto = imgJugadorQuieto;
    this.spriteIzq = imgJugadorIzq;
    this.spriteDer = imgJugadorDer;
    this.spriteActual = this.spriteQuieto;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) { this.x -= this.vel; this.spriteActual = this.spriteIzq; }
    else if (keyIsDown(RIGHT_ARROW)) { this.x += this.vel; this.spriteActual = this.spriteDer; }
    else { this.spriteActual = this.spriteQuieto; }

    this.x = constrain(this.x, this.ancho / 2, width - this.ancho / 2);
  }

  dibujar() {
    image(this.spriteActual, this.x - this.ancho / 2, this.y - this.alto / 2, this.ancho, this.alto);
  }
}
