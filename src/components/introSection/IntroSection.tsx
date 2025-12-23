'use client';

import Image from 'next/image';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function IntroSection() {
    return (
        <section className="
            w-full
            flex flex-col-reverse lg:flex-row
            items-center lg:items-start
            justify-between
            bg-[#F6F7F8]
            px-4 sm:px-8 md:px-16 lg:px-[100px]
            py-8 lg:py-[50px]
            gap-10
        ">
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2">
                {/* Badge */}
                <div className="
                    flex items-center gap-2
                    bg-[#EBF0F7] border border-[#CADCF3]
                    rounded-[20px]
                    w-fit
                    py-[4px] px-[10px]
                ">
                    <Image
                        src="/sparkle.png"
                        alt="sparkle-buyobot"
                        width={20}
                        height={20}
                    />
                    <span className="text-sm font-medium">
                        New classes available
                    </span>
                </div>

                {/* Text */}
                <div className="mt-6">
                    <h1 className="
                        text-3xl sm:text-4xl md:text-5xl lg:text-[60px]
                        font-bold
                        max-w-full lg:max-w-[400px]
                    ">
                        Build Your Kid&apos;s Future with{" "}
                        <span className="text-[#fcbc1f]">Buyobot</span>
                    </h1>

                    <p className="
                        mt-4
                        text-gray-400
                        text-sm sm:text-base
                        max-w-full lg:max-w-[400px]
                    ">
                        Hands-on robot building workshops and monthly courses
                        for kids and adults using Buyobot kits and Arduino
                        programming. Spark creativity and master STEM skills.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-4">
                        <button className="
                            py-2 px-6
                            rounded-full
                            bg-[#fcbc1f]
                            text-white
                            font-bold
                        ">
                            Book a meet
                        </button>

                        <button className="
                            py-2 px-6
                            rounded-full
                            border border-[#fcbc1f]
                            text-[#fcbc1f]
                            font-bold
                        ">
                            View Gallery
                        </button>
                    </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap items-center gap-6 mt-6">
                    <p className="flex items-center text-gray-500 text-sm sm:text-base">
                        <CheckCircleIcon sx={{ color: "gray", marginRight: "8px" }} />
                        Certificate
                    </p>

                    <p className="flex items-center text-gray-500 text-sm sm:text-base">
                        <CheckCircleIcon sx={{ color: "gray", marginRight: "8px" }} />
                        Age 5–18
                    </p>
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
                <Image
                    src="/kidwithrobots.png"
                    alt="kids-with-robots"
                    width={500}
                    height={300}
                    className="
                        rounded-[20px]
                        w-full
                        max-w-[500px]
                        h-auto
                    "
                />

                {/* Tag */}
                <div className="
                    absolute
                    bottom-4 left-4
                    flex items-center
                    bg-white
                    px-3 py-2
                    rounded-full
                    shadow-md
                    gap-3
                ">
                    <div className="
                        flex items-center justify-center
                        bg-[#dcfce9]
                        rounded-full
                        p-2
                        w-10 h-10
                    ">
                        <EmojiEventsIcon sx={{ color: "#17a34a" }} />
                    </div>

                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                        500+ robots built by kids
                    </span>
                </div>
            </div>
        </section>
    );
}