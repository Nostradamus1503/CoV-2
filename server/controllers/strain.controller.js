const Strain = require('../models/strain');
const strainCtrl = {};

strainCtrl.getStrains = async(req, res) => {
    const strains = await Strain.find();
    console.log(strains);
    res.json(strains);
}
strainCtrl.createStrain = async(req, res) => {
    const strain = new Strain({
        strainid: req.body.strainid,
        strainname: req.body.strainname,
        straintype: req.body.straintype,
        straincountry: req.body.straincountry
    });
    await strain.save();
    res.json({
        'status': 'Virus Guardado'
    });
};

strainCtrl.getStrain = async(req, res) => {
    console.log(req.params.id);
    const strain = await Strain.findById(req.params.id);
    res.json(strain);
};
strainCtrl.editStrain = async(req, res) => {
    const { _id } = req.params;
    const strain = {
        strainid: req.body.strainid,
        strainname: req.body.strainname,
        straintype: req.body.straintype,
        straincountry: req.body.straincountry
    };
    await Strain.findByIdAndUpdate(req.params.id, { $set: strain }, { new: true });
    res.json({ status: 'Virus Actualizado' });
};
strainCtrl.deleteStrain = async(req, res) => {
    await Strain.findByIdAndDelete(req.params.id);
    res.json({ status: 'Virus Eliminado' })
};
module.exports = strainCtrl;