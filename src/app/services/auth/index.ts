import {
  CreateUserCommand,
  FindUserByIdResponse,
  SignInResponse,
  User,
} from "./domain";

export const signUp = async (command: CreateUserCommand): Promise<User> => {
  const signUpUrl = process.env.NEXT_PUBLIC_SIGN_UP_URL;
  if (!signUpUrl) {
    throw new Error("SIGN_UP_URL is not defined");
  }

  const response = await fetch(signUpUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return (await response.json()) as User;
};

export const signIn = async (command: {
  username: string;
  password: string;
}): Promise<SignInResponse> => {
  // const signInUrl = process.env.NEXT_PUBLIC_SIGN_IN_URL;
  const signInUrl = "http://localhost:8080/user/signin";
  if (!signInUrl) {
    throw new Error("SIGN_IN_URL is not defined");
  }

  const response = await fetch(signInUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return (await response.json()) as SignInResponse;
};

export const findUserById = async (
  id: string
): Promise<FindUserByIdResponse> => {
  const getUserUrl = process.env.NEXT_PUBLIC_FIND_USER_BY_ID_URL;
  if (!getUserUrl) {
    throw new Error("GET_USER_URL is not defined");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FIND_USER_BY_ID_URL}/${id}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return (await response.json()) as FindUserByIdResponse;
};

export const findByUsername = async (username: string) => {
  try {
    const findByUsernameUrl = process.env.NEXT_PUBLIC_FIND_USER_BY_USERNAME_URL;
    if (!findByUsernameUrl) {
      throw new Error("URL does not exist");
    }
    const response = await fetch(`${findByUsernameUrl}/${username}`, {
      method: "GET",
    });

    return (await response.json()) as User | null;
  } catch (error: any) {
    throw new Error(error);
  }
};
