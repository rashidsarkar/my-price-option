import { useState } from "react";
import Link from "../Link/Link";
import { BiMenu } from "react-icons/Bi";
import { AiOutlineClose } from "react-icons/Ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav className="p-6">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose className="text-2xl "></AiOutlineClose>
        ) : (
          <BiMenu className="text-2xl "></BiMenu>
        )}
      </div>
      <ul
        className={`md:flex absolute md:static duration-500 px-6  ${
          open ? "top-16" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
