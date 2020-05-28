
window.onload = function carregarUtilizadores() {

    let users = []

    if (localStorage.getItem("Users")) {
        users = JSON.parse(localStorage.getItem("Users"))
    }

    for (const user of users) { //Percorre o array users
        $('#example').DataTable().row.add([
            user.email, user.password, user.tipo, '<img src="../imgs/Interface/eliminar.png" alt="" class="eliminar" onclick="eliminarUtilizador()">'
        ]).draw();
    }
}

function eliminarUtilizador() {
    
    let table = $('#example').DataTable();
    let data = table.row(this).data();
    alert(data)
    let users = []

    if (localStorage.getItem("Users")) {
        users = JSON.parse(localStorage.getItem("Users"))
    }
    let i = 0
    for (const user of users) { //Percorre o array users
        if (data[0] == user.email) {
            users.splice(i, 1);
        }
        i++;
    }
    localStorage.setItem("Users", JSON.stringify(users))
}


//ELIMINAR UTILIZADOR


