const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket
}

async function create(req, res) {
    req.body.flight = req.params.id;
    const ticket = await Ticket.create(req.body);
    res.redirect(`/flights/${req.params.id}`);
}

function newTicket(req, res) {
    const flightId = req.params.id
    res.redirect('tickets/new', { flightId })
}