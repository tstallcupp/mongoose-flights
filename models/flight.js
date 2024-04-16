const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
        required: true,
    }
});

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DFW'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999

    },
    departs: {
        type: Date,
        required: true,
        default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    destinations: [ destinationSchema ]
});

module.exports = mongoose.model('Flight', flightSchema);