let input = document.getElementById('password')
let btn = document.getElementById('btn')

function visibility(){
    if(input.type=='password'){
        input.type = 'texto'
        btn.innerText = 'Ocultar'
    } else{
        input.type = 'password';
        btn.innerHtml = 'Mostrar'
    }
}