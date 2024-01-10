"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/routes.ts
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/data', (req, res) => {
    const frenchFighterJet = {
        nom: 'Rafale',
        type: 'Avion de chasse multirôle',
        paysDOrigine: 'France',
        annéeIntroduction: 2001,
        vitesseMaximale: 'Mach 2',
        portée: '3,700 km',
        équipage: '1 ou 2 membres',
        armement: ['Missiles air-air', 'Missiles air-sol', 'Bombs'],
        fabricant: 'Dassault Aviation',
        imageUrl: 'lien_vers_une_image.png',
    };
    res.json(frenchFighterJet);
});
exports.default = router;
