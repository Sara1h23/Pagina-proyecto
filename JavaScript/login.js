let input = document.getElementById('contrasena')
let btn = document.getElementById('boton')

function visibility(){
    if(input.type=='password'){
        input.type = 'texto'
        btn.innerText = 'Ocultar'
    } else{
        input.type = 'password';
        btn.innerHtml = 'Mostrar'
    }
}