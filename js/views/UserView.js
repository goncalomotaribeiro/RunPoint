import UserController from '../controllers/UserController.js'

export default class UserView {
    constructor() {
        this.userController = new UserController();

        // register DOM
        this.registerForm = document.getElementById('frmRegistar');
        this.registerEmail = document.querySelector("#txtEmailRegistar")
        this.registerPassword = document.querySelector("#txtPasswordRegistar")
        this.registerPassword2 = document.querySelector("#txtPasswordRegistar2")
        this.registerCbxTermos = document.querySelector("#cbxTermoseCondicoes")
        this.registerMessage = document.getElementById('mdlRegisterMessage')

        this.bindAddRegisterForm();

        // login DOM
        this.loginForm = document.getElementById('frmLogin')
        this.loginEmail = document.querySelector("#txtEmailLogin")
        this.loginPassword = document.querySelector("#txtPasswordLogin")
        this.loginCbxLembrar = document.querySelector("#cbxLembrar")
        this.loginMessage = document.getElementById('mdlLoginMessage')
        
        this.bindAddLoginForm(); 
    }

    bindAddRegisterForm() {
        this.registerForm.addEventListener('submit', event => {
            try {
                if (this.registerPassword.value !==this.registerPassword2.value) {
                    throw Error('Password and Confirm Password are not equal');   
                }
                this.userController.createUser('landingPage',this.registerEmail.value, this.registerPassword.value, '', '', '', '', '', '', 'comum','ativo', '', '');
                this.displayRegisterMessage('User registered with success!', 'success');           
            } catch(e) {
                this.displayRegisterMessage(e, 'danger');
                event.preventDefault();
            }
        });
    }

    bindAddLoginForm() {
        this.loginForm.addEventListener('submit', event => {
            
            try {
                this.userController.loginUser(this.loginEmail.value, this.loginPassword.value);
                this.displayLoginMessage('User logged in with success!', 'success');
                //this.updateButtons('login');

            } catch(e) {
                this.displayLoginMessage(e, 'danger');
                event.preventDefault(); 
            }
        });
    }
    
     displayRegisterMessage(message, type) {
        this.registerMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

    displayLoginMessage(message, type) {
        this.loginMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    } 

}
