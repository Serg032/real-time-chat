"use client";
import { useEffect } from "react";
import MobileNavbar from "../../components/mobile/navbar";
import { getNewFriendRequestsByRecieverId } from "../../services/friend-requests";
import TopBar from "../../components/mobile/top-bar";
import isUserLogged from "@/helpers/is-user-logged";
import { useRouter } from "next/navigation";

const FriendRequests = () => {
  const router = useRouter();
  useEffect(() => {
    isUserLogged(router);
    getNewFriendRequestsByRecieverId(localStorage.getItem("user")!).then(
      (response) => {
        console.log(response);
      }
    );
  }, []);
  return (
    <div className="font-mono flex flex-col items-center w-full h-screen p-4 text-lime-500 pt-10">
      <TopBar />
      <h1>friend requests</h1>
      <div className="pt-8">
        <span>Recieved</span>
      </div>
      <MobileNavbar />
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default FriendRequests;
