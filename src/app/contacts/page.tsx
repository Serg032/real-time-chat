"use client";
import { FormEvent, useState } from "react";
import MobileNavbar from "../components/mobile/navbar";
import { findByUsername } from "../services/auth";
import { User } from "../services/auth/domain";
import Link from "next/link";

const Contacts = () => {
  const contacts = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchContact, setSearchContact] = useState("");
  const [contact, setContact] = useState<User | null>(null);
  const handleAddContact = () => {
    setIsModalOpen(true);
  };
  const handleOnCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOnFindContact = async (event: FormEvent) => {
    event.preventDefault();
    console.log(searchContact);
    const contact = await findByUsername(searchContact);
    console.log(contact);
    setContact(contact);
  };
  return (
    <div className="font-mono flex flex-col items-center w-full h-screen p-4 text-lime-500">
      <h1>Contacts</h1>
      <button
        className="border-white-900 border-2 rounded-md pr-1 pl-1"
        onClick={handleAddContact}
      >
        Add new Contact
      </button>
      <div>
        {contacts.length === 0 ? (
          <span>no contacts</span>
        ) : (
          <span>theres some contacts</span>
        )}
      </div>
      {isModalOpen ? (
        <div className="absolute flex flex-col items-center gap-5 z-50 w-100 border-2 rounded-md w-full h-screen bg-black">
          <span>search a contact</span>
          <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleOnFindContact}
          >
            <label htmlFor="username">username: </label>
            <input
              className="bg-black border-2 border-lime-500 rounded-md p-2 w-full"
              type="text"
              onChange={(event) => setSearchContact(event.target.value)}
              required
            />
            <button
              className="border-white-900 border-2 rounded-md pr-1 pl-1"
              type="submit"
            >
              Find
            </button>
          </form>
          <div>
            {contact ? (
              <div className="w-full flex flex-col justify-center items-center">
                <div>
                  <span>id: </span>
                  <span>{contact?.id}</span>
                </div>
                <div>
                  <span>username: </span>
                  <span>{contact?.username}</span>
                </div>
                <div>
                  <span>email: </span>
                  <span>{contact?.email}</span>
                </div>
                <Link href={`friend-request/${contact?.id}`}>
                  <button className="border-white-900 border-2 rounded-md mt-4">
                    send a friend request
                  </button>
                </Link>
              </div>
            ) : null}
          </div>
          <button
            className="border-white-900 border-2 rounded-md pr-1 pl-1"
            onClick={handleOnCloseModal}
          >
            Close
          </button>
        </div>
      ) : null}
      <MobileNavbar />
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default Contacts;
