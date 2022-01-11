class Books{
    constructor(){
        this.mongoose = require('./../database/db.connection');
        this.schema = new this.mongoose.Schema(this.getSchema());
        this.model = this.mongoose.model('books', this.schema);
    }

    getSchema(Schema){
        return {
            title: {
                type: String,
                required: true
            },
            author: {
                type: ObjectId,
                required: true
            },
            description: {
                type: String,
                required: false
            },
            publishedDate: {
                type: Date,
                required: true
            },
            active: {
                type: Boolean,
                required: true,
                default: true
            }
        };
    }

    async insert(doc){
        try{
            this.doc = new this.model(doc);
            await this.doc.validate();
            await this.doc.save();
            return {response: true, data: 'Record Created'}
        }
        catch(err){
            return {response: false, data: err.message}
        }
    }
}

module.exports = new Books();