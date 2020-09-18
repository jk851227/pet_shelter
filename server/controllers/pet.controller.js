const Pet = require('../models/pet.model');

module.exports = {
    // Create
    createPet: (req, res) => {
        Pet.findOne({ 'name': req.body.name })
            .then(data => {
                if (data == null) {
                    return Pet.create(req.body)
                } else {
                    res.json({ errors: { name: { message: "This pet name already exists" } } })
                }
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    // Read
    allPets: (req, res) => {
        Pet.find({})
            .then(data => {
                if(data.length > 0){
                    res.json(data)
                } else {
                    res.json({ error: "There are no pets in shelter" })
                }
            })
            .catch(err => res.json(err))
    },

    onePet: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => {
                if(err.kind == "ObjectId"){
                    res.json({ error: "There is no matching pet" })
                } else {
                    res.json(err)
                }
            })
    },

    // Update
    updatePet: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    // Delete
    deletePet: (req, res) => {
        Pet.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}