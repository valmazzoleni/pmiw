// Valentina Mazzoleni - Com3
// link del video: https://youtu.be/1Dgab83brIs

let refe; //variable de la imagen
let cantcir = 6; //cantidad de círculos
let lineas = 10 //cantidad de lineas
let colores = []; //guarda los colores
let invertir = false; //invierte las lineas
let primerClick = true; //mantener los colores en el primer click
let centroX = 600; //posición fija de los círculos
let centroY = 200;
let puntaX = 600; //posición movible de los círculos
let puntaY= 200;
let agarrado = false; //indica si el círculo está agarrado al cursor

function preload() { //carga la imagen
  refe = loadImage('data/F_25.jpg');
  }


function setup() {
createCanvas(800,400);  //tamaño de la ventana
}


function draw() {
background (255); //color blanco de fondo
noStroke(); //saca el borde de las figuras
image(refe,0,0,400,400); //llama a la imagen

//rects
for (let cuad = 1; cuad <=4; cuad++) { //recorre los 4 cuadrantes
for (let i = 0; i < lineas; i++) { //dibuja la cantidad de lineas por cuadrante
  if (primerClick) {  //controla el primer click para mantener el byn
    if (i%2 === 0) {
      fill (0); //color negro en par
      } else {
        fill (255); //color blanco en impar
        }
        } else {
          fill (colores[i]); //usa los colores aleatorios guardados
          }

if (cuad===1) {
  if (!invertir) {
    //cuad 1
    let y = map(i, 0, lineas, 0, 200); //calcula posición y para las lìneas horizontales
    rect (400, y, 200, height/lineas);
    } else {
      let x = map (i, 0, lineas, 400,600); //calcula pos x para las líneas verticales
      rect(x, 0, width/lineas, 200);
      }
      }
      
      else if (cuad === 2){
        if (!invertir){
          //cuad2
          let x = map(i, 0 , lineas, 600, 800); //vertical
          rect(x, 0, width/lineas, 200);
          } else {
            let y = map(i, 0, lineas, 0, 200); //horizontal
            rect (600, y, 200, height/lineas);
            }
            }
            
            else if (cuad === 3) {
              if (!invertir) {
                //cuad3
                let x= map(i, 0 , lineas, 400, 600); //vertical
                rect(x, 200, width/lineas, 200);
                } else {
                  let y = map(i, 0, lineas, 200, 400); //horizontal
                  rect (400, y, 200, height/lineas);
                  }
                  }
                  
                  else if (cuad=== 4) {
                    if (!invertir) {
                      //cuad4
                      let y = map (i, 0, lineas, 200, 400); //horizontal
                      rect (600, y, 200, height/lineas);
                      } else {
                        let x = map(i, 0, lineas, 600, 800); //vertical
                        rect(x, 200, width/lineas,200);
                        }
                      }
                }
                }
                
// círculos cocéntricos
if (agarrado) { //si el círculo del medio está agarrado (click) sigue al mouse
  puntaX = mouseX;
  puntaY = mouseY;
  }
  
  for (let i = 0; i < cantcir; i++){
    if (i%2 === 0) {
      fill (0); //par negro
      } else {
        fill (255); // impar blanco
        }
        
        let diam = calculodiam(i); //retorna valor. los círculos se achican
        let t= map(i, 0, cantcir - 1, 0, 1);
        let x = centroX + (puntaX - centroX) * t;
        let y = centroY + (puntaY - centroY) * t; //devuelve el valor entre dos números
        
        ellipse (x, y, diam, diam);
        }
        }
        
function mousePressed(){
  let diam = 40; //diametro del círculo mas pequeño
  let d = dist(mouseX, mouseY, puntaX, puntaY); //mide la distancia al círculo mas chico
  
  if (d < diam/2) {
    agarrado = true;
    }
    
    invertir = !invertir; //cambia de horizontal a vertical o viceversa
    for (let i = 0; i < lineas; i++) {
      colores [i] = color (random(255), random(255), random(255)); //genera colores random
      primerClick = false; //si no es el primer click se usan los colores random
      }
      }
      
function mouseReleased() {
agarrado = false; //suelta el círculo cuando se deja de clickear
}

function keyPressed(){
  if (key === 'r' || key === 'R') { //reiniciar al presionar R/r
    reiniciar(true);
    }
    }
    
    function reiniciar(todo) {
        invertir = false; //vuelven a su pos original
        primerClick = true; //vuelven a su color original
        agarrado = false; //se suelta el circulo
        if (todo) { //reestablece circulos
        centroX = 600;
        centroY = 200;
        puntaX = 600;
        puntaY = 200;
      }
      
      for (let i = 0; i < lineas; i++) {           //reestablece colores
    colores[i] = (i % 2 == 0) ? color(0) : color(255);
  }
}


function calculodiam(i) {            //retorna el valor
  return map(i, 0, cantcir - 1, 235, 40);
}
