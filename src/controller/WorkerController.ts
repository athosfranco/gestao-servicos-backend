import { Request, Response } from "express";
import connection from "../config/ormconfig";

import { Worker } from "../entity/Worker";

const workerRepository = connection.getRepository(Worker);

export const getWorkers = async (request: Request, response: Response) => {
  const workers = await workerRepository.find();
  return response.json(workers);
};

export const getWorkerById = async (request: Request, response: Response) => {
  const worker = await workerRepository.findOne({
    where: { id: parseInt(request.params.id, 10) },
  });
  return response.json(worker);
};

export const registerWorker = async (request: Request, response: Response) => {
  const worker = await workerRepository.save(request.body);
  response.json(worker);
};
export const updateWorker = async (request: Request, response: Response) => {
  const worker = await workerRepository.update(request.params.id, request.body);

  if (worker.affected === 1) {
    const updatedWorker = await workerRepository.findOne({
      where: { id: parseInt(request.params.id, 10) },
    });
    return response.json(updatedWorker);
  } else {
    response.status(404).json({
      message: "Nenhum prestador de serviço encontrado com o ID informado.",
    });
  }
};

export const setWorkerAvaliability = async (
  request: Request,
  response: Response
) => {
  const worker = await workerRepository.update(request.params.id, {
    avaliableToWork: Boolean(request.params.value),
  });

  if (worker.affected === 1) {
    const workerUpdated = await workerRepository.findOne({
      where: { avaliableToWork: Boolean(request.params.avaliableToWork) },
    });
    return response.json({
      message: "Disponibilidade para trabalho atualizada",
    });
  }

  return response.status(404).json({ message: "Algo de errado" });
};

export const deleteWorker = async (request: Request, response: Response) => {
  const worker = await workerRepository.delete(request.params.id);
  if (worker.affected === 1) {
    return response.json({ message: "Deletado com sucesso." });
  } else {
    return response.json({
      message: "Nenhum prestador de serviço identificado com esse ID.",
    });
  }
};
