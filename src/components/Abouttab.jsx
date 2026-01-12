import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
const Abouttab = () => {
  const titleRef = useRef();
  const borRef = useRef();
  const secRef = useRef();

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     defaults: { ease: "power2.out" },
  //   });

  //   tl.from(secRef.current.querySelectorAll("div"), {
  //     y: 40,
  //     opacity: 0,
  //     stagger: 0.15,
  //     duration: 0.4,
  //   });

  //   // Animate social links
  //   tl.fromTo(
  //     ".social-link",
  //     { y: 40, opacity: 0 }, // start state
  //     { y: 0, opacity: 1, duration: 0.4, stagger: 0.2 }, // end state
  //     "-=0.25"
  //   );

  //   // Animate border
  //   tl.fromTo(
  //     borRef.current,
  //     { width: "0%" },
  //     {
  //       width: "100%",
  //       duration: 0.7,
  //       ease: "power3.out",
  //     },
  //     "-=0.5"
  //   );
  // }, []);

 useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  // Animate intro section content
  tl.from(secRef.current.querySelectorAll("div"), {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.4,
  });

  // Animate border line under "Dhiraj"
  tl.fromTo(
    borRef.current,
    { width: "0%" },
    {
      width: "100%",
      duration: 0.7,
      ease: "power3.out",
    },
    "-=0.5"
  );

}, []);

  return (
    <section className='py-24 text-gray-300 relative overflow-hidden'>
      <div className='text-center mt-10 px-4 '>
        <h2
          ref={titleRef}
          className=' relative  z-20 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight md:mb-36 '
          style={{
            textShadow:
              "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
          }}
        >
          <p className='mb-3 text-xs md:text-sm font-normal tracking-widest text-white/70 uppercase'>
            LET’S CONNECT A LITTLE
          </p>
          <span>
            <span>WHO IS </span>
            <span className='text-colorfull animate-gradient-x font-nyght tracking-wide'>
              Dhiraj?
            </span>
          </span>
        </h2>

        <section
          ref={secRef}
          className=' text-gray-300 relative overflow-hidden  '
        >
          <div
            className='flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-6 gap-12 lg:gap-20'
            style={{ opacity: 1 }}
          >
            {/* Image Section */}
            <div
              className='relative order-2 lg:order-1'
              style={{ opacity: 1, transform: "none" }}
            >
              <div className='relative'>
                <div className='absolute -inset-4 rounded-full bg-gradient-to-r from-violet-500/20 to-orange-500/20 blur-lg -z-10'></div>
                <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500/30 to-orange-500/30 -z-10'></div>
                <div className='flex justify-center size-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl'>
                  <img
                    alt="Dhiraj's Avatar"
                    width={300}
                    height={300}
                    decoding='async'
                    className='h-full w-full object-cover'
                    src='/memoji-smile.webp'
                    style={{ color: "transparent" }}
                  />
                </div>

                <div
                  className='absolute -top-6 -right-6 bg-gradient-to-br from-violet-600 to-violet-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg'
                  style={{
                    animation: "floatY 1.5s ease-in-out infinite alternate",
                  }}
                >
                  Developer
                </div>
                <div
                  className='absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg'
                  style={{
                    animation: "floatY 1.5s ease-in-out infinite alternate",
                  }}
                >
                  CS Student
                </div>
              </div>
            </div>

            {/* Text Content Section */}
            <div
              className='lg:text-left text-center order-1 lg:order-2 max-w-xl'
              style={{ opacity: 1 }}
            >
              <h3
                className='text-3xl md:text-4xl font-bold mb-6 text-white'
                style={{ opacity: 1, transform: "none" }}
              >
                Hey! I'm{" "}
                <span className='relative'>
                  <span className='bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent font-bold  py-1'>
                    Dhiraj
                  </span>
                  <span
                    ref={borRef}
                    className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full'
                    style={{ width: "0%" }}
                  ></span>
                </span>
              </h3>
              <p
                className='text-lg leading-7 mb-5 text-gray-200'
                style={{ opacity: 1, transform: "none" }}
              >
                Hi, I’m Dhiraj Prajapati — a Computer Science student and
                aspiring Web Developer. I enjoy learning modern web technologies
                like React, Next.js, and MongoDB, and I'm eager to apply my
                skills to build clean, responsive, and impactful digital
                experiences.
              </p>
              <p
                className='text-lg leading-7 mb-6 text-gray-200'
                style={{ opacity: 1, transform: "none" }}
              >
                I'm always leveling up my skills and currently diving deeper
                into backend and DevOps. Whether it's full-time or freelance,
                I'm open to exciting opportunities where I can grow and build
                dope stuff with amazing people.
              </p>

              <div className='mb-8' style={{ opacity: 1, transform: "none" }}>
                <h4 className='text-xl font-semibold mb-4 text-white'>
                  What I Do
                </h4>
                <div className='flex flex-wrap gap-4 lg:justify-start justify-center'>
                  {/* Frontend */}
                  <div
                    className='skill-badge flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10'
                    style={{
                      backgroundColor:
                        "oklab(0.999994 0.0000455678 0.0000200868 / 0.05)",
                      transform: "none",
                    }}
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 640 512'
                      className='text-violet-400'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z'></path>
                    </svg>
                    <span>Frontend Development</span>
                  </div>

                  {/* Backend */}
                  <div
                    className='skill-badge flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10'
                    style={{
                      backgroundColor:
                        "oklab(0.999994 0.0000455678 0.0000200868 / 0.05)",
                      transform: "none",
                    }}
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 640 512'
                      className='text-orange-400'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z'></path>
                    </svg>
                    <span>Backend Development</span>
                  </div>

                  {/* Database */}
                  <div
                    className='skill-badge flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10'
                    style={{
                      backgroundColor:
                        "oklab(0.999994 0.0000455678 0.0000200868 / 0.05)",
                      transform: "none",
                    }}
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 640 512'
                      className='text-green-400'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z'></path>
                    </svg>
                    <span>Computer Science</span>
                  </div>
                </div>
                <div className='opacity-100 transform-none mt-10'>
                  <h4 className='text-xl font-semibold mb-4 text-white text-center lg:text-left '>
                    Connect With Me
                  </h4>

                  <div className='flex items-center gap-5 mt-4 justify-center lg:justify-start flex-wrap  '>
                    <a
                      href='https://github.com/DHIRAJPRAJAPATI78'
                      aria-label='GitHub'
                      target='_blank'
                      rel='noopener noreferrer'
                      className=' social-link flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-gray-700/30 text-gray-300 hover:text-gray-100 transition-all duration-300 border border-white/10'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 496 512'
                        className='text-xl'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                      </svg>
                    </a>

                    <a
                      href='https://www.linkedin.com/in/dhiraj-prajapati-859003256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                      aria-label='LinkedIn'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='social-link flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-all duration-300 border border-white/10'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-linkedin text-xl'
                      >
                        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                        <rect width='4' height='12' x='2' y='9' />
                        <circle cx='4' cy='4' r='2' />
                      </svg>
                    </a>

                    <a
                      href='mailto:dhirajkumarprajapati1200@gmail.com'
                      target='_blank'
                      aria-label='Gmail'
                      className='social-link flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-red-500/20 text-gray-300 hover:text-red-400 transition-all duration-300 border border-white/10'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 512 512'
                        className='text-xl'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z' />
                      </svg>
                    </a>
                  </div>

                  <div className='mt-8 text-center lg:text-left' tabIndex={0}>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                     href='https://drive.google.com/uc?export=download&id=1qi_1u8dDLte7BVB51kZvPkqNUki3O7Ad'
                      className='inline-block px-8 py-3 bg-gradient-to-r from-violet-600 to-orange-500 text-white font-medium rounded-full shadow-lg hover:shadow-violet-500/20 transition-all duration-300'
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Abouttab;
