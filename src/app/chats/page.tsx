"use client";
import { useEffect } from "react";
import MobileNavbar from "../../components/mobile/navbar";
import isUserLogged from "@/helpers/is-user-logged";
import { useRouter } from "next/navigation";
import TopBar from "@/components/mobile/top-bar";

const Chats = () => {
  const router = useRouter();
  useEffect(() => {
    isUserLogged(router);
  }, []);
  const chats = [];
  return (
    <div className="font-mono flex flex-col items-center w-full h-screen p-4 text-lime-500 pt-10">
      <TopBar />
      <h1>Chats</h1>
      <div>
        <div>
          {chats.length === 0 ? (
            <span>no chats</span>
          ) : (
            <span>theres some chats</span>
          )}
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Chats;
