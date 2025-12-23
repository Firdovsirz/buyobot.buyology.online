"use client";

import EmailIcon from '@mui/icons-material/Email';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactUs() {
    return (
        <section className='flex items-start justify-between p-[80px] bg-[#f6f6f9]'>
            <div className='w-[50%]'>
                <div className='flex items-center justify-between bg-[#deebf6] w-[150px] p-[5px] rounded-[30px] text-[#157fed] mb-[10px]'>
                    <WavingHandIcon sx={{ color: "#157fed" }} />
                    <p className='font-bold'>HELLO THERE</p>
                </div>
                <div className='w-[50%]'>
                    <h1 className='font-bold text-[30px] mb-[10px]'>Let's build something amazing together</h1>
                    <p className='text-gray-400'>Have questions about our Robot Workshops? Fill out the form and our team of engineers will get back to you within 24 hours.</p>
                </div>
                <div className='mt-[20px] flex items-center justify-start bg-white rounded-[10px] w-[60%] p-[10px]'>
                    <div className='flex items-center justify-center mr-[10px] w-[40px] h-[40px] bg-[#deebf6] p-[10px] rounded-[5px] text-[#157fed]'>
                        <LocationOnIcon sx={{ color: "#157fed" }} />
                    </div>
                    <div>
                        <h2 className='font-bold'>Visit our lab</h2>
                        <p className='text-gray-400'>
                            H.Cavid prospekti 25, Baku, Azerbaijan
                        </p>
                    </div>
                </div>
                <div className='mt-[20px] flex items-center justify-start bg-white rounded-[10px] w-[60%] p-[10px]'>
                    <div className='flex items-center justify-center mr-[10px] w-[40px] h-[40px] bg-[#deebf6] p-[10px] rounded-[5px] text-[#157fed]'>
                        <EmailIcon sx={{ color: "#157fed" }} />
                    </div>
                    <div>
                        <h2 className='font-bold'>Email us</h2>
                        <p className='text-gray-400'>
                            buyobot@buyology.online
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-white border-t-4 border-t-[#157fed] w-[50%] rounded-[20px] p-[20px]'>
                <form action="" className='w-full'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col' style={{ width: "calc(100% / 2 - 5px)" }}>
                            <label className='font-bold mb-[10px]'>First Name</label>
                            <input type="text" placeholder='First Name' className='rounded-[30px] p-[5px] border-1 border-gray-300 outline-none' />
                        </div>
                        <div className='flex flex-col' style={{ width: "calc(100% / 2 - 5px)" }}>
                            <label className='font-bold mb-[10px]'>Last Name</label>
                            <input type="text" placeholder='Last Name' className='rounded-[30px] p-[5px] border-1 border-gray-300 outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-center w-full mt-[20px]'>
                        <label className='font-bold mb-[10px]'>Message</label>
                        <textarea name="message" id="message" className='w-full outline-none border-1 border-gray-300 p-[5px] rounded-[10px]' placeholder='Message...' />
                    </div>

                    <div className='w-full flex items-center justify-center mt-[20px]'>
                        <button className='py-[10px] rounded-[30px] bg-[#fcbc1f] w-full text-white font-bold cursor-pointer'>Send message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
