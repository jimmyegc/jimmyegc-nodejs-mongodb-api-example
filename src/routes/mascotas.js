import express from "express"
import mascotaController from '../controllers/mascotaController.js'
const route = express.Router()

route.post("/", mascotaController.create)
route.get("/:id", mascotaController.getOne)
route.get("/", mascotaController.getAll)
route.put("/:id", mascotaController.update)
route.delete("/:id", mascotaController.delete)

export default route