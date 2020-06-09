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

    getEvents(filterLocation='', filterType='') {

        const events = this.eventModel.getAll()
        
        if (filterLocation==='' && filterType==='') {
            return events
        }

        let filteredEvents = []

        for (const event of events) {
            let filterEventLocal = false, filterEventType = false

            if((event.local.includes(filterLocation) && filterLocation!='') || filterLocation==='') {
                filterEventLocal = true
            }

            if((event.tipo===filterType && filterType!='') || filterType==='') {
                filterEventType = true
            }

            // Alimentar filteredEvents
            if(filterEventLocal && filterEventType) {
                filteredEvents.push(event)
            }
        }
        return filteredEvents
    }

    
}
