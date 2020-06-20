import TeamController from '../controllers/TeamController.js'

export default class InfoTeamView {

    constructor() {
        this.teamController = new TeamController()

        this.btnBack = document.querySelector(".btnBack")

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


        this.fillTeamData()
        this.bindBackButton()
    }

    bindBackButton() {
        this.btnBack.addEventListener('click', () => {
            event.preventDefault()
            history.back();
        })
    }

    fillTeamData() {
        const currentTeam = this.teamController.getCurrentTeam()
        this.equipaNome.innerHTML = currentTeam.nome
        this.equipaMembros.innerHTML = currentTeam.membros
        this.equipaLocal.innerHTML = currentTeam.localizacao
        this.equipaDescricao.innerHTML = currentTeam.descricao
    }

}