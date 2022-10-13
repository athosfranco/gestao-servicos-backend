import { Request, Response } from "express";
import connection from "../config/ormconfig";

import { Customer } from "../entity/Customer";

const customerRepository = connection.getRepository(Customer);

export const getCustomers = async (request: Request, response: Response) => {
  const customers = await customerRepository.find();
  return response.json(customers);
};

export const getCustomerById = async (request: Request, response: Response) => {
  const customer = await customerRepository.findOne({
    where: { id: parseInt(request.params.id, 10) },
  });
  return response.json(customer);
};

export const registerCustomer = async (
  request: Request,
  response: Response
) => {
  const customer = await customerRepository.save(request.body);
  response.json(customer);
};

export const updateCustomer = async (request: Request, response: Response) => {
  const customer = await customerRepository.update(
    request.params.id,
    request.body
  );

  if (customer.affected === 1) {
    const updatedCustomer = await customerRepository.findOne({
      where: { id: parseInt(request.params.id, 10) },
    });
    return response.json(updatedCustomer);
  } else {
    response.status(404).json({
      message: "Nenhum cliente encontrado com o ID informado.",
    });
  }
};

export const deleteCustomer = async (request: Request, response: Response) => {
  const customer = await customerRepository.delete(request.params.id);
  if (customer.affected === 1) {
    return response.json({ message: "Deletado com sucesso." });
  } else {
    return response.json({
      message: "Nenhum cliente identificado com esse ID.",
    });
  }
};
