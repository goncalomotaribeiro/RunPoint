import UserController from '../controllers/UserController.js'

export default class CriarPerfilView {

    constructor() {
        this.userController = new UserController();
        
        //Form Adicionar
        this.frmNewUser = document.querySelector("#frmNewUser")
        this.addNome = document.querySelector("#addNome")
        this.addSobrenome = document.querySelector("#addSobrenome")
        this.addLocalidade = document.querySelector("#addLocalidade")
        this.addGenero = document.querySelector("#addGenero")
        this.addFoto = document.querySelector("#file-input");
        this.addDataNasc = document.querySelector("#addDataNasc")
        this.btnCriarPerfil = document.querySelector("#btnCriarPerfil")

        this.bindAddEditEvent()
        this.displayUserImage()
    }

    bindAddEditEvent(){
        this.btnCriarPerfil.addEventListener('click', () => {
            
            let userEmail = this.userController.loggedUser();
            let userData = this.userController.loggedUserData(userEmail);

            this.userController.editUser(
            userData.id,
            userData.email,
            userData.password,
            this.addNome.value,
            this.addSobrenome.value,
            this.addLocalidade.value,
            this.addGenero.value,
            this.addDataNasc.value,
            this.addFoto.value,
            userData.tipo,
            userData.estado,
            userData.equipa,
            userData.listaPessoal
            );
        })
    }

    displayUserImage(){      
        this.addFoto.onchange =  evt => {
            let newImg;
            let tgt = evt.target || window.event.srcElement,
                files = tgt.files;
        
            if (FileReader && files && files.length) {
                let fr = new FileReader();
                fr.onload = function () {
                    document.querySelector('#imagePreview').src = fr.result;
                }
                fr.readAsDataURL(files[0]);
            }
        }
    }

    SetImage(){      
        let fullPath = document.getElementById('#imagePreview').src;
        let filename = fullPath.replace(/^.*[\\\/]/, '');
        this.addFoto = filename;

        success = copy(document.querySelector('#imagePreview').src , 'C:\\Users\\gonca\\Documents\\_ESMAD\\PROJETO 1\\Implementação\\RunPoint\\imgs\\fotosPerfil\\' + filename)
        if (!success){
            alert("Could Not Copy!")
        }
    }
}
