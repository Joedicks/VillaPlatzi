var VillaPlatzi = document.getElementById("VillaPlatzi");
var lienzo = VillaPlatzi.getContext("2d");
var xlobo = 0;
var ylobo = 458;
var cantidad = aleatorio(1,10);

var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};

var cerdo =
{
url: "cerdo.png"
};

var vaca =
{
url: "vaca.png"
};

var pollo =
{
url: "pollo.png"
};

var fondo = new Image;
fondo.src = "tile.png";
fondo.addEventListener("load", dibujar);

var lobo = new Image();
lobo.src = "lobo.png";
lobo.addEventListener("load", dibujar);

cerdo.image = new Image();
cerdo.x = new Array();
cerdo.y = new Array();
cerdo.image.src = cerdo.url;
cerdo.image.addEventListener("load", dibujar);

vaca.image = new Image();
vaca.x = new Array();
vaca.y = new Array();
vaca.image.src = vaca.url;
vaca.image.addEventListener("load", dibujar);

pollo.image = new Image();
pollo.x = new Array();
pollo.y = new Array();
pollo.image.src = pollo.url;
pollo.image.addEventListener("load", dibujar);

for (var i = 0; i < cantidad; i++) //Inicializa las posiciones
{
  cerdo.x[i] =  aleatorio(0, 6) * 70;
  cerdo.y[i] =  aleatorio(0, 6) * 70;
  pollo.x[i] =  aleatorio(0, 6) * 70;
  pollo.y[i] =  aleatorio(0, 6) * 70;
  vaca.x[i] =  aleatorio(0, 6) * 70;
  vaca.y[i] =  aleatorio(1, 7) * 60;
}
document.addEventListener("keydown", moverTeclado);

function dibujar()
{
    lienzo.drawImage(fondo, 0, 0);
    for (var i = 0; i < cantidad; i++)
    {
      lienzo.drawImage(vaca.image, vaca.x[i], vaca.y[i]);
      lienzo.drawImage(cerdo.image, cerdo.x[i], cerdo.y[i]);
      lienzo.drawImage(pollo.image, pollo.x[i], pollo.y[i]);
    }
    lienzo.drawImage(lobo, xlobo, ylobo);
  }

function moverTeclado(e)
  {
    switch (e.keyCode)
    {
      case teclas.UP:
      if (ylobo > 0)
      {
        ylobo = ylobo - 18.33;
        dibujar();
      }
      break;
      case teclas.DOWN:
      if (ylobo < 458)
      {
        ylobo = ylobo + 18.33;
        dibujar();
      }
      break;
      case teclas.RIGTH:
      if (xlobo < 436)
      {
        xlobo = xlobo + 21.9;
        dibujar();
      }
      break;
      case teclas.LEFT:
      if (xlobo > 0)
      {
        xlobo = xlobo - 21.9;
        dibujar();
      }
      break;
    }
  }

function aleatorio(min, max)
{
    var resultado;
    if (max >= min)
    {
      resultado = Math.floor((Math.random() * (max - min + 1))) + min;
    }
    else
    {
      resultado = Math.ceil((Math.random() * (max - min + 1))) + min;
    }
    return resultado;
}
