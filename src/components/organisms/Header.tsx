"use client"
import { useState } from "react";
import Image from "@/components/atoms/Image";
import SidebarNotification from "@/components/molecules/SidebarNotification";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="bg-white p-6 border-b-2 border-b-main-color flex items-center justify-between">
      <div className="flex items-center flex-auto">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Rechercher..."
            className="px-3 py-1 rounded-md mr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <button onClick={toggleSidebar}>
        <Image
          src="/notification.svg"
          alt="avatar"
          width={18}
          height={19}
          className=""
        />
      </button>
      <div className="relative ml-8 mr-2">
        <Image
          src="/avatarTest.svg"
          alt="avatar"
          width={564}
          height={496}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <button className="relative" onClick={toggleMenu}>
        <Image
          src="/downArrow.svg"
          alt="avatar"
          width={18}
          height={19}
          className=""
        />
        {isOpen && (
          <div className="absolute top-8 right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <ul>
              <li>
                <a
                  href="/dashboard/user/information"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Paramètres
                </a>
              </li>
            </ul>
          </div>
        )}
      </button>
      {isSidebarOpen && <SidebarNotification onClose={closeSidebar} />}
    </header>
  );
};

export default Header;