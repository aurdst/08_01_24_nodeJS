"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/aggregatorRoutes.ts
const express_1 = require("express");
const dataRoutes_1 = __importDefault(require("./dataRoutes"));
const airbaseRoutes_1 = __importDefault(require("./airbaseRoutes"));
const aircraftCarrierRoutes_1 = __importDefault(require("./aircraftCarrierRoutes"));
const aggregatorRoutes = (0, express_1.Router)();
aggregatorRoutes.get('/aggregator', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [data, airbase, aircraftCarrier] = yield Promise.all([
            dataRoutes_1.default.getData(),
            airbaseRoutes_1.default.getAirbaseData(),
            aircraftCarrierRoutes_1.default.getAircraftCarrierData(),
        ]);
        const aggregatedData = {
            data,
            airbase,
            aircraftCarrier,
        };
        res.json(aggregatedData);
    }
    catch (error) {
        console.error('Erreur lors de l\'agrégation des données :', error);
        res.status(500).json({ error: 'Erreur lors de l\'agrégation des données' });
    }
}));
exports.default = aggregatorRoutes;
