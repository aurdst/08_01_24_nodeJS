"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Route pour les données sur la base aérienne
router.get('/airbase', (req, res) => {
    const airbaseData = {
        nom: 'Base Aérienne 123',
        localisation: 'Villeville, France',
        capaciteAvions: 50,
        personnel: 1000,
        statut: 'Opérationnelle',
    };
    res.json(airbaseData);
});
