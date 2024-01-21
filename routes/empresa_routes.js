import { Router } from "express";
import { listarEmpresas } from "../controllers/empresa_controllers.js";

const routerEmpresa = Router();

routerEmpresa.get("/listarEmpresas", listarEmpresas);

export default routerEmpresa;
