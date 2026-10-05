'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciadonpm audit fix

// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;


function actualizarPresupuesto(valor) {    
    if (valor >= 0 && typeof valor === "number") {
        presupuesto = valor;
        return valor;
    }
    else {
        console.log('blablabla')
        return -1;
    }
}


function mostrarPresupuesto() {    
    return `Tu presupuesto actual es de ${presupuesto} €`
}


function CrearGasto(descripcion, valor, fecha, ...etiquetas) {    
    if (valor >= 0 && typeof valor === "number") {
        this.descripcion = descripcion;
        this.valor = valor;            
    } else {
        this.descripcion = descripcion;
        this.valor = 0;
    }

    let fechaParam = Date.parse(fecha);
    if (fecha && !isNaN(fechaParam)) {
        this.fecha = fechaParam;
    } else {
        this.fecha = Date.now();
    }

    this.etiquetas = [];
    //TODO ¿¿Cómo se implementa esta función??  Función de un número indeterminado de 
    // parámetros que añadirá las etiquetas pasadas como parámetro a la 
    // propiedad etiquetas del objeto. Deberá comprobar que no se 
    // creen duplicados.
    this.anyadirEtiquetas = function(...etiquetas) {
        for (let i = 0; i < etiquetas.length; i++) {
            if (!this.etiquetas.includes(etiquetas[i])) {
                this.etiquetas.push(etiquetas[i])
            }
        }
    }

    if (etiquetas.length > 0) {
        this.anyadirEtiquetas(...etiquetas);
    }     
    
    this.mostrarGasto = function() {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`
    }

    
    this.actualizarDescripcion = function(nuevaDesc) {
        this.descripcion = nuevaDesc;
    }

    // actualizarValor - Función de 1 parámetro que actualizará el valor del objeto. Se encargará de comprobar que el valor introducido sea un número no negativo; 
    // en caso contrario, dejará el valor como estaba.
    this.actualizarValor = function(valor) {
        if (valor >= 0) {
            this.valor = valor;
        }
    }

    //TODO: actualizarFecha - Función de 1 parámetro que actualizará la  
    // propiedad fecha del objeto. Deberá recibir la fecha en formato string 
    // que sea entendible por la función Date.parse. Si la fecha no es
    // válida, se dejará sin modificar.
    this.actualizarFecha = function(fecha) {
        let fechaParam = Date.parse(fecha);
        if (isNaN(fechaParam)) {
            this.fecha = Date.now();
        } else {
            this.fecha = fechaParam;
        }
    }
}


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
    function listarGastos() {
        return gastos;    
    }

    //TODO: Función de 1 parámetro que realizará tres tareas: 
    // o Añadir al objeto gasto pasado como parámetro una propiedad id 
    // cuyo valor será el valor actual de la variable global idGasto. 
    // o Incrementar el valor de la variable global idGasto. 
    // o Añadir el objeto gasto pasado como parámetro a la variable global 
    // gastos. El gasto se debe añadir al final del array.
    function anyadirGasto(gasto) {
        gasto.id = idGasto;
        idGasto++;
        gastos.push(gasto);
    }

    function borrarGasto() {

    }

    function calcularTotalGastos() {

    }

    function calcularBalance() {
        
    }

export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    CrearGasto
}
