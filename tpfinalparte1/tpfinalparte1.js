
/*
valentina mazzoleni 122787/5
Francisco Tomas Oliver 95512/9
comision 3
link a video: https://youtu.be/VvMIR9DI0mo
*/




let pantalla = 0;
let textos = [];
let imagenes = [];
let flujoPantallas = [];
let Camino1, Camino2, Creditos, Reiniciar, Empezar;
let imagenInicio;
let sonidoFondo;

function preload() {
  // Imagen de inicio
  imagenInicio = loadImage("data/imagenInicio.png");

  // Imágenes de la historia (imagen0 se usará también para créditos)
  for (let i = 0; i <= 13; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".png");
  }

  // Botones
  Camino1 = loadImage("data/Camino1.png");
  Camino2 = loadImage("data/Camino2.png");
  Creditos = loadImage("data/Creditos.png");
  Reiniciar = loadImage("data/Reiniciar.png");
  Empezar = loadImage("data/Empezar.png");

  // Sonido de fondo
  sonidoFondo = loadSound("data/fondo.mp3");
}

function setup() {
  createCanvas(640, 480);
  textAlign(LEFT, TOP);
  textSize(16);
  fill(255);
  cargarDatos();
  cargarFlujos();
}

function draw() {
  background(0);
  mostrarPantalla(pantalla);
}

// Cuadro de texto principal
function PonerCuadroDetexto() {
  fill(171, 145, 99, 200);
  rect(50, 40, 540, 320);
  noStroke();
}

// Cuadro de créditos
function PonerCuadroDetexto2() {
  fill(171, 145, 99, 200);
  rect(50, 40, 540, 180);
  noStroke();
}

// Botón de reinicio
function dibujarBotonReiniciar() {
  image(Reiniciar, width / 2 - 50, 410, 100, 50);
}

// Texto ajustado al cuadro
function dibujarTexto(n) {
  let textoActual = textos[n];
  let palabras = textoActual.split(" ");
  let lineaTemporal = "";
  let lineasFinales = [];
  let alturaLinea = 20;
  let x = 60;
  let y = 50;
  let anchoMax = 500;

  for (let i = 0; i < palabras.length; i++) {
    let pruebaLinea = lineaTemporal + palabras[i] + " ";
    if (textWidth(pruebaLinea) > anchoMax) {
      lineasFinales.push(lineaTemporal);
      lineaTemporal = palabras[i] + " ";
    } else {
      lineaTemporal = pruebaLinea;
    }
  }
  lineasFinales.push(lineaTemporal);

  fill(0);
  for (let i = 0; i < lineasFinales.length; i++) {
    text(lineasFinales[i], x, y);
    y += alturaLinea;
  }
}

// Cargar textos actualizados
function cargarDatos() {
  textos[0] = "La Caja de Pandora\nPresioná “Comenzar” para iniciar el relato o “Créditos” para ver los autores.";
  textos[1] = "Prometeo y su hermano Epimeteo fueron perdonados de Tártaro por no haber participado en la guerra contra los Dioses. Sin embargo recibieron la tarea de crear al hombre.";
  textos[2] = "Prometeo moldeó al hombre en barro y Atenea le dió vida. Epimeteo era el encargado de repartir los dones entre ellos, pero se quedó sin cualidades para darle al hombre.";
  textos[3] = "Prometeo, compasivo, decidió brindarle al hombre el fuego, símbolo del conocimiento y la autonomía. Zeus organiza una comida para decidir que será lo que los humanos deben ofrendar a los Dioses. Prometeo lleva dos platos: deliciosa carne de buey oculta dentro de la piel del animal y huesos de ternera envueltos en jugosa grasa.";
  textos[4] = "Zeus, atraído por las pintas del segundo plato, lo escoge, dándose cuenta luego de que los humanos deberán quemar huesos y grasa de animal como ofrenda, en lugar de deliciosa carne. Furioso por el engaño Zeus, decide castigar a los humanos. Planea crear a la primera mujer como un castigo.";
  textos[5] = "Zeus, conociendo lo astuto de Prometeo, elige la carne envuelta en piel y nunca descubre el engaño. La humanidad continúa con sus dones y el fuego, sin que los dioses intervengan. (final bueno!!!!)";
  textos[6] = "Zeus pide ayuda a los Dioses para crear a Pandora. Hefesto, Dios del fuego y de la forja, moldea a Pandora con arcilla y agua. Atenea, Diosa de la estrategia y la artesanía, la viste y le enseña tareas domésticas, impulsando su \"feminidad\".";
  textos[7] = "Afrodita, Diosa de la belleza y la sensualidad, le otorga una hermosura irresistible y Hermes, mensajero de los Dioses y Dios de los ladrones, la astucia y la capacidad de mentir y manipular. Pandora se convierte en un ser fascinante y seductor.";
  textos[8] = "Zeus entrega a Pandora una caja sellada y la envía como regalo a Epimeteo. Prometeo le advierte a su hermano que no acepte regalos de los Dioses, pero Epimeteo cegado por la belleza de tal mujer, ignora la advertencia.";
  textos[9] = "Epimeteo acepta a Pandora como regalo. La mujer comienza a vivir entre los hombres y a despertar curiosidad en todos.";
  textos[10] = "Final alternativo 1: Zeus, confiado, elige la carne ofrecida por Prometeo y nunca descubre el engaño. La humanidad continúa con sus dones y el fuego, sin que los dioses intervengan.";
  textos[11] = "Final alternativo 2: Pandora cierra la caja antes de tiempo, dejando solo la esperanza dentro.";
  textos[12] = "Final alternativo 3: Los dioses intervienen y la caja es recuperada, evitando el desastre.";
  textos[13] = "Final original: Pandora abre la caja por su curiosidad humana y libera todos los males.";
  textos[14] = "Autores: Valentina Mazzoleni y Francisco Tomas Oliver\nComisión: 3";
}

