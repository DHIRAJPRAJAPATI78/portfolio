import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const educationData = [
  {
    id: 1,
    period: "2022 - 2026",
    title: "Bachelor in Computer Science and Engineering",
    institution: "RVS College of Enginnering and Technology (RVSCET)",
    cgpa: "GPA: 7.5 out of 10.00",
    icon: "🎓",
  },
  {
    id: 2,
    period: "2021-2022",
    title: "Secondary School Education ",
    institution: "SS+2 High School",
    cgpa: "72% out of 100%",
    icon: "🎓",
  },
    
];

export default function Education() {
  const educationTextRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(educationTextRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: educationTextRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
 const cards = gsap.utils.toArray(".education-card");

cards.forEach((card) => {
  gsap.fromTo(
    card,
    { y: -60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        // markers: true, // enable for debugging
      },
    }
  );
});
  }, []);

  return (
    <section className='py-24 text-gray-300 relative overflow-hidden'>
      <div className='flex flex-col items-center justify-center py-16 px-4'>
        <div className='relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto'>
          {/* Large translucent background text */}
          <span ref={educationTextRef} className='text-7xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/7 to-white/6 bg-clip-text text-transparent select-none tracking-tighter'>
            EDUCATION
          </span>

          {/* Foreground heading */}
          <h2 className='absolute text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize'>
            Education
          </h2>
        </div>

        {/* Decorative divider */}
        <div className='flex items-center gap-4 my-6'>
          <div className='h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50' />
          <div className='h-1.5 w-1.5 rounded-full bg-purple-500/70' />
          <div className='h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50' />
        </div>

        {/* Subtitle */}
        <p className='text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light'>
          Academic Journey
        </p>
      </div>

      <div className='flex justify-center' style={{ opacity: 1 }}>
        <div className='relative flex flex-col gap-16 max-w-2xl w-full px-6'>
          {/* Vertical timeline line */}
          <div
            className='absolute left-1/2 top-6 bottom-6 w-1 bg-violet-600 rounded'
            style={{ transform: "translateX(-50%)" }}
          ></div>

          {/* Map over education data */}
          {educationData.map(
            ({ id, period, title, institution, cgpa, icon }) => (
              <div
                key={id}
                className='education-card relative flex flex-col items-center group'
                style={{ opacity: 1, transform: "none" }}
              >
                {/* Circle with border */}
                <div
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-violet-600 bg-[#0A0A0A] z-10 group-hover:scale-125 transition-transform duration-300'
                  style={{ opacity: 1, transform: "none" }}
                />

                <div
                  className='w-full text-center p-6 transition-all duration-300 hover:-translate-y-1'
                  style={{ transform: "none" }}
                >
                  <div className='inline-block px-3 py-1 rounded-full bg-violet-900/20 text-violet-400 text-xs font-medium mb-3'>
                    {period}
                  </div>
                  <h3
                    className='text-2xl font-bold text-white mb-2'
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    <span className='text-violet-400'>{icon}</span> {title}
                  </h3>
                  <p
                    className='text-base text-gray-300 font-medium mb-3'
                    style={{ color: "oklch(0.872 0.01 258.338)" }}
                  >
                    {institution}
                  </p>

                  {/* CGPA/GPA if exists */}
                  {cgpa && (
                    <div
                      className='mt-2 flex items-center justify-center gap-2'
                      style={{ transform: "none" }}
                    >
                      <div className='h-px w-12 bg-gradient-to-r from-transparent to-violet-600/50' />
                      <p className='text-sm font-medium px-3 py-1 rounded-md bg-violet-900/20 text-violet-300'>
                        {cgpa}
                      </p>
                      <div className='h-px w-12 bg-gradient-to-l from-transparent to-violet-600/50' />
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
