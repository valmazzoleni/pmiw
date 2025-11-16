class Boton {
  constructor(rutaImagen, x, y) {
    this.imagen = loadImage(rutaImagen);
    this.x = x;
    this.y = y;
    this.ancho = 150;
    this.alto = 50;
  }

  dibujar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  clic() {
    return mouseX > this.x && mouseX < this.x + this.ancho &&
           mouseY > this.y && mouseY < this.y + this.alto;
  }
}
