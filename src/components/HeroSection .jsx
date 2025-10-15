// import { useGSAP } from "@gsap/react";
// import { ArrowRight, Copy, Check } from "lucide-react";
// import gsap from "gsap";
// import { useRef, useState } from "react";

// const HeroSection = () => {
//   const containerRef = useRef();
//   const [copy, setCopy] = useState(true);
//   const email = "dhirajkumarprajapati1200@gmail.com";
//   const message = "Copied to clipboard";
//   useGSAP(
//     () => {
//       const tl = gsap.timeline();

//       tl.from(".tagline", {
//         y: 100,
//         opacity: 0,
//         duration: 0.6,
//         delay: 0.2,
//         ease: "power2.out",
//       })
//         .from(
//           ".subtitle",
//           {
//             y: 100,
//             opacity: 0,
//             duration: 0.8,
//             ease: "power2.out",
//           },
//           "-=0.2"
//         ) // slight overlap for smoother flow
//         .from(
//           ".button",
//           {
//             y: 100,
//             opacity: 0,
//             duration: 0.4,
//             ease: "power2.out",
//           },
//           "-=0.3"
//         )
//         .from(
//           ".title span",
//           {
//             y: 40,
//             opacity: 0,
//             stagger: 0.1,
//             ease: "power2.out",
//           },
//           "-=0.8"
//         ); // starts just before button finishes

//       return () => tl.kill();
//     },
//     { scope: containerRef }
//   );

//   const handleCopy = () => {
//     navigator.clipboard.writeText(email).then(() => {
//       setCopy(false);
//       setTimeout(() => setCopy(true), 1000);
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       className='relative z-10 container mx-auto px-4 md:px-6 pt-14'
//     >
//       <div className='max-w-6xl mx-auto text-center'>
//         {/* Tagline */}
//         <div className='tagline inline-flex items-center gap-2 mt-20 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-12'>
//           <span className='bg-[#9810F2] px-1.5 text-white  rounded-full -ml-1.5'>
//             new
//           </span>
//           <div className='shiny-text animate-pulse text-white/80'>
//             Coming soon...
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className='title mt-3 text-5xl font-bold text-white md:text-[5.5rem] flex flex-wrap justify-center'>
//           <span>C</span>
//           <span>o</span>
//           <span>d</span>
//           <span>e</span>
//           <span>r</span>
//           <span className='w-2' />
//           <span className='bg-gradient-to-r from-[#007BFF] to-[#FF0080] bg-clip-text text-transparent font-bold'>
//             X
//           </span>
//           <span className='w-2' />
//           <span>E</span>
//           <span>x</span>
//           <span>p</span>
//           <span>l</span>
//           <span>o</span>
//           <span>r</span>
//           <span>e</span>
//           <span>r</span>
//         </h1>

//         {/* Subtitle */}
//         <p className='subtitle grad-white text-base sm:text-lg md:text-2xl mb-8 leading-relaxed tracking-wide mx-auto mt-8 font-semibold text-white/90'>
//           Hello, I’m Dhiraj Prajapati — a Frontend Developer
//         </p>

//         {/* Buttons */}
//         <div className='button animate-fadeInUp mt-4 flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:gap-10'>
//           {/* Connect Button */}
//           <div className='group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1'>
//             <a
//               href='#contact'
//               className='z-10 px-3 text-white transition-colors duration-300 group-hover:text-black'
//             >
//               Let's Connect
//             </a>
//             <span className='absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100' />
//             <span className='z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5'>
//               {/* Arrow Icon Animations */}
              
//               <ArrowRight className='text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0' />
//               <ArrowRight className='absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100' />
           
//             </span>
//           </div>

//           {/* Email Copy */}
//           <div className='relative group '>
//             <button
//               onClick={handleCopy}
//               className='flex items-center gap-2 py-3 text-base font-light text-white/75 outline-none transition-all duration-300 cursor-pointer hover:text-white/90'
//             >
//               {copy ? (
//                 <Copy className='w-5 h-5' />
//               ) : (
//                 <Check className='w-5 h-5' />
//               )}
//               {copy ? "Email Me" : message}
//             </button>
//             <div className='absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-xs bg-black text-white px-2 py-1 rounded shadow-lg'>
//               {email}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import { useGSAP } from "@gsap/react";
import { ArrowRight, Copy, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollToPlugin);

const HeroSection = () => {
  const containerRef = useRef();
  const [copy, setCopy] = useState(true);
  const email = "dhirajkumarprajapati1200@gmail.com";
  const message = "Copied to clipboard";

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(".tagline", {
      y: 80,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
    })
      .from(".title span", {
        y: 50,
        opacity: 0,
        scale: 0.7,
        stagger: 0.05,
        duration: 0.6,
      }, "-=0.4")
      .from(".subtitle", {
        y: 60,
        opacity: 0,
        duration: 0.6,
      }, "-=0.4")
      .from(".button", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      }, "-=0.3");

    return () => tl.kill();
  }, { scope: containerRef });

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopy(false);
      setTimeout(() => setCopy(true), 1000);
    });
  };

  const handleScrollToContact = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#contact",
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={containerRef}
      className='relative z-10 container mx-auto px-4 md:px-6 pt-14'
    >
      <div className='max-w-6xl mx-auto text-center'>
        {/* Tagline */}
        <div className='tagline inline-flex items-center gap-2 mt-20 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-12'>
          <span className='bg-[#9810F2] px-1.5 text-white rounded-full -ml-1.5'>
            new
          </span>
          <div className='shiny-text animate-pulse text-white/80'>
            Coming soon...
          </div>
        </div>

        {/* Title */}
        <h1 className='title mt-3 text-5xl font-bold text-white md:text-[5.5rem] flex flex-wrap justify-center'>
          {"Coder X Explorer".split("").map((char, index) =>
            char === " " ? (
              <span key={index} className='w-2' />
            ) : (
              <span
                key={index}
                className={
                  char === "X"
                    ? "bg-gradient-to-r from-[#007BFF] to-[#FF0080] bg-clip-text text-transparent"
                    : ""
                }
              >
                {char}
              </span>
            )
          )}
        </h1>

        {/* Subtitle */}
        <p className='subtitle grad-white text-base sm:text-lg md:text-2xl mb-8 leading-relaxed tracking-wide mx-auto mt-8 font-semibold text-white/90'>
          Hello, I’m Dhiraj Prajapati — a Frontend Developer
        </p>

        {/* Buttons */}
        <div className='button animate-fadeInUp mt-4 flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:gap-10'>
          {/* Connect Button */}
          <div
            className='group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1'
            onClick={handleScrollToContact}
          >
            <div className='z-10 px-3 text-white transition-colors duration-300 group-hover:text-black'>
              Let's Connect
            </div>
            <span className='absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100' />
            <span className='z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5'>
              <ArrowRight className='text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0' />
              <ArrowRight className='absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100' />
            </span>
          </div>

          {/* Email Copy */}
          <div className='relative group'>
            <button
              onClick={handleCopy}
              className='flex items-center gap-2 py-3 text-base font-light text-white/75 outline-none transition-all duration-300 cursor-pointer hover:text-white/90'
            >
              {copy ? <Copy className='w-5 h-5' /> : <Check className='w-5 h-5' />}
              {copy ? "Email Me" : message}
            </button>
            <div className='absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-xs bg-black text-white px-2 py-1 rounded shadow-lg'>
              {email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


