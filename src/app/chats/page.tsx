import MobileNavbar from "../components/mobile/navbar";

const Chats = () => {
  const chats = [];
  return (
    <div className="font-mono flex flex-col items-center w-full h-screen p-4 text-lime-500">
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
