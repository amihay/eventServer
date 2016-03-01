var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var eventSchema = new Schema({
  sessionId: String,
  name: String,
  data: {
      millisecondsFromStart: String,
      smile: String,
      sleep: String,
      lookAtTheScreen: String
  }
});

module.exports = mongoose.model('Event', eventSchema);
