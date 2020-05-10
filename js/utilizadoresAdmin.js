window.onload = function carregarUtilizadores() {

    let users = []

    if (localStorage.getItem("Users")) {
        users = JSON.parse(localStorage.getItem("Users"))
    }

    for (const user of users) { //Percorre o array users
        $('#example').DataTable().row.add([
            user.nome, user.sobrenome, user.email, user.password, user.localidade, user.genero, user.dataNasc, user.tipo, user.foto, '<img src="../imgs/Interface/editar.png" alt="" class="editar"> <img src="../imgs/Interface/eliminar.png" alt="" class="eliminar">'
        ]).draw();
    }
}

function adicionarAtleta(form){
    let foto = document.getElementById("file-input").value;
    let tipo = "";
    
    if(form.chxAdmin.checked){
        tipo = "admin";
    }else{
        tipo = "comum";
    }

    class User {
        constructor(nome, sobrenome, email, password, localidade, genero, dataNasc, tipo, foto) {
            this.nome = nome
            this.sobrenome = sobrenome
            this.email = email
            this.password = password
            this.localidade = localidade
            this.genero = genero
            this.dataNasc = dataNasc
            this.tipo = tipo
            this.foto = foto
        }
    }
    const NewUser = new User(form.txtNome.value, form.txtSobrenome.value, form.txtEmail.value, form.txtPassword.value, form.txtLocalidade.value, form.genero.value, form.dataNasc.value, tipo, foto)
    let users = []

    if (localStorage.getItem("Users")) {
        users = JSON.parse(localStorage.getItem("Users"))
    }

    let flag = 0;
    for (const user of users) { //Percorre o array users
        if (user.email == form.txtEmail.value) { //E verifica se algum dos users tem um email igual
            flag = 1;
            emailHelpId.textContent = "Email já existente"
            return false;
        }
    }

    if (flag != 1) { //se não tem adiciona
        users.push(NewUser)
    }

    localStorage.setItem("Users", JSON.stringify(users))
}

function editarAtleta(form){

    let users = []
    let foto = document.getElementById("foto").value;
    let tipo = "";
    
    if(form.chxAdmin.checked){
        tipo = "admin";
    }else{
        tipo = "comum";
    }

    if (localStorage.getItem("Users")) {
        users = JSON.parse(localStorage.getItem("Users"))
    }

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if(i == form.txtIndex.value){
            user.nome = form.txtNome.value;
            user.sobrenome = form.txtSobrenome.value;
            user.email = form.txtEmail.value;
            user.password = form.txtPassword.value;
            user.localidade = form.txtLocalidade.value;
            user.genero = form.genero.value;
            user.dataNasc = form.dataNasc.value;
            user.tipo = tipo;
            user.foto = foto;
        }
        
    }

    localStorage.setItem("Users", JSON.stringify(users))
}




