"use client";

import CollectionsIcon from '@mui/icons-material/Collections';

export default function Gallery() {
    const images = [
        "/labinterior.jpg",
        "/kidwithkeyboard.jpg",
        "/meetwithparents1.jpg",
        "/meetwithparents2.jpg",
        "/kidwithrobots.png",
        "/kidgroup.png",
        "/singlekid.png"
    ];

    return (
        <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
            {/* Title */}
            <div className='flex flex-col items-center justify-center mb-12'>
                <div className='bg-[#dbeafe] inline-flex items-center justify-center py-1 px-4 rounded-[30px] mb-4'>
                    <CollectionsIcon sx={{ color: "#2762ea", marginRight: "5px" }} />
                    <p className='text-[#2762ea] font-medium'>Student Showcase</p>
                </div>
                <h1 className='text-3xl sm:text-4xl font-bold mb-2 text-center'>Our Little Engineers</h1>
                <p className='text-gray-400 text-center max-w-2xl'>Explore our little engineers, started creating their first robots with us</p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {images.map((img, index) => {
                    // Check if this is the last image
                    const isLast = index === images.length - 1;

                    return (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300 flex items-center justify-center bg-gray-100"
                        >
                            {isLast ? (
                                <span className="text-2xl font-bold text-gray-600">+100 images</span>
                            ) : (
                                <img
                                    src={img}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-60 object-cover"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}