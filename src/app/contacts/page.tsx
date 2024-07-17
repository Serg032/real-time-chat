"use client";
import { FormEvent, useState } from "react";
import MobileNavbar from "../components/mobile/navbar";

const Contacts = () => {
  const contacts = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchContact, setSearchContact] = useState("");
  const handleAddContact = () => {
    setIsModalOpen(true);
  };
  const handleOnCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOnFindContact = (event: FormEvent) => {
    event.preventDefault();
    console.log("Find contact");
    console.log(searchContact);
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
        <div className="absolute flex flex-col items-center gap-5 z-50 w-100 border-2 rounded-md top-7 bottom-7 right-7 left-7 bg-black">
          <span>search a contact</span>
          <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleOnFindContact}
          >
            <label htmlFor="username">username: </label>
            <input
              type="text"
              onChange={(event) => setSearchContact(event.target.value)}
            />
            <button
              className="border-white-900 border-2 rounded-md pr-1 pl-1"
              type="submit"
            >
              Find
            </button>
          </form>
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

export default Contacts;
