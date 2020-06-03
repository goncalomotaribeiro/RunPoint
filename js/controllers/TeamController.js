import TeamModel from '../models/TeamModel.js'

export default class TeamController {
    constructor() {
        this.teamModel = new TeamModel()
    }

    getTeams(filterLocal) {


        const teams = this.teamModel.getAll()
        return teams;
    }


    /**/
}