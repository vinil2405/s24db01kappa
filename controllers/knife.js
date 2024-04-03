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
