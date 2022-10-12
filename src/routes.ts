import { Router, Request, Response } from "express";
import {
  deleteCustomer,
  getCustomerById,
  getCustomers,
  registerCustomer,
  updateCustomer,
} from "./controller/CustomerController";
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
  return response.json({ message: "Hello World" });
});

//ROTAS - PRESTADORES DE SERVIÇO
routes.get("/workers", getWorkers);
routes.get("/workers/:id", getWorkerById);
routes.post("/workers", registerWorker);
routes.put("/workers/:id", updateWorker);
routes.patch("/workers/:id", setWorkerAvaliability);
routes.delete("/workers/:id", deleteWorker);

//ROTAS - CLIENTES
routes.get("/customers", getCustomers);
routes.get("/customers/:id", getCustomerById);
routes.post("/customers", registerCustomer);
routes.put("/customers/:id", updateCustomer);
routes.delete("/customers/:id", deleteCustomer);

export default routes;
