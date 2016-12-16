var mongoose = require("mongoose");
mongoose.connect("mongodb://123.57.143.189:27017/sun");
var PersonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0},
    time: {type: Date, default: Date.now()},
    email: {type: String, default: ''}
});
var PersonModel = db.model("person", PersonSchema);

var personEntity = new PersonModel({
    name: "sun",
    age: 6,
    email: "sun@qq.com"
});
personEntity.save(function (error, doc) {
    if (error) {
        console.log("error :" + error);
    } else {
        console.log(doc);
    }
});