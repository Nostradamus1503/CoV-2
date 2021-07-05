const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const { Schema } = mongoose;


const StrainSchema = new Schema({
    strainid: { type: Number, unique: true, index: true },
    strainname: { type: String, required: true },
    straintype: String,
    straincountry: String
});

module.exports = mongoose.model('Strains', StrainSchema);