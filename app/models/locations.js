var mongoose = require('mongoose');

module.exports = mongoose.model('Locations', {
    name: String,
    street: String,
    street_number: String,
    person: String,
    category: String,
    longitude: String,
    latitude: String
});