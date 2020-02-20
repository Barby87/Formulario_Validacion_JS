// Declaración de variables
const name = document.getElementById('name');
const email = document.getElementById('email');
const textEmail = document.getElementById('textEmail');
const phone = document.getElementById('phone');
const textPhone = document.getElementById('textPhone');
const textDate =document.getElementById('textDate');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const check = document.getElementById('check');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');

/*********** Validación del campo nombre***********/
// Evento blur se activa cuando el usuario cambia de un campo a otro
name.addEventListener('blur', function() {
    if(this.value == "") {
        console.log('Campo obligatorio');
        // Agregando nueva clase al input para darle estilo a través de CSS
        this.className += " redBorder";
        // Agregando mensaje de error
        textName.innerHTML = "*Campo obligatorio.";
    }else{
        console.log('Correcto!');
        this.className += " greenBorder";
    }
});

// Evento focus se activa cuando el usuario se vuelve a sitúar sobre el campo nombre
name.addEventListener('focus', function(e) {
    console.log(e);
    // Eliminando mensaje de error
    textName.innerHTML = "";
});

// Imput conmáximo de 30 caracteres
name.addEventListener('input', function() {
    if (this.value.length > 30) 
       this.value = this.value.slice(0, 30); 
  });
  

/***********Validación de email***********/
email.addEventListener('blur', function(){
    // Creando nuevo arreglo para verificar la cantidad de @ dentro del string
    let val = email.value;
    let newArr = val.split('@');
    console.log('newArr', newArr);

    // Estructura condicional para validar email
    if(newArr.length != 2 ){
        console.log('No pasó prueba del @!');
        this.className += " redBorder";
        textEmail.innerHTML = '*Ingrese un correo válido';     
    }else{  
        console.log('Prueba del @ exitosa!');
        this.className += ' greenBorder';
    }  

    // Creando nuevo arreglo para verificar si está el elemento 'com' dentro del string
    let newArr2 = val.split('.');
    console.log(newArr2);

    var ultimoIndice =  newArr2.length - 1;
    console.log('ultimoIndice', ultimoIndice);

    newArr2.forEach((e,i,a)=> {
        if( a.indexOf(e) === ultimoIndice ) {
            if(e === 'com'){
                console.log("prueba del .com pasada exitosamente");
                this.className += " greenBorder";
            }else{
                console.log('prueba del .com NO PASÓ');
                this.className += " redBorder";
                textEmail.innerHTML = "*Por favor, ingrese un correo válido.";
            }
        }
    });
});

// Eliminar mensaje de error cuando el usuario vuelva a posarse sobre el campo email
email.addEventListener('focus', function() {
    textEmail.innerHTML = "";
});


/***********Validación de teléfono***************/
phone.addEventListener('focus', function() {
// Agregando el prefijo +569 cuando el usuario se sitúe en este input
    this.value = 569;
});

// Asegurando que el usuario no ingrese más de 8 dígitos
phone.addEventListener('input', function() {
  if (this.value.length > 11) 
     this.value = this.value.slice(0,11); 
});

phone.addEventListener('blur', function() {
    // Asegurando que el usuario no deje el campo vacío ni ingrese menos caracteres de lo que se requiere.
    if(this.value.length == 11) {
        console.log('Muy bien!');
        this.className += " greenBorder";

    }else if (this.value.length == 3){
        console.log('Campo obligatorio');
        this.className += " redBorder";
        textPhone.innerHTML = "*Campo obligatorio";

    }else if(this.value.length > 3 && this.value.length < 11){
        console.log('Teléfono inválido');
        this.className += " redBorder";
        textPhone.innerHTML = "*Por favor, ingrese un teléfono de 8 dígitos.";
    }else{
        console.log('Muy bien!');
        this.className += " redBorder";
    }
});

phone.addEventListener('focus', function(e) {
    console.log(e);
    textPhone.innerHTML = "";
});


/********** Validación de fecha ***********/

day.addEventListener('blur', function() {
    if(this.value.length == 0) {
    this.className += " redBorder";
    textDate.innerHTML = "*Campo obligatorio";

    }else if((parseInt(this.value)) > 31) {
        this.className += " redBorder";
        textDate.innerHTML = "*Día del mes hasta el 31";

    } else {
        this.className += " greenBorder";
    }
});

day.addEventListener('focus', function() {
    textDate.innerHTML = "";
});


month.addEventListener('blur', function() {
    if(this.value.length == 0) {
    this.className += " redBorder";
    textDate.innerHTML = "*Campo obligatorio";

    }else if((parseInt(this.value)) > 12) {
        this.className += " redBorder";
        textDate.innerHTML = "*Mes del 1 al 12";

    } else {
        this.className += " greenBorder";
    }
});

month.addEventListener('focus', function() {
    textDate.innerHTML = "";
});

year.addEventListener('blur', function() {
    if(this.value.length == 0) {
    this.className += " redBorder";
    textDate.innerHTML = "*Campo obligatorio";

    }else if((parseInt(this.value)) > 2002) {
        this.className += " redBorder";
        textDate.innerHTML = "*Usted no es mayor de edad";

    } else {
        this.className += " greenBorder";
    }
});

year.addEventListener('focus', function() {
    textDate.innerHTML = "";
});

