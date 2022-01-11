class Authors{
    constructor(){
        this.mongoose = require('./../database/db.connection');
        this.schema = new this.mongoose.Schema(this.getSchema(),{ timestamps: { updatedAt: 'updatedAt' } });
        this.model = this.mongoose.model('authors', this.schema);
    }

    getSchema(){
        return {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: false
            },
            dob: {
                type: Date,
                required: true
            },
            bio: {
                type: String,
                required: false,
            },
            createdAt: {
                type: Date,
                default: new Date()
            },
            updatedAt: {
                type: Date
            }
        }
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

module.exports = new Authors();