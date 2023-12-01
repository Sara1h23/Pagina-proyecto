const registerForm = document.querySelector('#Registro')

registerForm.addEventListener('submit', (e)=> {e.preventDeFault()
    
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const newUser = {name, email, password}

    const users = JSON.parse(localStorage.getItem('USERS')) || []

    if (users.some((user) => user.email == email)){
        alert('El usuario ya esta registrado')
    }   else {
        localStorage.setItem('USERS', JSON.stringify([users, newUsers]))
        alert('El usuario fue registrado con exito')
        window.location = './JavaScript/login.html'
    }
})



