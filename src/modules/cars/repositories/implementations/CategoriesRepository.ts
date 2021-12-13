import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCrategoryDTO,
} from "../ICategoriesRepository";

// singleton - Criar apenas uma instância da classe, ou seja uma instância global

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository;

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  private constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCrategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
