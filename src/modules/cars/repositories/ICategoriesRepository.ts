import { Category } from "../entities/Category";

// DTO => Data transfer object
interface ICreateCrategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCrategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCrategoryDTO };
