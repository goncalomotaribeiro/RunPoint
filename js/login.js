function validarLogin() {
    const txtEmail = document.querySelector("#txtEmailLogin")
    const txtPassword = document.querySelector("#txtPasswordLogin")
    const cbxLembrar = document.querySelector("#cbxLembrar")
    const dadosInvalidos = document.querySelector("#dadosInvalidos")

    if (txtEmail.value == "" || txtPassword.value == "") {
        return false;

    } else {

        let users = []

        if (localStorage.getItem("Users")) {
            users = JSON.parse(localStorage.getItem("Users"))
        }

        for (const user of users) { //Percorre o array users
            if (user.email == txtEmail.value && user.password == txtPassword.value) { //E verifica se dados estão corretos
                flag = 1;
                return true;
            }
        }

        dadosInvalidos.textContent = "Email ou palavra-passe incorretos"
        return false;

       
    }
}
