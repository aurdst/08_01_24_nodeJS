import { Router, Request, Response } from 'express';

router.get('/aircraftCarrier', (req: Request, res: Response) => {
    const aircraftCarrierData = {
      nom: 'Charles de Gaulle',
      type: 'Porte-avions nucléaire',
      paysDOrigine: 'France',
      annéeIntroduction: 2001,
      longueur: '261.5 mètres',
      déplacement: '42 500 tonnes',
      équipage: 2000,
      statut: 'Opérationnel',
    };
  
    res.json(aircraftCarrierData);
  });
  
  module.exports = router;