import { Router, Request, Response } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "./controller/CategoryController";
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
  return response.json({ message: "API Desenvolvida por Athos Franco de Sá" });
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

//ROTAS - CATEGORIAS
routes.get("/categories", getCategories);
routes.get("/categories/:id", getCategoryById);
routes.post("/categories", createCategory);
routes.put("/categories/:id", updateCategory);
routes.delete("/categories/:id", deleteCategory);

export default routes;
