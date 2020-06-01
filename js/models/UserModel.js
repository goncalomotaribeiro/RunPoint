export default class UserModel {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
    }

    getAll() {
        return this.users;
    }

    create(email, password, nome, sobrenome, localidade, genero, dataNasc, foto, tipo, estado) {
        const user = {
            id: this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1,
            email: email,
            password: password,
            nome: nome,
            sobrenome: sobrenome,
            localidade: localidade,
            genero: genero,
            dataNasc: dataNasc,
            foto: foto,
            tipo: tipo,
            estado: estado,
        }
        this.users.push(user);
        this._persist();
    }

    edit(id, email, password, nome, sobrenome, localidade, genero, dataNasc, foto, tipo, estado) {
        const users = this.users;

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if(i == id - 1){
                user.email = email;
                user.password = password;
                user.nome = nome;
                user.sobrenome = sobrenome;
                user.localidade = localidade;
                user.genero = genero;
                user.dataNasc = dataNasc;
                user.foto = foto;
                user.tipo = tipo;
                user.estado = estado;
            }
        }
        localStorage.setItem('users', JSON.stringify(users));
        location.reload();
    }

    login(email) {
        sessionStorage.setItem('loggedUser', email);
    }

    logout() {
        sessionStorage.removeItem('loggedUser');
    }

    isLogged() {
        return sessionStorage.getItem('loggedUser') !== null ? true : false;
    }

    getLoggedUserKey(){
        return sessionStorage.getItem('loggedUser')
    }

    getLoggedUserData(email){
        return this.users.find(user => user.email == email)
    }

    _persist() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    sort() {
        this.users.sort(this._compare);
        this._persist();
    }

    setCurrentUser(id) {
        localStorage.setItem("user", id); 
    }

    getCurrentUser() {
        return this.users.find(user => user.id === + localStorage.user)
    }

    
    getUser(id){
        return this.users.find(user => user.id == id)
    }

    remove(id) {
        this.users = this.users.filter(user => user.id != id)
        this._persist()
    }
   
    _compare(userA, userB) {
        if (userA.email < userB.email)
            return -1;
        if (userA.email > userB.email)
            return 1;
        return 0;
    }
}
