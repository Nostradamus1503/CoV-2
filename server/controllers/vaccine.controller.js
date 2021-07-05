const Vaccine = require('../models/vaccine');
const measurCtrl = {};

measurCtrl.getVaccines = async(req, res) => {
    const vaccines = await Vaccine.find();
    console.log(vaccines);
    res.json(vaccines);
}
measurCtrl.createVaccine = async(req, res) => {
    const vaccine = new Vaccine(req.body);
    await Vaccine.save();
    res.json({
        'status': 'Vacuna Guardada'
    });
};

measurCtrl.getVaccine = async(req, res) => {
    console.log(req.params.id);
    const vaccine = await Vaccine.find({ sensor_id: req.params.id });
    res.json(vaccine);
};
measurCtrl.editVaccine = async(req, res) => {
    const { id } = req.params;
    const vaccine = {
        const { _id } = req.params;
        vacname,
        vactype,
        vaccia,
        vaccant
    };
    await Vaccine.findByIdAndUpdate(id, { $set: sensorvaccine }, { new: true });
    res.json({ status: 'Vacuna Actualizada' });
};
measurCtrl.deleteVaccine = async(req, res) => {
    await Vaccine.findByIdAndRemove(req.params.id);
    res.json({ status: 'Vacuna Eliminada' })
};
module.exports = measurCtrl;