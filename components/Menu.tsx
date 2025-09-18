"use client";
import {
  BookUser,
  GalleryVerticalEnd,
  Home,
  User2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItem = [
  {
    title: "Home",
    link: "/",
    icon: Home,
  },
  {
    title: "About",
    link: "/about",
    icon: User2,
  },
  {
    title: "Projects",
    link: "/projects",
    icon: GalleryVerticalEnd,
  },
  {
    title: "Contact",
    link: "/contact",
    icon: BookUser,
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <ul className="space-y-2">
        {menuItem.map((item) => {
          const isActive = pathname === item.link;
          return (
            <li key={item.title}>
              <Link
                href={item.link}
                passHref
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 lg:justify-between justify-center ${
                  isActive
                    ? "bg-[#1e1e21]"
                    : "text-[#94A1B2] hover:bg-gray-700/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon
                    className={`w-5 h-5 ${isActive ? "text-[#7F5AF0]" : ""}`}
                  />
                  {/* Menu title hidden on smaller screens */}
                  <span
                    className={`text-sm font-medium hidden lg:inline ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                {/* Active indicator hidden on smaller screens */}
                {isActive && (
                  <div className="w-1 h-6 bg-[#7F5AF0] rounded-full hidden lg:block"></div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
