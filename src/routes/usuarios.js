import express from "express"
import usuariosController from '../controllers/usuarios.js'
import { verificarToken } from "../helpers/autenticacion.js"
const route = express.Router()

route.post("/register", usuariosController.register)
route.post("/login", usuariosController.login)
route.get("/profile", verificarToken, usuariosController.profile)
route.get("/:id/mismascotas", usuariosController.misMascotas)

export default route