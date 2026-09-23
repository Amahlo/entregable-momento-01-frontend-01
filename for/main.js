import { validar, mensaje } from "./validar.js";

const USUARIO_CORRECTO = "admin";
const PASSWORD_CORRECTO = "bcd321"
const INTENTOS_MAXIMOS = 3;

function validarAcceso(){
    for (let i = 1; i <= INTENTOS_MAXIMOS; i++) {

        let usuario = prompt(`Ingrese el usuario`);
        let password = prompt(`Ingrese la contraseña`)
        
        let accesoValido = validar(usuario, password, USUARIO_CORRECTO, PASSWORD_CORRECTO)

        mensaje(accesoValido, i, INTENTOS_MAXIMOS);

        if (accesoValido) {
            return;
        }
    }
}
validarAcceso();