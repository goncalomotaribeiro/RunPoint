import TeamController from '../controllers/TeamController.js'

export default class InfoTeamView {

    constructor() {
        this.teamController = new TeamController()

        // Info Painel Equipa
        this.equipaFoto = document.querySelector('#equipaFoto')
        this.equipaNome = document.querySelector('#equipaNome')
        this.equipaMembros = document.querySelector('#equipaMembros')
        this.equipaLocal = document.querySelector('#equipaLocal')
        this.equipaDescricao = document.querySelector('#equipaDescricao')

        // Info Painel Aividade Total
        //this.equipaNome = document.querySelector('#equipaNome')
        //this.equipaMembros = document.querySelector('#equipaMembros')
        //this.equipaLocal = document.querySelector('#equipaLocal')
        //this.equipaDescricao = document.querySelector('#equipaDescricao')

        this.fillTeamData()
            //this.bindBackButton()
    }

    fillTeamData() {
        const currentTeam = this.teamController.getTeams()
        this.equipaFoto.innerHTML = currentTeam.foto
        this.equipaNome.innerHTML = currentTeam.nome
        this.equipaMembros.innerHTML = currentTeam.membros
        this.equipaLocal.innerHTML = currentTeam.localizacao
        this.equipaDescricao.innerHTML = currentTeam.descricao
    }
}