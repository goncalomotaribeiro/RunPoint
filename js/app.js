import UserView from './views/UserView.js'
import UserAdminView from './views/UserAdminView.js'
import UserPanelView from './views/UserPanelView.js'
import EventPanelView from './views/EventPanelView.js'
import EventAdminView from './views/EventAdminView.js'
import TeamView from './views/TeamView.js'
import InfoTeamView from './views/InfoTeamView.js'
import CreateProfileView from './views/CreateProfileView.js'
import CreateTeamView from './views/CreateTeamView.js'
import InfoEventView from './views/InfoEventView.js'
import EnrollView from './views/EnrollView.js'
import RatingAdminView from './views/RatingAdminView.js'

class App {
    constructor() {
        this.routes = {
            '': [
                UserView,
            ],
            'index': [
                UserView,
            ],
            'utilizadoresAdmin': [
                UserAdminView,
            ],
            'painel': [
                UserPanelView
            ],
            'provas': [
                EventPanelView
            ],
            'provasAdmin': [
                EventAdminView
            ],
            'equipas': [
                TeamView
            ],
            'equipaInfo': [
                InfoTeamView
            ],
            'criarPerfil': [
                CreateProfileView
            ],
            'criarEquipa': [
                CreateTeamView
            ],
            'infoProva': [
                InfoEventView
            ],
            'inscrever': [
                EnrollView
            ],
            'classificacoesAdmin': [
                RatingAdminView
            ]
        };

        // import dummy data for testing purposes
        this._importDataFixtures();

        // instantiate the views mapped in the routes object
        this._instantiateViews();
    }

    _instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];

        const views = this._getViews(route);

        for (const view of views) {
            new view();
        }
    }

    _getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }

    _importDataFixtures() {
        const events = [{
                id: 1,
                nome: 'Meia Maratona do Porto',
                data: '13/01/2020',
                edicao: '1ª',
                tipo: 'Maratona',
                descricao: 'Muito cool pessoal',
                capacidade: '1000',
                local: 'Porto',
                distancia: '40',
                preco: '180',
                camisola: 'camisola',
                fotos: 'fotos',
                percurso: 'percurso',
                estado: 'estado'
            },
            {
                id: 2,
                nome: 'Meia Maratona do Porto',
                data: '13/01/2020',
                edicao: '1ª',
                tipo: 'Maratona',
                descricao: 'Muito cool pessoal',
                capacidade: '1000',
                local: 'Porto',
                distancia: '40',
                preco: '180',
                camisola: 'camisola',
                fotos: 'fotos',
                percurso: 'percurso',
                estado: 'estado'
            },
            {
                id: 3,
                nome: 'Meia Maratona do Porto',
                data: '13/01/2020',
                edicao: '1ª',
                tipo: 'Maratona',
                descricao: 'Muito cool pessoal',
                capacidade: '1000',
                local: 'Porto',
                distancia: '40',
                preco: '180',
                camisola: 'camisola',
                fotos: 'fotos',
                percurso: 'percurso',
                estado: 'estado'
            },
            {
                id: 4,
                nome: 'Meia Maratona do Porto',
                data: '13/01/2020',
                edicao: '1ª',
                tipo: 'Maratona',
                descricao: 'Muito cool pessoal',
                capacidade: '1000',
                local: 'Porto',
                distancia: '40',
                preco: '180',
                camisola: 'camisola',
                fotos: 'fotos',
                percurso: 'percurso',
                estado: 'estado'
            },
            {
                id: 5,
                nome: 'Meia Maratona do Porto',
                data: '13/01/2020',
                edicao: '1ª',
                tipo: 'Maratona',
                descricao: 'Muito cool pessoal',
                capacidade: '1000',
                local: 'Porto',
                distancia: '40',
                preco: '180',
                camisola: 'camisola',
                fotos: 'fotos',
                percurso: 'percurso',
                estado: 'estado'
            },
            {
                id: 6,
                nome: 'Meia Maratona do Porto',
                data: '13/01/2020',
                edicao: '1ª',
                tipo: 'Maratona',
                descricao: 'Muito cool pessoal',
                capacidade: '1000',
                local: 'Porto',
                distancia: '40',
                preco: '180',
                camisola: 'camisola',
                fotos: 'fotos',
                percurso: 'percurso',
                estado: 'estado'
            },
            {
                id: 7,
                nome: 'Meia Maratona do Porto',
                data: '13/01/2020',
                edicao: '1ª',
                tipo: 'Maratona',
                descricao: 'Muito cool pessoal',
                capacidade: '1000',
                local: 'Porto',
                distancia: '40',
                preco: '180',
                camisola: 'camisola',
                fotos: 'fotos',
                percurso: 'percurso',
                estado: 'estado'
            }
        ]

        const teams = [{
                    id: 1,
                    nome: 'Bolt Runners',
                    localizacao: 'Porto',
                    descricao: 'Equipa Fixe',
                    foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                    membros: '3 Membros'
                },
                {
                    id: 2,
                    nome: 'RunPorto',
                    localizacao: 'Gaia',
                    descricao: 'Equipa 2 Fixe',
                    foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                    membros: '2 Membros'
                },
                {
                    id: 3,
                    nome: 'Bolt Runners',
                    localizacao: 'Porto',
                    descricao: 'Equipa Fixe',
                    foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                    membros: '3 Membros'
                },
                {
                    id: 4,
                    nome: 'Bolt Runners',
                    localizacao: 'Porto',
                    descricao: 'Equipa Fixe',
                    foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                    membros: '3 Membros'
                },
                {
                    id: 5,
                    nome: 'Bolt Runners',
                    localizacao: 'Porto',
                    descricao: 'Equipa Fixe',
                    foto: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
                    membros: '3 Membros'
                },
            ]

            /*const ratings = [{
                id: 1,
                id_event: 1,
                id_user: 1,
                dorsal: '1',
                tempo: '2:00:01',
                class_user: '10',
                class_team: '1',
                badge: '/imgs/niveis/allstar.png'
            },
            {
                id: 2,
                id_event: 2,
                id_user: 1,
                dorsal: '1',
                tempo: '1:50:01',
                class_user: '231',
                class_team: '1',
                badge: '/imgs/niveis/beginner.png'
            },
            {
                id: 3,
                id_event: 3,
                id_user: 1,
                dorsal: '1',
                tempo: '2:00:01',
                class_user: '119',
                class_team: '1',
                badge: '/imgs/niveis/experienced.png'
            },
            {
                id: 4,
                id_event: 4,
                id_user: 1,
                dorsal: '1',
                tempo: '2:00:01',
                class_user: '30',
                class_team: '1',
                badge: '/imgs/niveis/prime.png'
            }
        ]
        
        if (!localStorage.ratings) {
            localStorage.setItem('ratings', JSON.stringify(ratings));
        }*/
            // Load the fixtures in case there is no data in the local storage 
        if (!localStorage.teams) {
            localStorage.setItem('teams', JSON.stringify(teams));
        }

        if (!localStorage.events) {
            localStorage.setItem('events', JSON.stringify(events));
        }

        let users = []

        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }
    };

}

new App();