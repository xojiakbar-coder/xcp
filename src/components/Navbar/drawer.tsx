import React from "react";
import { useDrawer } from "@/context/DrawerContext";
const Drawer: React.FC = () => {
  const { isOpen, toggleDrawer } = useDrawer();

  return (
    <>
      <div
        className={`absolute z-[999] lg:hidden md:hidden top-0 left-0 h-[100vh] w-full border bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <button onClick={toggleDrawer}>close</button>
        <ul className="p-4">
          <li className="mb-4">
            <a href="#">Home</a>
          </li>
          <li className="mb-4">
            <a href="#">About</a>
          </li>
          <li className="mb-4">
            <a href="#">Services</a>
          </li>
          <li className="mb-4">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Drawer;
