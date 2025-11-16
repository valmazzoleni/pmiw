class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.carnes = [];
    this.tiempoSpawn = 0;
    this.puntaje = 0;
  }

  reiniciar() {
    this.jugador = new Jugador();
    this.carnes = [];
    this.puntaje = 0;
  }

  actualizar() {
    this.jugador.mover();

    this.tiempoSpawn++;
    if (this.tiempoSpawn > 60) {
      this.carnes.push(new Carne(imgCarneBuena, +1));
      this.carnes.push(new Carne(imgCarneMala, -1));
      this.tiempoSpawn = 0;
    }

    for (let i = this.carnes.length - 1; i >= 0; i--) {
      let c = this.carnes[i];
      c.mover();

      if (c.colisiona(this.jugador)) {
        this.puntaje += c.valor;
        this.carnes.splice(i, 1);
      }

      if (c.y > height + 20) {
        this.carnes.splice(i, 1);
      }
    }

    if (this.puntaje >= 5) pantalla = "ganaste";
    if (this.puntaje <= -5) pantalla = "perdiste";
  }

  dibujar() {
    image(imgEscenario, 0, 0, width, height);

    this.jugador.dibujar();
    for (let c of this.carnes) c.dibujar();
  }
}
