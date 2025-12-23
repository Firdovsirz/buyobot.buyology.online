'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Workshops() {
    return (
        <section
            className="
                bg-[#F6F7F8]
                px-4 sm:px-8 md:px-16 lg:px-[100px]
                py-10
            "
        >
            {/* Header */}
            <div className="mb-8 text-center sm:text-left">
                <h2 className="font-bold text-2xl sm:text-3xl">
                    Our workshops & courses
                </h2>
                <p className="text-gray-400 mt-1">
                    Choose the perfect level for your young engineer.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Workshop 1 */}
                <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    {/* Image */}
                    <div className="relative h-48 sm:h-64">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8xkZ5GYkimKAvFS4HfxeMvNYPO3_-7Yo7mGHEzZ6stGMBtd1wS4TBYMGkUYVLX8osMLhUBE7fCQSBjxTHSKSmMp3SIXvU-sBbxbCgAwEXQpzZYwQmEYuosV8Cqm0NA3IRuLtqJ03N5k_Y3rrTrmilxDYK6uaLe98sYyX_4oU6DXK_YfwluoneXP4M9mEF0JUqGHI_fMkMUS5kZS3m94MxYb4Zc9SwbiRsBzyu1jhKHVTnElwDf4ugRffzMC54E1Mndpqp6SlraDo')",
                            }}
                        />
                        <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-bold">
                            Ages 6–9
                        </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-6 flex-1">
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                Junior Builders
                            </h3>

                            <p className="mb-4 text-slate-600 text-sm sm:text-base">
                                A perfect introduction to robotics. Kids learn to
                                assemble pre-programmed bots and understand basic
                                mechanics through play.
                            </p>

                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "#22c55e" }} />
                                    <span>Basic assembly mechanics</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "#22c55e" }} />
                                    <span>Intro to sensors</span>
                                </li>
                            </ul>
                        </div>

                        <button className="mt-6 w-full rounded-xl bg-slate-100 py-3 text-sm font-bold hover:bg-slate-200">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Workshop 2 */}
                <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    {/* Image */}
                    <div className="relative h-48 sm:h-64">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAf6x5cctBkJotL6AQk9N6TENc9X-2P7t6cZJqN1CoslW2ooTndSpotmFwJ37rWUKglxlnejbASFS-66xRxzZCoyblxWvyK0kHpi4Fj-WJyV0cTFrnOFxHcwIoNfbFiLyFt7RSSph0FDHqkXWkXXWgbUR1X4ZCzJ58uQyO0OauQRt432MPDUdAL7UEM0SnT7ND-ll8Z_42IFC72RdSSAzRXDRxAsweMVJY-KBySRPNYKqhy6pjil2-bJ49HsgE_JdDcUmBZ5emEFmw')",
                            }}
                        />
                        <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-bold">
                            Ages 10–18
                        </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-6 flex-1">
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                Master Builders
                            </h3>

                            <p className="mb-4 text-slate-600 text-sm sm:text-base">
                                Dive deeper into robotics logic. Participants
                                write real Arduino code to control sensors,
                                motors, and LEDs.
                            </p>

                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "#22c55e" }} />
                                    <span>C++ / Arduino Programming</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "#22c55e" }} />
                                    <span>Complex sensor integration</span>
                                </li>
                            </ul>
                        </div>

                        <button className="mt-6 w-full rounded-xl bg-[#fcbc1f] py-3 text-sm font-bold text-white hover:opacity-90">
                            Book Workshop
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}