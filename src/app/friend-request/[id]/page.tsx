"use client";
import { findUserById } from "@/app/services/auth";
import { User } from "@/app/services/auth/domain";
import { useParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const FriendRequest = () => {
  const { id } = useParams();
  console.log(id);

  const [friend, setFriend] = useState<User | null>(null);
  const [request, setRequest] = useState<string>("");

  useEffect(() => {
    const friendId = id as string;
    findUserById(friendId).then((response) => {
      setFriend(response);
    });
    console.log(friend);
  }, []);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(request);
    setRequest("");
  };

  return (
    <div className="font-mono flex flex-col items-center w-full h-screen p-4 text-lime-500">
      {friend ? (
        <div className="w-full flex flex-col items-center">
          <div>
            <span>username: </span>
            <span>{friend.username}</span>
          </div>
          <div>
            <span>email: </span>
            <span>{friend.email}</span>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
      <form
        className="w-full flex flex-col items-center gap-6"
        onSubmit={handleOnSubmit}
      >
        <label htmlFor="request"></label>
        <textarea
          name="request"
          id="request"
          className="bg-black border-2 border-lime-500 rounded-md p-2 w-full mt-5"
          value={request}
          onChange={(event) => setRequest(event.target.value)}
        />
        <button
          className="border-white-900 border-2 rounded-md pr-1 pl-1"
          type="submit"
        >
          send
        </button>
      </form>
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default FriendRequest;
