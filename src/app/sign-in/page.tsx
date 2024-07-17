"use client";
import { FormEvent, useState } from "react";
import { signIn } from "../services/auth";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleOnSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();
      const signInResult = await signIn(formData);
      if (!signInResult.response.access) {
        alert("Wrong username or password");
      }
      alert("Welcome");
      localStorage.setItem("user", signInResult.response.user?.id!);
      router.push("/chats");
    } catch (error) {
      alert("Something went wrong");
    }
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
        <button className="border-lime-500 border-2 rounded-md p-2">
          send
        </button>
      </form>
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default SignIn;
