///para insertar las demas posiciones
var tablero;
var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39

};
var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};
var tifis = {
	frenteOK: false,
	atrasURL: "diana-atras.png",
	atrasOK: false,
	derURL: "diana-der.png",
	derOK: false,
	izqURL: "diana-izq.png",
	izqOK: false,
	velocidad: 10, //20
	x:0,
	y:0,
	dibujada: true
};

var liz = {
	imagenOK: false,
	x: 380,
	y: 100 
	
};


function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");
		
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo; 

	tifis.frente = new Image();
	tifis.frente.src = "diana-frente.png";
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = "diana-atras.png";
	tifis.atras.onload = confirmarAtras;

	tifis.izq = new Image();
	tifis.izq.src = "diana-izq.png";
	tifis.izq.onload = confirmarIzq;

	tifis.der = new Image();
	tifis.der.src = "diana-der.png";
	tifis.der.onload = confirmarDer;	

	liz.imagen = new Image();
	liz.imagen.src = "liz.png";
	liz.imagen.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
}

function teclado(evento)
{
	//guardo en codigo el numero de la tecla oprimida
	var codigo = evento.keyCode;
	if(codigo == teclas.UP)
	{
		if(tifis.y>0)
			{
			tifis.y -= tifis.velocidad;
			}
	}
	if(codigo == teclas.DOWN)
	{
		tifis.y += tifis.velocidad;

		if(tifis.y>450)
		{
			tifis.y -= tifis.velocidad;
		}
	}

	if(codigo == teclas.LEFT)
	{
		if(tifis.x > -0.5)
		{
		tifis.x -= tifis.velocidad;
		}
	}
	if(codigo == teclas.RIGHT)
	{
		tifis.x += tifis.velocidad;
		if(tifis.x>465)
			{
				tifis.x -= tifis.velocidad;
			}
	}
	dibujar(codigo);
}


function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}
function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}

function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();
}

function confirmarDer()
{
	tifis.derOK = true;
	dibujar();
}

function confirmarLiz()
{
	liz.imagenOK = true;
	dibujar();
}


function dibujar(direccion)
{	
	//Capa 1: Fondo
	if(fondo.imagenOK)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}

	var tifisOrientada = tifis.frente;

	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
	{

		if(direccion == teclas.DOWN || direccion == undefined)
		{
			tifisOrientada = tifis.frente;
		}

		else if(direccion == teclas.UP)
		{
			tifisOrientada = tifis.atras;
		}

		else if(direccion == teclas.LEFT)
		{
			tifisOrientada = tifis.izq;
		}

		else if(direccion == teclas.RIGHT)
		{
			tifisOrientada = tifis.der;
		}
	}

	tablero.drawImage(tifisOrientada, tifis.x, tifis.y);

	if (liz.imagenOK)
	{
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}
	
}