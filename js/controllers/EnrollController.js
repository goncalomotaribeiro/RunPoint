import EnrollModel from '../models/EnrollModel.js'

export default class EnrollController {
    constructor() {
        this.enrollModel = new EnrollModel();
    }

    createEnroll(atletaId, provaId, nome, nrIdentidade, telefone, endereco, codPostal, cidade, tipo) {
        if (!this.enrollModel.getAll().some(enroll => enroll.atletaId === atletaId && enroll.provaId == provaId)) {
            this.enrollModel.create(atletaId, provaId, nome, nrIdentidade, telefone, endereco, codPostal, cidade, tipo);
        } else {
            throw Error(`Enroll already exists`);
        }
    }

    editEnroll(id, atletaId, provaId, nome, nrIdentidade, telefone, endereco, codPostal, cidade, tipo) {
        const enrollEdit =  this.enrollModel.getEnroll(id)
        if (!this.enrollModel.getAll().some(enroll => enroll.atletaId === atletaId) || (enrollEdit.atletaId == atletaId) ) {
            this.enrollModel.edit(id, atletaId, provaId, nome, nrIdentidade, telefone, endereco, codPostal, cidade, tipo);
        } else {
            throw Error(`Enroll already exists`);
        }
    }

    removeEnroll(id) {
        this.enrollModel.remove(id)
    }

    setCurrentEnroll(id) {
        this.enrollModel.setCurrentEnroll(id)
    }

    getCurrentEnroll() {
        return this.enrollModel.getCurrentEnroll()
    }

    getEnroll(id) {
        return this.enrollModel.getEnroll(id)
    }

    getEnrolls(filterEmail='', filterType='', isSorted=false) {
        if (isSorted) {
            this.enrollModel.sort()
        }

        const enrolls = this.enrollModel.getAll()
        
        if (filterEmail==='' && filterType==='') {
            return enrolls
        }

        let filteredEnrolls = []

        for (const enroll of enrolls) {
            let filterEnrollEmail = false, filterEnrollType = false

            if((enroll.nome.includes(filterEmail) && filterEmail!='') || filterEmail==='') {
                filterEnrollEmail = true
            }

            if((enroll.tipo===filterType && filterType!='') || filterType==='') {
                filterEnrollType = true
            }

            // Alimentar filteredEnrolls
            if(filterEnrollEmail && filterEnrollType) {
                filteredEnrolls.push(enroll)
            }
        }
        return filteredEnrolls
    }

    
}
