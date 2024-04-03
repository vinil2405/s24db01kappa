const mongoose = require("mongoose")
const knifeSchema = new mongoose.Schema({
knife_name: String,
size: String,
price: Number
})
module.exports = mongoose.model("knife",
knifeSchema)
 // List of all Costumes
exports.knife_list = async function(req, res) {
    try{
    theknife = await knife.find();
    res.send(theknife);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    