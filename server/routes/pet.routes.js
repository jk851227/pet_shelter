const petController = require('../controllers/pet.controller')

module.exports = app => {
    // C
    app.post("/api/pets", petController.createPet);
    // R
    app.get("/api/pets", petController.allPets);
    app.get("/api/pets/:id", petController.onePet);
    // U
    app.patch("/api/pets/:id", petController.updatePet);
    app.patch("/api/pets/:id/skill", petController.addSkill);
    // D
    app.delete("/api/pets/:id", petController.deletePet);
}