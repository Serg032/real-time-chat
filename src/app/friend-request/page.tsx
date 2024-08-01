"use client";
import { useEffect, useState } from "react";
import MobileNavbar from "../../components/mobile/navbar";
import {
  buildFriendRequests,
  getNewFriendRequestsByRecieverId,
} from "../../services/friend-requests";
import TopBar from "../../components/mobile/top-bar";
import isUserLogged from "@/helpers/is-user-logged";
import { useRouter } from "next/navigation";
import { MarshledFriendRequest } from "@/services/friend-requests/domain";

const FriendRequests = () => {
  const router = useRouter();
  const [newFriendRequests, setNewFriendRequests] = useState<
    MarshledFriendRequest[]
  >([]);
  useEffect(() => {
    isUserLogged(router);
    getNewFriendRequestsByRecieverId(localStorage.getItem("user")!).then(
      (response) => {
        console.log(response);
        if (response?.newrequests) {
          console.log(buildFriendRequests(response.newrequests));
          setNewFriendRequests(buildFriendRequests(response.newrequests));
        }
      }
    );
  }, []);
  return (
    <div className="font-mono flex flex-col items-center w-full h-screen p-4 text-lime-500 pt-10">
      <TopBar />
      <h1>friend requests</h1>
      <div className="pt-8">
        <span>Recieved</span>
        <div>
          {newFriendRequests.map((fr) => (
            <div key={fr.sender.id}>
              <span>sender: {fr.sender.username}</span>
            </div>
          ))}
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default FriendRequests;
