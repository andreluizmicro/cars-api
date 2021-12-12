import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCateogryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCateogryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const list = categoriesRepository.list();

  return response.json(list);
});

export { categoriesRoutes };
