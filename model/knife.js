const mongoose = require("mongoose")
const knifeSchema = new mongoose.Schema({
knife_name: {
    type: String,
    maxlength:[24]
} ,
size: String,
price: {
    type: Number,
    min: [0],
    max: [12345]
} 

});
module.exports = mongoose.model("knife",knifeSchema)

    