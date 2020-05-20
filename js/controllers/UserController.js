import UserModel from '../models/UserModel.js'

export default class UserController {
    constructor() {
        this.userModel = new UserModel();
    }

    createUser(email, password, nome, sobrenome, localidade, genero, dataNasc, foto, tipo, estado) {
        if (!this.userModel.getAll().some(user => user.email === email)) {
            this.userModel.create(email, password, nome, sobrenome, localidade, genero, dataNasc, foto, tipo, estado);
        } else {
            throw Error(`Email already exists`);
        }
    }

    loginUser(email, password) {
        if (this.userModel.getAll().some(user => { return user.email === email && user.password === password })) {
            this.userModel.login(email);
            return true;
        } else {
            throw Error('Invalid login!');
        }    
    }

    logoutUser() {
        this.userModel.logout();
    }

    checkLoginStatus() {
        return this.userModel.isLogged();
    }
}
