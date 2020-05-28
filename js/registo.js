function validarRegisto() {
    const txtEmail = document.querySelector("#txtEmailRegistar")
    const txtPassword = document.querySelector("#txtPasswordRegistar")
    const txtPassword2 = document.querySelector("#txtPasswordRegistar2")
    const cbxTermos = document.querySelector("#cbxTermoseCondicoes")
    const emailHelpId = document.querySelector("#emailHelpId")
    const passHelpId = document.querySelector("#passHelpId")

    if (txtEmail.value == "" || txtPassword.value == "" || txtPassword2.value == "" || cbxTermos.checked == false) {
        return false;

    } else if (txtPassword.value != txtPassword2.value) {
        passHelpId.textContent = "Passwords não coincidem";
        return false;

    } else {
        class User {
            constructor(nome, sobrenome, email, password, localidade, genero, dataNasc, tipo, estado, foto) {
                this.nome = nome
                this.sobrenome = sobrenome
                this.email = email
                this.password = password
                this.localidade = localidade
                this.genero = genero
                this.dataNasc = dataNasc
                this.tipo = tipo
                this.estado = estado
                this.foto = foto
            }
        }

        const NewUser = new User("", "", txtEmail.value, txtPassword.value, "", "", "", "comum", "ativo", "")
        let users = []

        if (localStorage.getItem("Users")) {
            users = JSON.parse(localStorage.getItem("Users"))
        }

        let flag = 0;
        for (const user of users) { //Percorre o array users
            if (user.email == txtEmail.value) { //E verifica se algum dos users tem um email igual
                flag = 1;
                emailHelpId.textContent = "Email já existente"
                return false;
            }
        }

        if (flag != 1) { //se não tem adiciona
            users.push(NewUser)
        }

        localStorage.setItem("Users", JSON.stringify(users))
        return true;
    }
}
