import TeamModel from '../models/TeamModel'

export default class TeamController {
    constructor() {
        this.teamModel = new TeamModel()
    }

    addTeam(nome, localizacao, descricao, foto, membros) {
        if (!this.teamModel.getAll().some(team => team.name === name)) {
            this.teamModel.create(
                nome,
                localizacao,
                descricao,
                foto,
                membros
            );
        } else {
            throw Error(`Equipa com o nome "${name}" já existe!`);
        }
    }

    removeTeam(name) {
        this.teamModel.remove(name)
    }

    setCurrentTeam(id) {
        this.teamModel.setCurrentTeam(id)
    }

    getCurrentTeam() {
        return this.teamModel.getCurrentTeam()
    }

    /*

    removeBand(name) {
        this.bandModel.remove(name)
    }

    setCurrentBand(id) {
        this.bandModel.setCurrentBand(id)
    }

    getCurrentBand() {
        return this.bandModel.getCurrentBand()
    }


    getBands(filterName='', filterGenre='', isSorted=false) {

        if (isSorted) {
            this.bandModel.sort()
        }

        const bands = this.bandModel.getAll()
        
        if (filterName==='' && filterGenre==='') {
            return bands
        }

        let filteredBands = []

        for (const band of bands) {
            let filterBandName = false, filterBandGenre = false

            if((band.name.includes(filterName) && filterName!='') || filterName==='') {
                filterBandName = true
            }

            if((band.genre===filterGenre && filterGenre!='') || filterGenre==='') {
                filterBandGenre = true
            }

            // Alimentar filteredBands
            if(filterBandName && filterBandGenre) {
                filteredBands.push(band)
            }
        }

        return filteredBands*/
}