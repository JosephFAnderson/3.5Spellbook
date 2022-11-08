const { Schema, model } = require('mongoose');

const spellSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sourceBook: {
        type: String,
        required: true,
    },
    sourcePage: {
        type: Number,
        default: 0
    },
    school: {
        type: String,
        required: true
    },
    subSchool: {
        type: String,
        default: "none"
    },
    descriptor: {
        type: String,
        default: "none"
    },
    castBy: [
        {
            name: {
                type: String,
                required: true
            },
            level: {
                type: Number,
                required: true
            }
        }
    ],
    domainSpell: [
        {
            name: {
                type: String,
                required: true
            },
            level: {
                type: Number,
                required: true
            }
        }
    ],
    components: {
        type: String,
        required: true
    },
    castingTime: {
        type: String,
        required: true
    },
    range: {
        type: String,
        required: true
    },
    effectType: {
        type: String,
        required: true
    },
    effect: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    savingThrow: {
        type: String,
        default: "none"
    },
    resistance: {
        type: String,
        default: "no"
    },
    shortDescription: {
        type: String,
        required: true
    },
    mediumDescription: {
        type: String,
        default: "none"
    },
    longDescription: {
        type: String,
        default: "none"
    }
});

const Spell = model('spells', spellSchema);

module.exports = Spell;