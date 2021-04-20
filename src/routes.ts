import express, {Router} from "express";
import { SettingsController } from "./controllers/SettingsController";


const routes = Router();

/**
 * Tipos de parametros
 * Route Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query params => filtros de buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 * 
 * }
 */

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

export { routes };