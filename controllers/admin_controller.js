import { connectDb } from "../db.js";

export const listarAdmins = async (req, res) => {
  const connection = await connectDb.getConnection();
  try {
    const respuesta = await connection.query("select * from Persona");

    if (respuesta) {
      res.status(200).json({ listaExamenes: respuesta[0] });
    } else {
      res.status(404).json({ mensaje: "No se encontraron resultados" });
    }

    await connection.commit();
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: error.message });

    await connection.rollback();
  } finally {
    connection.release();
  }
};
