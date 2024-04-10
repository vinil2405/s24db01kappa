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

    exports.knife_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await knife.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    exports.knife_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await knife.findById( req.params.id)
    // Do updates of properties
    if(req.body.knife_name)
    toUpdate.knife_name = req.body.knife_name;
    if(req.body.price) toUpdate.price = req.body.price;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    
    // Handle Knife delete on DELETE.
exports.knife_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await knife.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
