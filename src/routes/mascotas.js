import express from "express"
import mascotasController from '../controllers/mascotas.js'
import { verificarToken} from '../helpers/autenticacion.js'
const route = express.Router()

route.post("/", mascotasController.create)
route.get("/:id", mascotasController.getOne)
route.get("/", mascotasController.getAll)
route.put("/:id", verificarToken, mascotasController.update)
route.delete("/:id", verificarToken, mascotasController.delete)
route.post("/:mascotaId/adoptar", verificarToken, mascotasController.adoptar)

export default route