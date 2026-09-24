export function validar(usuario, password, usuarioCorrecto, passwordCorrecto){
    return(usuario === usuarioCorrecto && password === passwordCorrecto);
}

export function mensaje(accesoConcedido, intentosActuales, intentosMaximos){
    if (accesoConcedido ) {
        alert(`Bienvenido al sistema`);
    } else if (intentosActuales < intentosMaximos) {
        alert(`Datos incorrectos, intento ${intentosActuales} de ${intentosMaximos} intetos`);
    } else {
        alert(`Usuario bloqueado. Has superado el maximo de intentos`);
    }
}