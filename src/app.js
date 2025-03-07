import 'dotenv/config'
import express from 'express'
import routesMascotas from './routes/mascotas.js'
import routesUsuarios from './routes/usuarios.js'
import bodyParser from 'body-parser'
import dbClient from './config/dbClient.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))  

app.use("/mascotas", routesMascotas)
app.use("/users", routesUsuarios)

try {
  const PORT = process.env.PORT || 3000 
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));   
} catch(e) {
  console.log(e)
} 

process.on('SIGINT', () => {
  dbClient.cerrarConexion();
  process.exit(0);
})