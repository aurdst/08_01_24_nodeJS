import { Router, Request, Response } from 'express';

const router = Router();

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

module.exports = router;