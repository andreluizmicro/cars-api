import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersReposity";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersReposity: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    await this.usersReposity.create({
      name,
      email,
      driver_license,
      password,
    });
  }
}

export { CreateUserUseCase };
