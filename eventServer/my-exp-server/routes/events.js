var Event = require('../models/event');
var express = require('express');
var router = express.Router();

router.route('/events').get(function(req, res) {
  Event.find(function(err, events) {
    if (err) {
      return res.send(err);
    }

    res.json(events);
  });
});

router.route('/events/:id').get(function(req, res) {
  Event.findOne({ _id: req.params.id}, function(err, eventJson) {
    if (err) {
      return res.send(err);
    }

    res.json(eventJson);
  });
});

router.route('/event').get(function(req, res) {
try {
  var ev = JSON.parse(req.query.data);
  var eventToSave = new Event(ev);

  eventToSave.save(function(err) {
    if (err) {
      return res.send({ status: '-1', message: err });
    }

    res.send({ status: '0', message: 'event added', id: eventToSave._id });
  });
} catch (ex) {
  console.error(ex.stack);
  return res.send({ status: '-1', message: ex.message });
}
});

module.exports = router;
