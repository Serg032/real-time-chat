import Link from "next/link";

export const LandingPage = () => {
  return (
    <div className="font-mono flex flex-col items-center justify-around w-full h-screen p-4 text-lime-500">
      <div className="flex flex-col gap-6 text-center">
        <h1 className="text-3xl">Life Chat</h1>
        <span>
          This is a simple chat. Where you can communicate with your contacts.
        </span>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <Link href="/sign-up">
          <button className="border-white-900 border-2 rounded-md p-2">
            Sign up
          </button>
        </Link>
        <button className="border-white-900 border-2 rounded-md p-2">
          Sign in
        </button>
      </div>
    </div>
  );
};
