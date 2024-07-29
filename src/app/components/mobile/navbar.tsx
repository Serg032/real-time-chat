import Link from "next/link";

const MobileNavbar = () => {
  return (
    <div className="absolute bottom-0 w-full h-8 flex justify-around">
      <Link href={"/chats"}>
        <button className="border-white-900 border-2 rounded-md pr-1 pl-1">
          Chats
        </button>
      </Link>
      <Link href={"/contacts"}>
        <button className="border-white-900 border-2 rounded-md pr-1 pl-1">
          Contacts
        </button>
      </Link>
      <Link href={"/profile"}>
        <button className="border-white-900 border-2 rounded-md pr-1 pl-1">
          Profile
        </button>
      </Link>
      <Link href={"/friend-requests"}>
        <button className="border-white-900 border-2 rounded-md pr-1 pl-1">
          Friend requests
        </button>
      </Link>
    </div>
  );
};

export default MobileNavbar;
