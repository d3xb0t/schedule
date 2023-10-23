class MongooseDriver {
    constructor(model) {
        this.model = model;
    }

    create(body) {
        return this.model.create(body)
    }

    find() {
        return this.model.find()
    }

    delete(tid) {
        return this.model.deleteOne({_id: tid})
    }
}

export default MongooseDriver