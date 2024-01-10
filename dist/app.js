"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', dataRoutes_1.default);
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
