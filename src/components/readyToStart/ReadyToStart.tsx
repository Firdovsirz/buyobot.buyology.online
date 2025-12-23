'use client';

import Image from 'next/image';

export default function ReadyToStart() {
    return (
        <section
            className="
                bg-[#eaf1f8]
                px-4 sm:px-8 md:px-16 lg:px-[100px]
                py-10
            "
        >
            {/* Title */}
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold">
                    Built by Kids, Powered by Curiosity
                </h2>
            </div>

            {/* Images */}
            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                "
            >
                <Image
                    src="/robothand.png"
                    alt="robot-hand"
                    width={400}
                    height={300}
                    className="rounded-2xl w-full h-auto object-cover"
                />

                <Image
                    src="/kidgroupai.png"
                    alt="kid-group"
                    width={400}
                    height={300}
                    className="rounded-2xl w-full h-auto object-cover"
                />

                <Image
                    src="/kidwithcomputer.png"
                    alt="kid-with-laptop"
                    width={400}
                    height={300}
                    className="rounded-2xl w-full h-auto object-cover"
                />
            </div>
            <div className='flex flex-col items-center justify-center bg-[#fcbc1f] mt-[30px] rounded-[20px] p-[50px]'>
                <h2 className='font-bold text-[30px] text-white mb-[20px]'>
                    Ready to start building?
                </h2>
                <p className='text-white text-[20px] w-[50%] text-center mb-[30px]'>
                    Join hundreds of young inventors turning their ideas into reality. Spaces are limited for our next sessions.
                </p>

                <div>
                    <button className='bg-white text-[20px] text-[#fcbc1f] font-bold px-[10px] py-[5px] rounded-[30px] cursor-pointer'>
                        Get started
                    </button>
                </div>
            </div>
        </section>
    );
}