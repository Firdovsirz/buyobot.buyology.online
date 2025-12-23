'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  scrollToSection?: (section: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Workshops", id: "workshops", scroll: true },
    { label: "Contact us", id: "contact-us", scroll: false },
    { label: "Our works", id: "ourworks", scroll: true },
    { label: "Gallery", id: "gallery", scroll: false }
  ];

  const handleClick = (item: typeof menuItems[number]) => {
    setOpen(false);

    if (item.scroll && scrollToSection) {
      scrollToSection(item.id);
    } else {
      router.push(`/${item.id}`);
    }
  };

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur-md
        border-b border-gray-200
      "
    >
      <div className="flex items-center justify-between h-[80px] px-4 sm:px-8">
        {/* Logo */}
        <Link href="/">
          <img
            src="/buyobot.png"
            alt="Buyobot"
            className="w-[140px] sm:w-[180px]"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item)}
                className="relative text-[17px] font-bold cursor-pointer
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-black
                  after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}
        <a
          href="https://buyology.online"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <button className="bg-[#3E3071] rounded-full text-white py-2 px-5 font-bold hover:opacity-90 transition">
            Buyology
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item)}
                className="font-bold text-lg cursor-pointer"
              >
                {item.label}
              </li>
            ))}

            <a
              href="https://buyology.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full mt-4 bg-[#3E3071] rounded-full text-white py-2 font-bold">
                Buyology
              </button>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}