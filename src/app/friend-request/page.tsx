"use client";
import { useEffect, useState } from "react";
import MobileNavbar from "../../components/mobile/navbar";
import TopBar from "../../components/mobile/top-bar";
import isUserLogged from "@/helpers/is-user-logged";
import { useRouter } from "next/navigation";
import { MarshalledFriendRequest } from "@/services/friend-requests/domain";
import {
  buildMarshalledFriendRequests,
  getNewFriendRequestsByRecieverId,
} from "@/services/friend-requests";

const FriendRequests = () => {
  const router = useRouter();
  const [newFriendRequests, setNewFriendRequests] = useState<
    MarshalledFriendRequest[]
  >([]);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      isUserLogged(router);
      const userId = localStorage.getItem("user");
      if (userId) {
        const requests = await getNewFriendRequestsByRecieverId(userId);
        if (requests?.newrequests) {
          console.log("new requests", requests.newrequests);
          const marshalledRequests = await buildMarshalledFriendRequests(
            requests.newrequests
          );
          console.log("marshalled requests", marshalledRequests);
          setNewFriendRequests(marshalledRequests);
        }
      }
    };

    fetchFriendRequests();
  }, [router]);

  return (
    <div className="font-mono flex flex-col items-center w-full h-screen p-4 text-lime-500 pt-10">
      <TopBar />
      <h1>friend requests</h1>
      <div className="pt-8">
        <span>Recieved</span>
        <div>
          {newFriendRequests.length > 0 ? (
            newFriendRequests.map((fr) => (
              <div key={fr.sender.id}>
                <span>sender: {fr.sender.username}</span>
                <p>message: {fr.message}</p>
              </div>
            ))
          ) : (
            <span>no new requests</span>
          )}
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default FriendRequests;
