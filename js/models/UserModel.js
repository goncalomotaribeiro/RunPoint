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

    login(email) {
        sessionStorage.setItem('loggedUser', email);
    }

    logout() {
        sessionStorage.removeItem('loggedUser');
    }

    isLogged() {
        return sessionStorage.getItem('loggedUser') !== null ? true : false;
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
        return this.users.find(user => user.id === +localStorage.user)
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