// Cargar flujos de pantallas
function cargarFlujos() {
  flujoPantallas = [
    null, // 0 inicio
    {camino1: 2, camino2: null},
    {camino1: 3, camino2: 10},
    {camino1: 4, camino2: null},
    {camino1: 5, camino2: null},
    {camino1: 6, camino2: null},
    {camino1: 7, camino2: null},
    {camino1: 8, camino2: 11},
    {camino1: 9, camino2: null},
    {camino1: 13, camino2: 12},
  ];
}

// Mostrar pantalla
function mostrarPantalla(n) {
  if (n == 0) {
    image(imagenInicio, 0, 0, width, height);
  } else if (n == 15) {
    image(imagenes[0], 0, 0, width, height);
  } else if (n == 16) {
    image(imagenes[0], 0, 0, width, height);
  } else {
    image(imagenes[n], 0, 0, width, height);
  }

  if (n != 0 && n != 15 && n != 16 && !(n >= 10 && n <= 12)) {
    PonerCuadroDetexto();
    dibujarTexto(n);
  }

  if (n == 16) {
    PonerCuadroDetexto2();
    dibujarTexto(14);
  }

  if (n == 0) {
    image(Empezar, 200, 400, 100, 50);
    image(Creditos, 350, 400, 100, 50);
  } else if (n == 15 || (n >= 10 && n <= 13) || n == 16) {
    dibujarBotonReiniciar();
  } else {
    let flujo = flujoPantallas[n];
    if (flujo) {
      if (flujo.camino1 !== null) image(Camino1, 200, 410, 100, 50);
      if (flujo.camino2 !== null) image(Camino2, 350, 410, 100, 50);
    }
  }
}

// Manejo de clicks
function mousePressed() {
  if (pantalla == 0) {
    if (mouseX > 200 && mouseX < 300 && mouseY > 400 && mouseY < 450) {
      pantalla = 1;
      if (!sonidoFondo.isPlaying()) sonidoFondo.loop();
    }
    if (mouseX > 350 && mouseX < 450 && mouseY > 400 && mouseY < 450) pantalla = 16;
    return;
  }

  if ((pantalla >= 10 && pantalla <= 13) || pantalla == 15) {
    if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > 410 && mouseY < 460) {
      pantalla = 0;
      if (sonidoFondo.isPlaying()) sonidoFondo.stop();
    }
    return;
  }

  let flujo = flujoPantallas[pantalla];
  if (flujo) {
    if (flujo.camino1 !== null && mouseX > 200 && mouseX < 300 && mouseY > 410 && mouseY < 460) pantalla = flujo.camino1;
    if (flujo.camino2 !== null && mouseX > 350 && mouseX < 450 && mouseY > 410 && mouseY < 460) pantalla = flujo.camino2;
  }
}
