import { Router, Request, Response } from "express";
import {
  deleteWorker,
  getWorkerById,
  getWorkers,
  registerWorker,
  setWorkerAvaliability,
  updateWorker,
} from "./controller/WorkerController";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello!" });
});

//ROTAS - PRESTADORES DE SERVIÇO
routes.get("/workers", getWorkers);
routes.get("/workers/:id", getWorkerById);
routes.post("/workers", registerWorker);
routes.put("/workers/:id", updateWorker);
routes.patch("/workers/:id", setWorkerAvaliability);
routes.delete("/workers/:id", deleteWorker);

export default routes;
