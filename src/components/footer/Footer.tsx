export default function Footer() {
    return (
        <footer className="p-[20px] bg-[#f6f6f9]">
            <div className="py-[20px] flex items-start justify-between">
                <div>
                    <img
                        src="/buyobot.png"
                        alt="Buyobot"
                        className="w-[160px] w-[200px]"
                    />
                    <p className="text-gray-400 w-[200px] ml-[30px]">Empowering the next generation of engineers, one robot at a time.</p>
                </div>
                <div>
                    <h2 className="font-bold mb-[20px]">Company</h2>
                    <ul>
                        <li className="mb-[20px]">About Us</li>
                        <li className="mb-[20px]">Careers</li>
                        <li className="mb-[20px]">Contact</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-[20px]">Subscribe to our newsletter</h2>

                    <p className="text-gray-400 mb-[20px] w-[300px]">The latest news, articles, and resources, sent to your inbox weekly.</p>

                    <div>
                        <input type="text" className="rounded-[30px] border-1 border-gray-300 outline-none p-[5px] mr-[10px]" placeholder="Enter your email" />
                        <button className="bg-[#fcbc1f] px-[20px] py-[5px] text-white font-bold rounded-[20px]">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="py-[20px] px-[20px] border-t-1 border-t-gray-300">
                <h3 className="text-gray-400">© Buyobot. All rights reserved.</h3>
            </div>
        </footer>
    )
}
