import { Router } from "express";
const router = Router();
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  toggleDone,
  deleteTask,
  edit,
} from "../controllers/tasks.controller";

//Renderizado de la pagina con Controllers
router.get("/", renderTasks);

router.get("/edit/:id", edit);

//ADD NEW TAKS
router.post("/task/add", createTask);

router.post("/edit/:id", renderTaskEdit);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDone);

export default router;
