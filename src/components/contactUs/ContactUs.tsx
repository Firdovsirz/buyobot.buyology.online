"use client";

import EmailIcon from "@mui/icons-material/Email";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactUs() {
  return (
    <section className="bg-[#f6f6f9] px-4 sm:px-8 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 bg-[#deebf6] w-fit px-4 py-1 rounded-full text-[#157fed] mb-4">
            <WavingHandIcon sx={{ color: "#157fed" }} />
            <p className="font-bold text-sm">HELLO THERE</p>
          </div>

          <h1 className="font-bold text-2xl sm:text-3xl mb-3 max-w-md">
            Let's build something amazing together
          </h1>

          <p className="text-gray-400 max-w-lg mb-8">
            Have questions about our Robot Workshops? Fill out the form and our
            team of engineers will get back to you within 24 hours.
          </p>

          {/* Address */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-4 mb-4 max-w-lg">
            <div className="flex items-center justify-center w-10 h-10 bg-[#deebf6] rounded-md">
              <LocationOnIcon sx={{ color: "#157fed" }} />
            </div>
            <div>
              <h2 className="font-bold">Visit our lab</h2>
              <p className="text-gray-400 text-sm">
                H.Cavid prospekti 25, Baku, Azerbaijan
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 bg-white rounded-xl p-4 max-w-lg">
            <div className="flex items-center justify-center w-10 h-10 bg-[#deebf6] rounded-md">
              <EmailIcon sx={{ color: "#157fed" }} />
            </div>
            <div>
              <h2 className="font-bold">Email us</h2>
              <p className="text-gray-400 text-sm">
                buyobot@buyology.online
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-1/2 bg-white border-t-4 border-[#157fed] rounded-2xl p-6 sm:p-8">
          <form className="w-full space-y-4">
            {/* Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="font-bold mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="rounded-full px-4 py-2 border border-gray-300 outline-none"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="rounded-full px-4 py-2 border border-gray-300 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="font-bold mb-2">Email (Optional)</label>
              <input
                type="email"
                placeholder="Email"
                className="rounded-full px-4 py-2 border border-gray-300 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="font-bold mb-2">Phone number</label>
              <input
                type="text"
                placeholder="Phone number"
                className="rounded-full px-4 py-2 border border-gray-300 outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="font-bold mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Message..."
                className="rounded-xl px-4 py-2 border border-gray-300 outline-none resize-none"
              />
            </div>

            {/* Submit */}
            <button className="w-full py-3 rounded-full bg-[#fcbc1f] text-white font-bold hover:opacity-90 transition">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}