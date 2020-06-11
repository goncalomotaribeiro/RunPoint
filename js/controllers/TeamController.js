import TeamModel from '../models/TeamModel.js'

export default class TeamController {
    constructor() {
        this.teamModel = new TeamModel()
    }

    createTeam(local, nome, localizacao, descricao, foto, membros) {
        if (!this.teamModel.getAll().some(team => team.nome === nome)) {
            this.teamModel.create(nome, localizacao, descricao, foto, membros);
            if(local == 'criarEquipa'){
                this.UserAddTeam(nome);
            }
        } else {
            throw Error(`Team already exists`);
        }
    }

    UserAddTeam(){

    }

    getTeams(filterLocation='', filterName='') {

        const teams = this.teamModel.getAll()
        
        if (filterLocation==='' && filterName==='') {
            return teams
        }

        let filteredEvents = []

        for (const team of teams) {
            let filterEventLocal = false, filterEventName = false

            if((team.localizacao.includes(filterLocation) && filterLocation!='') || filterLocation==='') {
                filterEventLocal = true
            }

            if((team.nome.includes(filterName) && filterName!='') || filterName==='') {
                filterEventName = true
            }

            // Alimentar filteredEvents
            if(filterEventLocal && filterEventName) {
                filteredEvents.push(team)
            }
        }
        return filteredEvents
    }
}