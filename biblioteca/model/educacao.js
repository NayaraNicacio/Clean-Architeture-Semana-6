import mongoose from 'mongoose';// ES MODULE

const projetSchema = new mongoose.Schema({
    projetid: { type: String, unique: true },
    projetname: { type: String },
    projetedress: { type: String },
    projetmedia: { type: String }
});

const Projet = mongoose.model('Projet', projetSchema);

export default Projet; // ES MODULE
