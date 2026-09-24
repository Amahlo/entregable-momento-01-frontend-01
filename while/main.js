import { validar, mensaje } from "./validar.js";

const USUARIO_CORRECOTO = `admin`;
const PASWORD_CORRECTO = `bcd321`;
const INTENTOS_MAXIMOS = 3;


function validarAcceso () {
    
    let intentosActuales = 0;
    let accesoConcedido = false;
    
    while (intentosActuales < INTENTOS_MAXIMOS && !accesoConcedido) {
        
        intentosActuales++;
        
        let usuario = prompt(`Ingrese el usuario: `);
        let password = prompt(`Ingrese la contraseña: `)

        accesoConcedido = validar(usuario, password, USUARIO_CORRECOTO, PASWORD_CORRECTO);

        mensaje(accesoConcedido, intentosActuales, INTENTOS_MAXIMOS);
    }
}
validarAcceso();