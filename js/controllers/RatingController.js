import RatingModel from '../models/RatingModel.js'

export default class RatingController {
    constructor() {
        this.ratingModel = new RatingModel();
    }

    createRating(id_event, id_user, dorsal, tempo, class_user, class_team, badge) {
        if (!this.ratingModel.getAll().some(rating => rating.id_event === id_event && rating.id_user == id_user)) {
            this.ratingModel.create(id_event, id_user, dorsal, tempo, class_user, class_team, badge);
        } else {
            throw Error(`Rating already exists`);
        }
    }

    editRating(id_event, id_user, dorsal, tempo, class_user, class_team, badge) {
        const ratingEdit =  this.ratingModel.getRating(id)
        if (!this.ratingModel.getAll().some(rating => rating.id_event === id_event && rating.id_user == id_user) || (ratingEdit.id_event === id_event && ratingEdit.id_user == id_user) ) {
            this.ratingModel.edit(id_event, id_user, dorsal, tempo, class_user, class_team, badge);
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

    getRatings() {
        const ratings = this.ratingModel.getAll()
        return ratings
    }
}
