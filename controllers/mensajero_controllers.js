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

export const obtenerMensajero = async (req, res) => {
  const { documento, password } = req.params;
  const connection = await connectDb.getConnection();

  if (documento === "") {
    res.status(400).json({ respuesta: "El documento es obligatorio" });
    return;
  } else if (password === "") {
    res.status(400).json({ respuesta: "La contraseña es obligatoria" });
    return;
  }

  try {
    const respuesta = await connection.query(
      `select *from Persona 
            inner join Usuarios on Persona.documento = Usuarios.documento
            inner join Mensajero ON Persona.documento = Mensajero.id_persona
            where Persona.documento = ?
        `,
      [documento]
    );

    if (respuesta[0].length === 0) {
      res.status(404).json({ respuesta: "Mensajero no encontrado" });
    } else if (respuesta[0].length !== 0) {
      const mensajero = respuesta[0][0];

      if (
        documento === mensajero.documento &&
        password === mensajero.contrasena
      ) {
        res.status(200).json({ mensajero: respuesta[0][0] });
      } else if (
        documento !== mensajero.documento ||
        password !== mensajero.contrasena
      ) {
        res.status(401).json({ respuesta: "Credenciales Incorrectas" });
      }
    }

    await connection.commit();
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: error.message });
  } finally {
    connection.release();
  }
};
