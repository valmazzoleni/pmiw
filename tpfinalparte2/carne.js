class Carne {
  constructor(imagen, valor) {
    this.imagen = imagen;
    this.valor = valor;
    this.ancho = 45;
    this.alto = 45;

    let columnas = [width * 0.25, width * 0.5, width * 0.75];
    this.x = random(columnas);
    this.y = -50;
    this.vel = 3;
  }

  mover() { this.y += this.vel; }

  dibujar() {
    image(this.imagen, this.x - this.ancho / 2, this.y, this.ancho, this.alto);
  }

  colisiona(jugador) {
    return dist(this.x, this.y, jugador.x, jugador.y) < 40;
  }
}
