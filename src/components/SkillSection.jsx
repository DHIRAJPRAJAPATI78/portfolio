import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const skills = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
  { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
  { name: "Zod", icon: "https://cdn.simpleicons.org/Zod" },
  { name: "Git", icon: "https://cdn.simpleicons.org/Git" },
  { name: "Shadcn", icon: "https://cdn.simpleicons.org/shadcnui/white" },

];

gsap.registerPlugin(ScrollTrigger);
export default function SkillSection() {
  const containerRef = useRef(null);
useGSAP(() => {
  // Animation for image
  gsap.from(".img img", {
    y: -200,
    opacity: 0,
    duration: 1.6,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".img img",
      start: "top 30%",
      toggleActions: "play none none none",
      once: true,
    },
  });
  // Animation for skills
  const items = gsap.utils.toArray(".skill > div"); // each skill item
 gsap.from(items, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reset", // Replay every time it comes into view
      once: false,
      markers: false,
    },
  });

}, []);
  return (
    <section>
<div
      className="img relative mx-auto size-[300px] translate-y-36 md:size-[380px] md:translate-y-40"
      style={{ transform: "none", opacity: 0.65 }}
    >
      <img
        draggable={false}
        alt="skills cover rotating image"
        loading="lazy"
        width={300}
        height={300}
        decoding="async"
        className="z-10 w-full select-none"
        src="/gpt.webp"
        style={{ color: "transparent" }}
      />
    </div>
     <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>

        <span className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/30 via-white/15 to-white/7 bg-clip-text text-transparent select-none tracking-tighter">
          SKILLS
        </span>

        <h2 className="absolute text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize">
          Skills
        </h2>
      </div>

      <div className="flex items-center gap-4 my-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-purple-500/70"></div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50"></div>
      </div>

      <p className="text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light">
        I constantly try to improve
      </p>
    </div>
    <div ref={containerRef} className="skill mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4">
      {skills.map(({ name, icon }) => (
        <div
          key={name}
          className="group relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base hover:bg-neutral-800 transition-colors duration-300"
          tabIndex="0"
        >
          <img
            alt={name}
            loading="lazy"
            width="18"
            height="18"
            className="mr-0-1 w-4 transition-transform duration-300 group-hover:scale-125 lg:w-5"
            src={icon}
            style={{ color: "transparent" }}
          />
          <span className="relative">
            <span className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {name}
            </span>
            <span className="transition-colors duration-300">{name}</span>
          </span>
        </div>
      ))}
    </div> </section>
  );
}
