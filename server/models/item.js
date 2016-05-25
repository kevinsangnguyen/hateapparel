// var mongoose = require('mongoose');
//
// var PollSchema = new mongoose.Schema({
//   user_name: {type : String},
//   question: {type: String, minlength: 8, required: true},
//   option1: {
//   	name: {type: String, minlength: 3, required: true},
//   	votes : {type: Number, default: 0 },
//   },
//   option2: {
//   	name: {type: String, minlength: 3, required: true},
//   	votes : {type: Number, default: 0 },
//   },
//   option3: {
//   	name: {type: String, minlength: 3, required: true},
//   	votes : {type: Number, default: 0 },
//   },
//   option4: {
//   	name: {type: String, minlength: 3, required: true},
//   	votes : {type: Number, default: 0 },
//   },
//   created_at: { type: Date, default: new Date },
// });
// // use the schema to create the model
// // Note that creating a model CREATES the collection in the database (makes the collection plural)
// mongoose.model('Poll', PollSchema);
