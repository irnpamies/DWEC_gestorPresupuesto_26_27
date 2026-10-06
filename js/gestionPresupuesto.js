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
    
    function anyadirGasto(gasto) {
        gasto.id = idGasto;
        idGasto++;
        gastos.push(gasto);
    }

    //Función de 1 parámetro que eliminará de la variable global gastos el objeto gasto 
    // cuyo id haya sido pasado como parámetro. Si no existe un gasto con el id 
    // proporcionado, no hará nada.
    function borrarGasto(id) {
        let indice = gastos.findIndex(gasto => gasto.id === id) 
        if (indice !== -1) {
            gastos.splice(indice, 1);
        }
    }

    //Función sin parámetros que devuelva la suma de todos los gastos creados en la 
    // variable global gastos. De momento no los agruparemos por período temporal (lo 
    // haremos en sucesivas prácticas).
    function calcularTotalGastos() {
        let total = 0;
        if (gastos.length > 0) {
            for (let gasto of gastos) {
                total += gasto.valor;
            }
        }
        return total;
    }

    //Función sin parámetros que devuelva el balance (presupuesto - gastos totales) 
    // disponible. De momento no lo obtendremos por período temporal (lo haremos en 
    // sucesivas prácticas). Puede utilizar a su vez la función calcularTotalGastos.
    function calcularBalance() {
        let totalGastos = calcularTotalGastos();
        return (presupuesto - totalGastos);        
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
