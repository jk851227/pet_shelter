const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name:{
        type: String
    }
})

module.exports = { SkillSchema }