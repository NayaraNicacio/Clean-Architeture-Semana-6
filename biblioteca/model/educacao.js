import mongoose from 'mongoose';

const projetSchema = new mongoose.Schema({
    projetid: { type: String, unique: true },
    projetname: { type: String },
    projetedress: { type: String },
    projetmedia: { type: String }
});

const Projet = mongoose.model('Projet', projetSchema);

export default Projet;
