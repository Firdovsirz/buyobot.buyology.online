'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
    scrollToSection?: (section: string) => void; // optional
}

export default function Header({ scrollToSection }: HeaderProps) {
    const router = useRouter();

    const menuItems = [
        { label: "Workshops", id: "workshops", scroll: true },
        { label: "Contact us", id: "contact-us", scroll: false },
        { label: "Our works", id: "ourworks", scroll: true },
        { label: "Gallery", id: "gallery", scroll: false }
    ];

    const handleClick = (item: typeof menuItems[0]) => {
        if (item.scroll && scrollToSection) {
            scrollToSection(item.id);
        } else if (!item.scroll) {
            router.push(`/${item.id}`);
        }
    };

    return (
        <header
            className="
        sticky top-0 z-50
        flex items-center justify-between
        h-[80px]
        px-4 sm:px-8
        border-b border-gray-200
        bg-white/80
        backdrop-blur-md
        supports-[backdrop-filter]:bg-white/60
      "
        >
            {/* Logo */}
            <div>
                <Link href={"/"}>
                    <img
                        src="/buyobot.png"
                        alt="Buyobot"
                        className="w-[160px] sm:w-[200px]"
                    />
                </Link>
            </div>

            {/* Menu */}
            <nav>
                <ul className="flex items-center justify-center gap-5">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className="relative text-[17px] font-bold cursor-pointer
                         after:content-[''] after:absolute after:left-0 after:bottom-0
                         after:w-0 after:h-[2px] after:bg-black
                         after:transition-all after:duration-300
                         hover:after:w-full"
                            onClick={() => handleClick(item)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Button */}
            <a
                href="https://buyology.online"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button
                    className="
            bg-[#3E3071]
            rounded-full
            text-white
            py-2 px-5
            font-bold
            hover:opacity-90
            transition
          "
                >
                    Buyology
                </button>
            </a>
        </header>
    );
}