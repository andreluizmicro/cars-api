import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const { name, username, email, password, driver_license } = request.body;

    await createUserUseCase.execute({
      name,
      username,
      email,
      driver_license,
      password,
    });
    return response.status(201).send();
  }
}

export { CreateUserController };