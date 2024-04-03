var knife = require('../model/knife');
// List of all Kinfe
exports.knife_list = function(req, res) {
res.send('NOT IMPLEMENTED: Knife list');
};
// for a specific Knife.
exports.knife_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Knife detail: ' + req.params.id);
};
// Handle Knife create on POST.
exports.knife_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Knife create POST');
};
// Handle Kinfe delete from on DELETE.
exports.knife_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Knife delete DELETE ' + req.params.id);
};
// Handle Kinfe update form on PUT.
exports.knife_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Knife update PUT' + req.params.id);
};
//List of all knifes
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
// VIEWS
// Handle a show all view
exports.knife_view_all_Page = async function(req, res) {
    try{
    theKnife = await knife.find();
    res.render('knife', { title: 'Knife Search Results', results: theKnife });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle knife create on POST.
exports.knife_create_post = async function(req, res) {
    console.log(req.body)
    let document = new knife();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"knife_type":"goat", "cost":12, "size":"large"}
    document.knife_name = req.body.knife_name;
    document.size = req.body.size;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
