


const nombre   = 'Juan';
const apellido = 'Daniel';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo(nombre='Saitama') {
    return 'Hello ' + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );