import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlredyExists = this.categoriesRepository.findByName(name);

    if (categoryAlredyExists) {
      throw new Error("Category alredy exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryService };
