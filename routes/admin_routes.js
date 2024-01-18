import { Router } from "express";
import { listarAdmins, obtenerAdmin } from "../controllers/admin_controller.js";

const routerAdmnin = Router();

routerAdmnin.get("/listarAdmins", listarAdmins);
routerAdmnin.get("/obtenerAdmin/:documento", obtenerAdmin);

export default routerAdmnin;
