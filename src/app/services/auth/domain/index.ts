export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  friends?: Friend[];
}

export type CreateUserCommand = Omit<User, "id">;

// eslint-disable-next-line import/no-unused-modules
export interface Friend {
  id: string;
  username: string;
  email: string;
}

// eslint-disable-next-line import/no-unused-modules
export interface SignInCommand {
  username: string;
  password: string;
}

// eslint-disable-next-line import/no-unused-modules
export interface SignInResponse {
  response: {
    access: boolean;
    user?: User;
    denied?: boolean;
  };
}

export type FindUserByIdResponse = User | null;
