// src/routes/routes.ts
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/data', (req: Request, res: Response) => {
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

export default router;
