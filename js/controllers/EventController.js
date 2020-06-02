import EventModel from '../models/EventModel.js'

export default class EventController {
    constructor() {
        this.eventModel = new EventModel();
    }

    createEvent(nome, data, edicao, tipo, descricao, capacidade, local, distancia, preco, camisola, fotos, percurso, estado) {
        if (!this.eventModel.getAll().some(event => event.nome === nome && event.edicao === edicao)) {
            this.eventModel.create(enome, data, edicao, tipo, descricao, capacidade, local, distancia, preco, camisola, fotos, percurso, estado);
        } else {
            throw Error(`Event and Edition already exists`);
        }
    }

    editEvent(id, nome, data, edicao, tipo, descricao, capacidade, local, distancia, preco, camisola, fotos, percurso, estado) {
        const eventEdit =  this.eventModel.getEvent(id)
        if (!this.eventModel.getAll().some(event => event.nome === nome) || (eventEdit.nome == nome) ) {
            this.eventModel.edit(id, nome, data, edicao, tipo, descricao, capacidade, local, distancia, preco, camisola, fotos, percurso, estado);
        } else {
            throw Error(`Event already exists`);
        }
    }

    removeEvent(id) {
        this.eventModel.remove(id)
    }

    setCurrentEvent(id) {
        this.eventModel.setCurrentEvent(id)
    }

    getCurrentEvent() {
        return this.eventModel.getCurrentEvent()
    }

    getEvent(id) {
        return this.eventModel.getEvent(id)
    }

    getEvents(filterEmail='', filterType='', isSorted=false) {
        if (isSorted) {
            this.eventModel.sort()
        }

        const events = this.eventModel.getAll()
        
        if (filterEmail==='' && filterType==='') {
            return events
        }

        let filteredEvents = []

        for (const event of events) {
            let filterEventNome = false, filterEventType = false

            if((event.nome.includes(filterNome) && filterNome!='') || filterNome==='') {
                filterEventNome = true
            }

            if((event.tipo===filterType && filterType!='') || filterType==='') {
                filterEventType = true
            }

            // Alimentar filteredEvents
            if(filterEventNome && filterEventType) {
                filteredEvents.push(event)
            }
        }
        return filteredEvents
    }

    
}
