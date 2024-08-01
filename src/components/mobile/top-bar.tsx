import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();
  function handleOnClick() {
    localStorage.removeItem("user");
    router.push("/");
  }
  return (
    <div className="absolute flex w-full justify-center top-0 p-1">
      TopBar
      <button
        className="absolute right-0 border-white-900 border-2 rounded-md pr-1 pl-1"
        onClick={handleOnClick}
      >
        log out
      </button>
    </div>
  );
};

// eslint-disable-next-line import/no-unused-modules
export default TopBar;
