import UserController from '../controllers/UserController.js'

export default class EditProfileView {

    constructor() {
        this.userController = new UserController();

        //DOM References
        this.userNome = document.querySelector('#txtNovoNome')
        this.userLocalidade = document.querySelector('#sltLocalidade')
        this.userSobrenome = document.querySelector('#txtNovoSobrenome')
        this.userGenero = document.querySelector('#sltGenero')
        this.userMail = document.querySelector('#txtNovoMail')
        this.userDia = document.querySelector('#txtDia')
        this.userMes = document.querySelector('#sltMes')
        this.userAno = document.querySelector('#txtAno')
        this.userPassada = document.querySelector('#sltPassada')
        this.userProva = document.querySelector('#sltProva')
        this.buttonGuardar = document.querySelector('#buttonGuardar')
        this.buttonApagarConta = document.querySelector('#apagarConta')


    }
}