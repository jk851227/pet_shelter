const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
})

module.exports = { SkillSchema }