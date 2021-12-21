interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_license: string;
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
