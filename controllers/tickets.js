const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

module.exports = {
    create,
    new: newTicket
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id;
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`);
}

function newTicket(req, res) {
    Flight.findById(req.params.id)
        .then(flight => res.render('tickets/new', { title: 'Add Ticket', flight: flight }))
        .catch(err => {
            console.log(err);
        });
}