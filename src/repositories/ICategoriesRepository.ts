import { Category } from "../model/Category";

// DTO => Data transfer object
interface ICreateCrategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCrategoryDTO): void;
}

export { ICategoriesRepository, ICreateCrategoryDTO };
