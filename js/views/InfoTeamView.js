import TeamController from '../controllers/TeamController.js'
import UserController from '../controllers/UserController.js'

export default class InfoTeamView {

    constructor() {
        this.teamController = new TeamController()
        this.userController = new UserController()

        this.btnBack = document.querySelector(".btnBack")

        this.main = document.querySelector("main")

        this.userEmail = this.userController.loggedUser();
        this.userData = this.userController.loggedUserData(this.userEmail);

        // Info Painel Equipa
        this.equipaFoto = document.querySelector('#equipaFoto')
        this.equipaNome = document.querySelector('#equipaNome')
        this.equipaMembros = document.querySelector('#equipaMembros')
        this.equipaLocal = document.querySelector('#equipaLocal')
        this.equipaDescricao = document.querySelector('#equipaDescricao')

        // Info Painel Aividade Total
        this.totalKm = document.querySelector('#totalKm')
        this.totalTempo = document.querySelector('#totalTempo')
        this.totalProvas = document.querySelector('#totalProvas')

        // Info Painel Recorde
        this.maiorDist = document.querySelector('#maiorDist')
        this.melhorTempo = document.querySelector('#melhorTempo')
        this.melhorClassif = document.querySelector('#melhorClassif')

        this.renderTable()
        this.bindBackButton()
    }

    bindBackButton() {
        this.btnBack.addEventListener('click', () => {
            event.preventDefault()
            history.back();
        })
    }

    renderTable() {
        const currentTeam = this.teamController.getCurrentTeam()
        let users = this.userController.getUsers()
        let result = `<div class="container-fluid p-0 w-75">
        <div class="row">
            <div class="container col-11 col-xl-7 h-50 barraEquipa">
                <div class="row">
                    <div class="col-12 offset-xl-0 col-xl-1 p-0 mb-4 text-center">
                        <img class="img-fluid" src="/imgs/Interface/shirt.png" alt="">
                    </div>
                    <div class="col-12 offset-xl-0 col-xl-2 p-0 mb-4 text-center mt-3">
                        <span class="infoProva mt-1" style="font-family: PortoSans-RegularItalic; font-size: 17pt">${currentTeam.nome}</span> <br>
                        <span class="infoProva2" style="font-family: PortoSans-LightItalic; font-size: 13pt">Equipa</span>
                    </div>
                    <div class="col-12 offset-xl-0 col-xl-2 p-0 mb-4 text-center mt-3">
                        <span class="infoProva mt-1" style="font-family: PortoSans-RegularItalic; font-size: 17pt">${currentTeam.membros}</span> <br>
                        <span class="infoProva2" style="font-family: PortoSans-LightItalic; font-size: 13pt">Membros</span>
                    </div>
                    <div class="col-12 offset-xl-0 col-xl-2 p-0 mb-4 text-center mt-3 mb-3">
                        <span class="infoProva mt-1" style="font-family: PortoSans-RegularItalic; font-size: 17pt">${currentTeam.localizacao}</span> <br>
                        <span class="infoProva2" style="font-family: PortoSans-LightItalic; font-size: 13pt">Localização</span>
                    </div>
                    <div class="col-12 offset-xl-0 col-xl-5 p-0 mb-4 text-center mt-3">`
                    if(this.userData.equipa == currentTeam.nome){
                        result += `<button type="button" class="btn btn-primary" id="btnMembro">Membro</button>`
                    }else{
                        result += `<button type="button" class="btn btn-primary" id="btnInscrever">Entrar</button>`
                    }
                   result += `</div>
                </div>
                <div class="row mt-4">
                    <label for="text" style="font-family: PortoSans-BoldItalic; font-size: 16pt">Descrição</label>
                    <div class="col-12 form-group">
                        <textarea class="form-control descricao" rows="4" disabled>${currentTeam.descricao}</textarea>
                    </div>
                </div>
                <div class="row mt-4" id="">
                    <div class="col-12">
                        <h3 style="padding-bottom: 20px;">Membros</h3>
                    </div>`
                    for (const user of users) {
                        if(user.equipa == currentTeam.nome){
                            result += `<div class="col-12" style="padding-bottom: 20px;">
                            <img src="/imgs/Interface/fotoPerfil.png" style="width: 5%;">
                            <label id="nomeUtil">${user.nome + " " + user.sobrenome}</label>
                        </div>`
                        }
                    }
                    result += `
                    <div class="col-12" id="divConvidar" style="padding-bottom: 5px;">
                        <hr/>
                        <label for="text">Convidar Membros</label>
                        <button class="btn btn-primary">+</button>
                    </div>
                </div>
            </div>
            <div class="container col-11 col-xl-4 barraEquipa text-center">
                <h3 style="font-size: 15pt; padding-bottom: 30px; ">Resultados em provas</h3>
                <div class="col ">
                    <img style="width: 20%; " src="/imgs/niveis/allstar.png ">
                    <p>x 1</p>
                </div>
                <div class="col ">
                    <img style="width: 20%; " src="/imgs/niveis/prime.png ">
                    <p>x 3</p>
                </div>
                <div class="col ">
                    <img style="width: 20%; " src="/imgs/niveis/experienced.png ">
                    <p>x 15</p>
                </div>
                <div class="col ">
                    <img style="width: 20%; " src="/imgs/niveis/talented.png ">
                    <p>x 10</p>
                </div>
                <div class="col ">
                    <img style="width: 20%; " src="/imgs/niveis/beginner.png ">
                    <p>x 30</p>
                </div>
            </div>
        </div>
    </div> `
        this.main.innerHTML = result
    }
}