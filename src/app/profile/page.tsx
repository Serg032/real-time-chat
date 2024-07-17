"use client";
import { useEffect, useState } from "react";
import MobileNavbar from "../components/mobile/navbar";
import { findUserById } from "../services/auth";
import { User } from "../services/auth/domain";

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    try {
      const userId = localStorage.getItem("user");
      if (!userId) {
        alert("theres no user at localstorage");
      } else {
        console.log(localStorage.getItem("user"));
        findUserById(userId).then((response) => {
          if (response) {
            setUser(response);
            console.log(user);
          }
        });
      }
    } catch (error: any) {
      throw Error("Something went wrong", error);
    }
  }, []);

  return (
    <div className="font-mono flex flex-col items-center w-full h-screen p-4 text-lime-500">
      <h1>Profile</h1>
      <div className="pt-4">
        <div className="flex flex-col gap-2">
          <span>id: </span>
          <span>{user?.id}</span>
        </div>
        <div>
          <span>username: </span>
          <span>{user?.username}</span>
        </div>
        <div>
          <span>email: </span>
          <span>{user?.email}</span>
        </div>
        <div>
          <span>friends: </span>
          <ul>
            {user?.friends?.length! > 0 ? (
              user?.friends?.map((friend) => (
                <li key={friend.id}>{friend.username}</li>
              ))
            ) : (
              <span>no friends</span>
            )}
          </ul>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default ProfilePage;
