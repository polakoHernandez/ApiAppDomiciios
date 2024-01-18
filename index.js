import express from "express";
import cors from "cors";
import { Router } from "express";
import { connectDb } from "./db.js";
import { PORT } from "./config.js";
import routerAdmnin from "./routes/admin_routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/apiDomicilios", routerAdmnin);

// const router = Router();

// router.get("/", async (req, res) => {
//   const connection = await connectDb.getConnection();
//   try {
//     const respuesta = await connection.query("select * from Persona");

//     if (respuesta) {
//       res.status(200).json({ listaExamenes: respuesta[0] });
//     } else {
//       res.status(404).json({ mensaje: "No se encontraron resultados" });
//     }

//     await connection.commit();
//   } catch (error) {
//     console.error("Error en la consulta:", error);
//     res.status(500).json({ error: error.message });

//     await connection.rollback();
//   } finally {
//     connection.release();
//   }
// });

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
