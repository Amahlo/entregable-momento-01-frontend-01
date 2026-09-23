export function validar(usuario, password, usuarioCorrecto, passwordCorrecto){
    return(usuario === usuarioCorrecto && password === passwordCorrecto);
}

export function mensaje(accesoValido, intentosActuales, intentosMaximos){
    if (accesoValido) {
        alert(`Bienvenido al sistema`);
    } else if (intentosActuales < intentosMaximos) {
        alert(`Datos incorrectos intento ${intentosActuales} de ${intentosMaximos} intentos`);
    } else {
        alert(`Usuario bloqueado. Ha superado el número de intentos.`);
    }
}