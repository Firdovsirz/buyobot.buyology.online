'use client';

import CodeIcon from '@mui/icons-material/Code';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function WhyChooseSection() {
    return (
        <section
            className="
                w-full
                flex flex-col items-center
                px-4 sm:px-8 md:px-16 lg:px-[100px]
                py-10
            "
        >
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
                Why Choose{" "}
                <span className="text-[#fcbc1f]">Buyobot</span>?
            </h2>

            {/* Cards */}
            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                    mt-10
                    w-full
                "
            >
                {/* Card 1 */}
                <div className="bg-[#F6F7F8] p-6 rounded-xl flex flex-col h-full">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#dbeafe] rounded-lg">
                        <CodeIcon sx={{ color: "#2762ea" }} />
                    </div>

                    <h3 className="font-bold mt-4">
                        Learn Arduino
                    </h3>

                    <p className="mt-3 text-gray-400 text-sm sm:text-base flex-grow">
                        Master the basics of coding and electronics with real
                        hardware and robots that professionals use.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#F6F7F8] p-6 rounded-xl flex flex-col h-full">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#f2e9fe] rounded-lg">
                        <ConstructionIcon sx={{ color: "#9335eb" }} />
                    </div>

                    <h3 className="font-bold mt-4">
                        Hands-on Building
                    </h3>

                    <p className="mt-3 text-gray-400 text-sm sm:text-base flex-grow">
                        Build your own robots from scratch with expert guidance.
                        No prior experience needed.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#F6F7F8] p-6 rounded-xl flex flex-col h-full">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#feecd5] rounded-lg">
                        <HandshakeIcon sx={{ color: "#ea580a" }} />
                    </div>

                    <h3 className="font-bold mt-4">
                        Collaborations
                    </h3>

                    <p className="mt-3 text-gray-400 text-sm sm:text-base flex-grow">
                        100+ collaborations worldwide with schools and
                        universities, including Azerbaijan Technical University.
                    </p>
                </div>
            </div>
        </section>
    );
}