import 'dotenv/config'
import mongoose from 'mongoose'

class dbClient {

  constructor() { 
    this.conectarBaseDatos();
  }

  async conectarBaseDatos() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`    
    await mongoose.connect(queryString);    
  }

  async cerrarConexion() {
    try {
      await mongoose.disconnect();
      console.log("Conexión a la base de datos cerrada");
    } catch(e) {
      console.error("Error al cerrar la conexión:", e);
    }
  }

}

export default new dbClient();