/*
valentina mazzoleni 122787/5
Francisco Tomas Oliver 95512/9
comision 3
link a video: https://youtu.be/nX8hoX47v6I
*/




let pantalla = "inicio";
let juego;

let imgInicio, imgCreditos, imgInstrucciones, imgEscenario, imgGanaste, imgPerdiste;
let imgJugadorQuieto, imgJugadorIzq, imgJugadorDer;
let imgCarneBuena, imgCarneMala;

let botonJugar, botonInstrucciones, botonCreditos, botonReiniciar;

let musica; // 🔊 sonido

function preload() {
  imgInicio = loadImage("data/inicio.png");
  imgCreditos = loadImage("data/creditosp.png");
  imgInstrucciones = loadImage("data/instruccionesp.png");
  imgEscenario = loadImage("data/escenario.png");
  imgGanaste = loadImage("data/ganaste.png");
  imgPerdiste = loadImage("data/perdiste.png");

  imgJugadorQuieto = loadImage("data/SpriteFrontal.png");
  imgJugadorIzq = loadImage("data/SpriteIzquierda.png");
  imgJugadorDer = loadImage("data/SpriteDerecha.png");

  imgCarneBuena = loadImage("data/CarneBuena.png");
  imgCarneMala = loadImage("data/CarneMala.png");

  musica = loadSound("data/musica.mp3"); // 🔊
}

function setup() {
  createCanvas(640, 480);

  juego = new Juego();

  // Botones horizontales y abajo
  botonJugar = new Boton("data/jugar.png", 120, height - 80);
  botonInstrucciones = new Boton("data/instrucciones.png", 260, height - 80);
  botonCreditos = new Boton("data/creditos.png", 400, height - 80);

  botonReiniciar = new Boton("data/reiniciar.png", 230, height - 60);
}

function draw() {
  background(0);

  if (pantalla === "inicio") {
    image(imgInicio, 0, 0, width, height);
    botonJugar.dibujar();
    botonInstrucciones.dibujar();
    botonCreditos.dibujar();
  }

  else if (pantalla === "juego") {
    juego.actualizar();
    juego.dibujar();
  }

  else if (pantalla === "ganaste") {
    image(imgGanaste, 0, 0, width, height);
    botonReiniciar.dibujar();
  }

  else if (pantalla === "perdiste") {
    image(imgPerdiste, 0, 0, width, height);
    botonReiniciar.dibujar();
  }

  else if (pantalla === "creditos") {
    image(imgCreditos, 0, 0, width, height);
    botonReiniciar.dibujar();
  }

  else if (pantalla === "instrucciones") {
    image(imgInstrucciones, 0, 0, width, height);
    botonReiniciar.dibujar();
  }
}

function mousePressed() {

  if (pantalla === "inicio") {

    if (botonJugar.clic()) {
      userStartAudio();   // 🔊 IMPORTANTE para evitar errores
      musica.loop();      // 🔊 empieza música
      pantalla = "juego";
    }

    if (botonInstrucciones.clic()) pantalla = "instrucciones";
    if (botonCreditos.clic()) pantalla = "creditos";
  }

  if (pantalla === "ganaste" || pantalla === "perdiste" || pantalla === "creditos" || pantalla === "instrucciones") {
    if (botonReiniciar.clic()) {
      musica.stop();      // 🔊 detener música
      pantalla = "inicio";
      juego.reiniciar();
    }
  }
}
