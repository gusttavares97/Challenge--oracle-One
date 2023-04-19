const btncripto = document.querySelector('button.btn#crip');
const textarea  = document.querySelector('textarea.texto');



function btn (){
    const textoEncriptado = criptografar(textarea.value);
    mensagen.value = textoEncriptado;
}


function criptografar(stringEncriptada){
    let codificar = [['e', 'entre'],['i','imes'], ['a' ,'ai'],['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase()
    stringEncriptada = stringEncriptada.normalize('NFD').replace(/[a-zA-Z]/g, '');


   for( let i =0; i< codificar.length; i++){
    if(stringEncriptada.includes(codificar[i][0])){
        stringEncriptada = stringEncriptada.replaceALL(codificar[i][0], codificar[i][0])
    }
   } 
return stringEncriptada;

}

