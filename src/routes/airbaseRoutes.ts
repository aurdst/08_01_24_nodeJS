import { Router, Request, Response } from 'express';

// Route pour les données sur la base aérienne
router.get('/airbase', (req: Request, res: Response) => {
  const airbaseData = {
    nom: 'Base Aérienne 123',
    localisation: 'Villeville, France',
    capaciteAvions: 50,
    personnel: 1000,
    statut: 'Opérationnelle',
  };

  res.json(airbaseData);
});