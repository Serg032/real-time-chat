"use client";
import { FormEvent, useState } from "react";
import { CreateUserCommand } from "../services/auth/domain";
import { signUp } from "../services/auth";
import { redirect, useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<CreateUserCommand>({
    username: "",
    email: "",
    password: "",
  });

  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const passwordsMatch = formData.password === repeatPassword;

  const handleOnSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();
      console.log(formData);
      await signUp(formData);
      router.push("/chats");
    } catch (error) {}
  };
  return (
    <div className="font-mono p-4 text-lime-500 w-full h-screen flex flex-col items-center gap-28">
      <div>
        <span className="text-xl">Sign up</span>
      </div>
      <form
        className="flex flex-col items-center gap-5"
        onSubmit={handleOnSubmit}
      >
        <div className="w-full">
          <label>username:</label>
          <input
            className="bg-black border-2 border-lime-500 rounded-md p-2 w-full"
            type="text"
            name="username"
            id="username"
            required
            onChange={(event) =>
              setFormData({ ...formData, username: event.target.value })
            }
          />
        </div>
        <div className="w-full">
          <label>email:</label>
          <input
            className="bg-black border-2 border-lime-500 rounded-md p-2 w-full"
            type="email"
            name="email"
            id="email"
            required
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </div>
        <div className="w-full">
          <label>password:</label>
          <input
            className="bg-black border-2 border-lime-500 rounded-md p-2 w-full"
            type="password"
            name="password"
            id="password"
            required
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
        </div>
        <div className="w-full">
          <label>repeate password:</label>
          <input
            className="bg-black border-2 border-lime-500 rounded-md p-2 w-full"
            type="password"
            name="password"
            id="password"
            required
            onChange={(event) => setRepeatPassword(event.target.value)}
          />
        </div>
        <button
          className="border-lime-500 border-2 rounded-md p-2"
          disabled={!passwordsMatch}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default SignUp;
