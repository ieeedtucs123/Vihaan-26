import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white font-bangers">
        <div className="max-w-7xl px-4 py-8 flex flex-row md:flex-row justify-between items-start gap-5 ml-auto mr-auto">
        <div className="flex flex-col items-center md:items-start mt-10 ">
          <img src="../vihaanlogo.svg" alt="Vihaan Logo" className="w-50 h-50 items-center mr-20 " />
        </div>

        <div className="flex flex-col items-center md:items-start ">
          <h2 className="text-4xl mb-2">VENUE</h2>
          <div className="font-mono text-lg mb-2 text-center md:text-left">
            <span className="inline-block mr-2"><i class="fa-sharp fa-solid fa-location-dot"></i></span>
            <span>Delhi Technological<br/>University</span>
          </div>
          <div className="w-[400px] h-[200px] rounded-lg overflow-hidden opacity-75 hover:opacity-100 transition-opacity hover:scale-105 transition-transform duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13991.928144078916!2d77.10000993955076!3d28.749953300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1766730612878!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>

        <div className="flex flex-col items-center mr-6">
          <h2 className="text-4xl  mb-2">CONTACT US</h2>
          <div className="font-mono text-lg flex gap-2 mb-2">
            <i class="fa-sharp fa-solid fa-phone mt-3"></i>
             <div className="flex flex-col">
              <span> Jahan Sharma</span>
              <span>(+91 8273754287)</span>
            </div>
          </div>
          <div className="font-mono text-lg mb-3 flex gap-2">
         <i class="fa-sharp fa-solid fa-phone mt-2"></i>
             <div className="flex flex-col">
              <span> Jahan Sharma</span>
              <span>(+91 8273754287)</span>
            </div>
          </div>
          <div className="font-mono text-lg flex items-center gap-2 ml-22">
            <i class="fa-solid fa-message"></i>
            <span>ieeedtu.contact@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl mb-2">SOCIAL MEDIA</h2>
          <div className="font-mono text-lg mb-5">Code, Chaos, Comics</div>
          <div className="flex gap-4 mb-4">

            {/* discord icon idk discord link */}
             <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center group"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-14 h-14 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                aria-hidden="true"
              >
                <polygon
                  fill="#2563eb"
                  className="transition-colors duration-300 group-hover:fill-indigo-400"
                  points="
                    50,0 57,18 74,6 70,26 90,20 80,38
                    100,50 80,62 90,80 70,74 74,94 57,82
                    50,100 43,82 26,94 30,74 10,80 20,62
                    0,50 20,38 10,20 30,26 26,6 43,18
                  "
                />
              </svg>
              <i class="fa-brands fa-discord absolute text-white text-2xl m-4 transition-colors duration-300 group-hover:fill-indigo-500  group-hover:scale-110 "></i>
            </a>
            
            {/* instagram icon */}
            <a href="https://www.instagram.com/ieee.dtu" target="_blank" rel="noopener noreferrer" className="relative group">
              <svg width="64" height="64" viewBox="0 0 60 70" className="absolute  transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
                 <polygon points="32,64 60,34 48,15 14,16 6,32" fill="#e6b800" stroke="#b22222" strokeWidth="4"  className="transition-colors duration-300 group-hover:fill-yellow-300"/>
              </svg>
              <i class="fa-brands fa-instagram relative text-white text-3xl font-extrabold m-4 transition-colors duration-300 group-hover:text-yellow-600 group-hover:rounded-full"></i>
            
            </a>

            {/* linkedIn icon */}
            <a
              href="https://www.linkedin.com/company/ieee-dtu/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center group"
            >
            
              <svg
                viewBox="0 0 100 100"
                className="w-14 h-14 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                aria-hidden="true"
              >
                
                <polygon
                  fill="#b91c1c"
                  className="transition-colors duration-300 group-hover:fill-blue-500"
                  points="
                    50,0 57,18 74,6 70,26 90,20 80,38
                    100,50 80,62 90,80 70,74 74,94 57,82
                    50,100 43,82 26,94 30,74 10,80 20,62
                    0,50 20,38 10,20 30,26 26,6 43,18
                  "
                />
              </svg>

              <i className="fa-brands fa-linkedin-in absolute text-white text-2xl transition-colors duration-300 group-hover:fill-blue-400  group-hover:scale-110" />
            </a>

          </div>

           {/* button that will redirect to landing page idk how
           to do without the loading and routes */}
            <button
              className="rounded-full border-2  hover:border-black border-[#d4d700] p-2 text-[#d4d700] hover:bg-[#d4d700]  hover:!text-black transition-colors transition mt-10"
              onClick={() => { window.location.href = "/"; }}
              title="Go to Landing Page"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-current transition-colors text-inherit"
   >
                <g transform="translate(0, -3)">
                <path d="M12 24V5M5 12l7-7 7 7" />
                </g>
              </svg>
            </button>
        </div>
      </div>
      <hr className="border-gray-700" />
      <div className="text-center py-2 text-[#d4d700] text-lg tracking-wider  " style={{fontFamily: 'Bangers, system-ui'}}>
        MADE WITH CARE BY IEEE DTU
      </div>
    </footer>
  );
}
