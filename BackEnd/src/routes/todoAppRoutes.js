import { Router } from "express"
import tasksControllers from "../controllers/taskConstrollers.js"
import validators from "../middlewares/validators.js"

const todoAppRouter = Router()

todoAppRouter.get('/', tasksControllers.istALive)
todoAppRouter.get('/tasks', tasksControllers.getTasks)
todoAppRouter.post('/tasks', validators.validateTask, tasksControllers.addTask)
todoAppRouter.delete('/tasks/:tid', tasksControllers.deleteTask)

export default todoAppRouter