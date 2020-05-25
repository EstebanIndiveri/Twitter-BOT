export default function validarCrearTweet(valores){
    let errores={};

    //validar nombre de usuario:
    if(!valores.nombre){
        errores.nombre='El nombre es obligatiorio'
    }

    // if(!valores.url){
    //     errores.url="La dirección web del producto el obligatoria"
    // }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)){
    //     errores.url="La dirección web es incorrecta"
    // }
    
    //validar descripcion:
    if(!valores.descripcion){
        errores.descripcion="Agrega una descripción de tu producto"
    }
 
    return errores;
}