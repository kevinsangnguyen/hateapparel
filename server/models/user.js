var mongoose = require('mongoose');
// create our friendSchema
var UserSchema = new mongoose.Schema({
  name: {type : String, unique: true },
  created_at: { type: Date, default: new Date },
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('User', UserSchema);