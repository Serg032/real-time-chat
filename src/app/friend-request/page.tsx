"use client";
import { useEffect } from "react";
import MobileNavbar from "../components/mobile/navbar";
import { getNewFriendRequestsByRecieverId } from "../services/friend-requests";

const FriendRequests = () => {
  useEffect(() => {
    getNewFriendRequestsByRecieverId(localStorage.getItem("user")!).then(
      (response) => {
        console.log(response);
      }
    );
  });
  return (
    <div className="font-mono flex flex-col items-center w-full h-screen p-4 text-lime-500">
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
