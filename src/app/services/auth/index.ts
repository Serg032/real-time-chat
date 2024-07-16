import { CreateUserCommand, User } from "./domain";

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
