const  express = require('express');
const  router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
// GET /flights (index action)
router.get('/', flightsCtrl.index);
// GET /flights/new (new action)
router.get('/new', flightsCtrl.new);
// POST /flights (create action);
router.post('/', flightsCtrl.create);

module.exports = router;
