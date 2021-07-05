const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const { Schema } = mongoose;


const VaccineSchema = new Schema({
    Vacid: { type: Number, unique: true, index: true },
    vacname: { type: String, required: true },
    vactype: { type: String, required: true },
    vaccia: String,
    vaccant: Number
});

module.exports = mongoose.model('Vaccines', VaccineSchema);