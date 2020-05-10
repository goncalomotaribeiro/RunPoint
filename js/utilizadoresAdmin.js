window.onload = function carregarUtilizadores() {

    let users = []

    if (localStorage.getItem("Users")) {
        users = JSON.parse(localStorage.getItem("Users"))
    }

    for (const user of users) { //Percorre o array users
        $('#example').DataTable().row.add([
            user.nome, user.sobrenome, user.email, user.password, user.localidade, user.genero, user.dataNasc, user.tipo, user.foto, '<img src="../imgs/Interface/editar.png" alt="" class="editar"> <img src="../imgs/Interface/eliminar.png" alt="" class="eliminar"> '
        ]).draw();
    }
}





