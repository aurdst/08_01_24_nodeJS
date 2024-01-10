// src/routes/aggregatorRoutes.ts
import { Router, Request, Response } from 'express';
import dataRoutes from './dataRoutes';
import airbaseRoutes from './airbaseRoutes';
import aircraftCarrierRoutes from './aircraftCarrierRoutes';

const aggregatorRoutes = Router();

aggregatorRoutes.get('/aggregator', async (req: Request, res: Response) => {
  try {
    const [data, airbase, aircraftCarrier] = await Promise.all([
      dataRoutes.getData(),
      airbaseRoutes.getAirbaseData(),
      aircraftCarrierRoutes.getAircraftCarrierData(),
    ]);

    const aggregatedData = {
      data,
      airbase,
      aircraftCarrier,
    };

    res.json(aggregatedData);
  } catch (error) {
    console.error('Erreur lors de l\'agrégation des données :', error);
    res.status(500).json({ error: 'Erreur lors de l\'agrégation des données' });
  }
});

export default aggregatorRoutes;
