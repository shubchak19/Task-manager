import debounce from "@/utils/debounce";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CreateListButton from "../buttons/CreateListButton";
import AccountInfo from "./AccountInfo";
import NavList from "./NavList";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth >= 1024) setOpenMenu(true);
    }, 100);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      handleResize.cancel();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className={`absolute md:hidden cursor-pointer left-3 top-3 z-20 ${
          openMenu ? "text-black" : "text-white"
        }`}
      >
        <MenuIcon />
      </button>
      <nav
        className={`absolute md:static w-64 h-[100dvh] transition bg-white p-3 flex flex-col ${
          openMenu ? "" : "-translate-x-full"
        }`}
      >
        <AccountInfo />
        <NavList />
        <CreateListButton />
      </nav>
    </>
  );
}

export default Navbar;
