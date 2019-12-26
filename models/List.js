const {Schema, model} = require('mongoose')
//const mongoose_delete = require('mongoose-delete');

const schema = new Schema({
    title: {
    type: String,
    required: true
    },
    mark: {
    type: String,
    required: true
    }
    //id: mongoose.schema.Types.ObjectId

})

//schema.plugin(require('mongoose_delete'))

module.exports = model('List', schema)

// const map = model('List', schema)
// map.remove({}, function(err) { 
//     console.log('collection removed') 
//  });

