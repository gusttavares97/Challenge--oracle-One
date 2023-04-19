const btncripto = document.querySelector('button.btn#crip');
const textarea  = document.querySelector('textarea.texto');



function btn (){
    const textoEncriptado = criptografar(textarea.value);
    mensagem.value = textoEncriptado;
}


function criptografar(stringEncriptada){
    let codificar = [['e', 'entre'],['i','imes'], ['a' ,'ai'],['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase()
    stringEncriptada = stringEncriptada.normalize('NFD').replace(/[a-zA-Z]/g, '');


   for( let i =0; i< codificar.length; i++){
    if(stringEncriptada.includes(codificar[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(codificar[i][0], codificar[i][0])
    }
   } 
return stringEncriptada;

}

function btnDescript(){
    const textoDescriptado = descriptar(textarea.value);
    mansagem.value = textoDescriptado;
    mensagem.style.backgroundImage = "none";
}

function descriptar (stringDescriptada){
    let descodificar =[ ['ai', 'a'], ['entre', 'e'], ['imes', 'i'], ['ober', 'o'], ['ufat', 'u']];
    
    for(let i = 0; i< descodificar.length; i++){
        if(stringDescriptada.includes(descodificar[i][0])){
            stringDescriptada =stringDescriptada.replaceAll(descodificar[i][0], descodificar[i][1]);
        }
    }
    return stringDescriptada;
}


function btnCopia(){
    const textoCopiado = document.querySelector(textarea.mensagem)
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    window.location.roloand()
}




btnCripto.onclick = btn;
document.querySelector('button.btn#descrip').onclick = btnDescript;
document.querySelector('button.btn-cop').onclick = btnCopia;


