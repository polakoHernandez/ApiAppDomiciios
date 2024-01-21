import { Router } from "express";
import { obtenerMensajero } from "../controllers/mensajero_controllers.js";

const routerMensajero = Router();

routerAdmnin.get("/listarAdmins", listarAdmins);
routerAdmnin.get("/obtenerMensajero/:documento", obtenerMensajero);

export default routerMensajero;
