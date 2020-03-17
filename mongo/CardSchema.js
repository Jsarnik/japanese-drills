const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    type: { type: String, required: true },
    english: { type: String, required: true },
    hiragana: { type: String, required: true },
    romaji: { type: String, required: true },
    no_kanji: { type: String, required: false },
    audioUrl:  { type: String, required: false },
    isLesson:  { type: Boolean, default: false },
    level: { type: Number, default: 0 }
});

CardSchema.index({type: 1, english: 1, romaji: 1}, {unique: true});

module.exports = mongoose.model('Card', CardSchema);