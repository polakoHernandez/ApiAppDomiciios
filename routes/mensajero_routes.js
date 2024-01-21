import { Router } from "express";
import { obtenerMensajero } from "../controllers/mensajero_controllers.js";

const routerMensajero = Router();

routerMensajero.get("/listarAdmins", listarAdmins);
routerMensajero.get("/obtenerMensajero/:documento", obtenerMensajero);

export default routerMensajero;
