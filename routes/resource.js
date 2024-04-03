var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var knife_controller = require('../controllers/knife');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// KNIFE ROUTES ///
// POST request for creating a Knife.
router.post('/knife', knife_controller.knife_create_post);
// DELETE request to delete Knife.
router.delete('/knife/:id', knife_controller.knife_delete);
// PUT request to update Costume.
router.put('/knife/:id', knife_controller.knife_update_put);
// GET request for one Knife.
router.get('/knife/:id', knife_controller.knife_detail);
// GET request for list of all knife items.
router.get('/knife', knife_controller.knife_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"knife", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
