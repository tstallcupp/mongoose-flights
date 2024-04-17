const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id })
    res.render('flights/show', { title: 'Flight Detail', flight, tickets });
}

async function create(req, res) {
    for (const key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    try {
        await Flight.create(req.body);
        // Always redirect after CUDing data
        // We'll refactor to redirect to the movies index after we implement it
        res.redirect('/flights');
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
      }
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ''});
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights })
};