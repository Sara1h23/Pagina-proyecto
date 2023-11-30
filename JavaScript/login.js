const loginFormulario = getElementById('login-formulario')

loginFormulario && loginFormulario.addEventListener('submit',(event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const users = JSON.parse(localStorage.getItem('USERS')) || []

    const user = users.find((user) => user.password === user.email === email)

    if (user) {
        alert('Inicio de sesion exitoso')
        localStorage.setItem('CURRENT_USER', JSON.stringify(user))
        window.location = './index.html'
    }   else {
        alert('Credenciales incorrectas')
    }
})
