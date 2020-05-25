export default function validarCrearCuenta(valores){
    let errores={};

    //validar nombre de usuario:
    if(!valores.nombre){
        errores.nombre='El nombre es obligatiorio'
    }

    if(!valores.email){
        errores.email='El Email es obligatorio'
  
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email='Email no válido'

    }

    //pass
    if(!valores.password){
        errores.password='El Password es obligatorio';

    }else if(valores.password.length<6){
        errores.password='El Password debe tener al menos 6 caracteres'   
    }
    return errores;
}