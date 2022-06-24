/* book.js
Students's name: Arish Qureshi
StudentID: 301176321
Date: 22 June, 2022
Web app name: COMP229-F2022-MidTerm-301176321
*/

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    Title: String,
    Description: String,
    Price: String,
    Author: String,
    Genre: String,
    Option1a: String,
    Option2a: String,
    Option3a: String,
    Option4a: String,

    Option1b: String,
    Option2b: String,
    Option3b: String,
    Option4b: String,

    Option1c: String,
    Option2c: String,
    Option3c: String,
    Option4c: String,
    
    Option1d: String,
    Option2d: String,
    Option3d: String,
    Option4d: String,

    startDate: Date,
    endDate: Date
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Book', bookModel);