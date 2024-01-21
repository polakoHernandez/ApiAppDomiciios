import express from "express";
import cors from "cors";
import { Router } from "express";
import { connectDb } from "./db.js";
import { PORT } from "./config.js";
import routerAdmnin from "./routes/admin_routes.js";
import routerEmpresa from "./routes/empresa_routes.js";
import routerMensajero from "./routes/mensajero_routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/apiDomicilios", routerAdmnin);
app.use("/apiDomicilios", routerEmpresa);
app.use("/apiDomicilios", routerMensajero);

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
