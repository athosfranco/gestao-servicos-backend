import { Request, Response } from "express";
import connection from "../config/ormconfig";

import { Category } from "../entity/Category";

const categoryRepository = connection.getRepository(Category);

export const getCategories = async (request: Request, response: Response) => {
  const categories = await categoryRepository.find();
  return response.json(categories);
};

export const getCategoryById = async (request: Request, response: Response) => {
  const category = await categoryRepository.findOne({
    where: { id: parseInt(request.params.id, 10) },
  });
  return response.json(category);
};

export const createCategory = async (request: Request, response: Response) => {
  const category = await categoryRepository.save(request.body);
  return response.json(category);
};

export const updateCategory = async (request: Request, response: Response) => {
  const category = await categoryRepository.update(
    request.params.id,
    request.body
  );

  if (category.affected === 1) {
    const updatedCategory = await categoryRepository.findOne({
      where: { id: parseInt(request.params.id, 10) },
    });
    return response.json(updatedCategory);
  } else {
    response.status(404).json({
      message: "Nenhuma categoria encontrada com o ID informado.",
    });
  }
};

export const deleteCategory = async (request: Request, response: Response) => {
  const category = await categoryRepository.delete(request.params.id);
  if (category.affected === 1) {
    return response.json({ message: "Deletado com sucesso." });
  } else {
    return response.json({
      message: "Nenhum cliente identificado com esse ID.",
    });
  }
};
