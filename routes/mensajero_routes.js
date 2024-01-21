import { Router } from "express";
import { obtenerMensajero } from "../controllers/mensajero_controllers.js";

const routerMensajero = Router();

routerMensajero.post("/obtenerMensajero", obtenerMensajero);

export default routerMensajero;
