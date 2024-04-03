const mongoose = require("mongoose")
const knifeSchema = new mongoose.Schema({
knife_name: String,
size: String,
price: Number
})
module.exports = mongoose.model("knife",
knifeSchema)
 