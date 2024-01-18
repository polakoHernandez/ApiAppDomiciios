import { Router } from "express";
import { listarAdmins } from "../controllers/admin_controller.js";

const routerAdmnin = Router();

routerAdmnin.get("/listarAdmins", listarAdmins);

export default routerAdmnin;
