import RatingModel from '../models/RatingModel.js'

export default class RatingController {
    constructor() {
        this.ratingModel = new RatingModel();
    }

    createRating(id_event, id_user, dorsal, tempo, class_user, class_team, badge) {
        if (!this.ratingModel.getAll().some(rating => rating.id_event === id_event && rating.id_user === id_user)) {
            this.ratingModel.create(id_event, id_user, dorsal, tempo, class_user, class_team, badge);
        } else {
            throw Error(`Rating already exists`);
        }
    }

    editRating(id, id_event, id_user, dorsal, tempo, class_user, class_team, badge) {
        const ratingEdit =  this.ratingModel.getRating(id)
        if (!this.ratingModel.getAll().some(rating => rating.id_event === id_event && rating.id_user == id_user) || (ratingEdit.id_event === id_event && ratingEdit.id_user == id_user) ) {
            this.ratingModel.edit(id, id_event, id_user, dorsal, tempo, class_user, class_team, badge);
        } else {
            throw Error(`Rating already exists`);
        }
    }

    removeRating(id) {
        this.ratingModel.remove(id)
    }

    setCurrentRating(id) {
        this.ratingModel.setCurrentRating(id)
    }

    getCurrentRating() {
        return this.ratingModel.getCurrentRating()
    }

    getRating(id) {
        return this.ratingModel.getRating(id)
    }

    getRatings(filterProva='', filterType='', isSorted=false) {
        if (isSorted) {
            this.userModel.sort()
        }

        const ratings = this.ratingModel.getAll()
        
        if (filterProva==='' && filterType==='') {
            return ratings
        }

        let filteredRatings = []

        for (const rating of ratings) {
            let filterRatingProva = false, filterRatingType = false

            if((rating.id_event == filterProva && filterProva!='') || filterProva==='') {
                filterRatingProva = true
            }

            if((rating.tipo===filterType && filterType!='') || filterType==='') {
                filterRatingType = true
            }

            // Alimentar filteredRatings
            if(filterRatingProva && filterRatingType) {
                filteredRatings.push(rating)
            }
        }
        return filteredRatings
    }

}
