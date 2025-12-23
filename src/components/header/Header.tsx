'use client';

export default function Header() {
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
                <img
                    src="/buyobot.png"
                    alt="Buyobot"
                    className="w-[160px] sm:w-[200px]"
                />
            </div>

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