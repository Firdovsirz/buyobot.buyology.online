import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#f6f6f9] px-4 sm:px-8 lg:px-16 py-10">
            {/* Main content */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
                {/* Logo & Description */}
                <div className="flex flex-col items-start">
                    <Link href="/">
                        <img
                            src="/buyobot.png"
                            alt="Buyobot"
                            className="w-40 sm:w-48 mb-4"
                        />
                    </Link>
                    <p className="text-gray-400 max-w-xs">
                        Empowering the next generation of engineers, one robot at a time.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h2 className="font-bold mb-4 text-lg">Company</h2>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>
                            <Link href={"/contact-us"}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="w-full sm:w-auto">
                    <h2 className="font-bold mb-4 text-lg">Subscribe to our newsletter</h2>
                    <p className="text-gray-400 mb-4 max-w-sm">
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="rounded-full border border-gray-300 outline-none px-4 py-2 flex-1"
                        />
                        <button className="bg-[#fcbc1f] text-white font-bold rounded-full px-6 py-2 hover:bg-yellow-500 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="mt-10 border-t border-gray-300 pt-4 text-center text-gray-400 text-sm">
                © Buyobot. All rights reserved.
            </div>
        </footer>
    )
}