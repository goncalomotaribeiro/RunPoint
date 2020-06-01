import UserModel from '../models/UserModel.js'

export default class UserController {
    constructor() {
        this.userModel = new UserModel();
    }

    createUser(local, email, password, nome, sobrenome, localidade, genero, dataNasc, foto, tipo, estado) {
        if (!this.userModel.getAll().some(user => user.email === email)) {
            this.userModel.create(email, password, nome, sobrenome, localidade, genero, dataNasc, foto, tipo, estado);
            if(local == 'landingPage'){
                this.userModel.login(email);
            }
        } else {
            throw Error(`Email already exists`);
        }
    }

    editUser(id, email, password, nome, sobrenome, localidade, genero, dataNasc, foto, tipo, estado) {
        const userEdit =  this.userModel.getUser(id)
        if (!this.userModel.getAll().some(user => user.email === email) || (userEdit.email == email) ) {
            this.userModel.edit(id, email, password, nome, sobrenome, localidade, genero, dataNasc, foto, tipo, estado);
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

    loggedUser(){
        return this.userModel.getLoggedUserKey();
    }

    loggedUserData(email){
        return this.userModel.getLoggedUserData(email);
    }

    checkLoginStatus() {
        return this.userModel.isLogged();
    }

    removeUser(id) {
        this.userModel.remove(id)
    }

    setCurrentUser(id) {
        this.userModel.setCurrentUser(id)
    }

    getCurrentUser() {
        return this.userModel.getCurrentUser()
    }

    getUser(id) {
        return this.userModel.getUser(id)
    }

    getUsers(filterEmail='', filterType='', isSorted=false) {
        if (isSorted) {
            this.userModel.sort()
        }

        const users = this.userModel.getAll()
        
        if (filterEmail==='' && filterType==='') {
            return users
        }

        let filteredUsers = []

        for (const user of users) {
            let filterUserEmail = false, filterUserType = false

            if((user.email.includes(filterEmail) && filterEmail!='') || filterEmail==='') {
                filterUserEmail = true
            }

            if((user.tipo===filterType && filterType!='') || filterType==='') {
                filterUserType = true
            }

            // Alimentar filteredUsers
            if(filterUserEmail && filterUserType) {
                filteredUsers.push(user)
            }
        }
        return filteredUsers
    }

    
}
