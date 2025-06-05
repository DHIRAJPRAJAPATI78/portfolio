

const projects = [
  // {
  //   title: "Diteck Technology",
  //   description:
  //     "A full-stack agency platform with AI-powered features, secure job application flow, and role-based dashboards for Admin and Users.",
  //   image: "../public/diteck.webp",
  //   technologies: ["Next.js", "Tailwind", "Node.js", "MongoDB", "AWS S3"],
  //   website: "https://diteck.vercel.app/",
  //   type: "Team project",
  // },
];


const ProjectCard = ({ project }) => (
  <>
    <div className='w-full  border  mb-30'>
      <div className='project-card flex w-full flex-col lg:flex-row lg:items-center lg:justify-between'>
        {/* === Left Side (Image Card) === */}
        <a
          href={project.website}
          target='_blank'
          rel='noopener noreferrer'
          className='relative w-full overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl transition-all duration-300 hover:shadow-blue-500/20 md:pointer-events-auto lg:w-2/3 lg:rounded-3xl lg:p-2'
        >
          {/* Top Line Gradient */}
          <div
            className='absolute inset-x-0 top-0 h-px'
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0) 5%, rgba(255,255,255,0.8) 35%, #fff 50%, rgba(255,255,255,0.8) 65%, rgba(0,0,0,0) 95%)",
            }}
          />
          {/* Gradient Background */}
          <div className='group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-black/40 to-transparent lg:rounded-2xl'>
            <div
              className='absolute inset-0 -z-10'
              style={{
                background:
                  "linear-gradient(188.62deg, rgb(31,41,55) 49.9%, rgb(37,99,235) 81.7%, rgb(59,130,246) 93.88%, rgb(147,197,253) 113.5%)",
              }}
            />

            <div className='w-full flex justify-center p-4'>
              <img
                src={project.image}
                alt={project.title}
                loading='lazy'
                className='w-full max-w-[85%] translate-y-5 -rotate-3 rounded-lg border border-white/20 transition-all duration-300 hover:-rotate-3 hover:scale-105 lg:rotate-0'
                style={{ boxShadow: "rgb(37, 99, 235) 0px 0px 30px" }}
              />
            </div>
          </div>
        </a>

        {/* === Right Side (Text Info) === */}
        <div className='mt-6 mb-24 flex flex-col px-2 lg:mt-0 lg:mb-0 lg:w-1/3 lg:pl-8 lg:pr-2 text-white'>
          <div className='flex items-center'>
            <h2 className='text-lg font-bold'>{project.title}</h2>
            <div
              className='ml-3 h-1 rounded-full'
              style={{ backgroundColor: "#2563eb", width: "2rem" }}
            />
          </div>
          <p className='text-sm font-medium text-muted-foreground mt-2'>
            {project.type}
          </p>
          <p className='text-sm my-2 text-muted-foreground'>
            {project.description}
          </p>

          <div className='my-4 flex flex-wrap items-center gap-1.5'>
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className='rounded-md border border-white/10 bg-blue-600/20 px-2 py-1 text-xs font-medium text-blue-400 backdrop-blur-sm'
              >
                {tech}
              </div>
            ))}
          </div>

          <div className='flex w-full flex-col  sm:flex-row gap-2 sm:gap-4'>
            <a
              href={project.website}
              target='_blank'
              rel='noopener noreferrer'
              className='flex w-full sm:w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-neutral-800/80 to-blue-600/20 px-5 py-2.5 shadow-inner backdrop-blur-sm'
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
                className='lucide lucide-external-link size-4'
              >
                <path d='M15 3h6v6'></path>
                <path d='M10 14 21 3'></path>
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
              </svg>
              <span className='font-medium text-sm'>Website</span>
            </a>

            <a
              href='#'
              className='flex w-full sm:w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-neutral-800/80 to-blue-600/20 px-5 py-2.5 shadow-inner backdrop-blur-sm'
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
                className='lucide lucide-github size-4'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                <path d='M9 18c-4.51 2-5-2-7-2'></path>
              </svg>
              <span className='font-medium text-sm'>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

const ProjectSection = () => {
  if(projects.length==0){
  return (
    <section className="min-h-screen flex items-center justify-center text-gray-300 px-4">
      <div className="text-center max-w-xl">
        <div className="flex justify-center items-center mb-6 text-yellow-500 text-5xl">
         <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
  className="w-16 h-16 text-orange-400"
>
  <path d="M10.29 3.86a1.25 1.25 0 0 1 2.42 0l9.25 16.5A1.25 1.25 0 0 1 20.84 22H3.16a1.25 1.25 0 0 1-1.12-1.64l9.25-16.5ZM12 6.6 4.5 20h15L12 6.6Zm0 8.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z" />
</svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          No Projects Yet
        </h1>

        <p className="text-gray-400 mb-6 text-base md:text-lg">
          I don't have any live projects right now, but I'm building and learning every day.
        </p>

        <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm tracking-wide">
          Stay curious 🛠️
        </span>
      </div>
    </section>
  )
}
  return (
    <>
      <h2
        className='relative z-2 mt-40 text-center text-4xl font-medium tracking-tight text-white mb-36 sm:text-5xl  md:text-6xl'
        style={{
          textShadow:
            "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
          opacity: 1,
          transform: "none",
        }}
      >
        <p className='mb-3 text-xs font-normal uppercase tracking-widest text-white/70 md:text-sm'>
          FEATURED CASE STUDIES
        </p>
        <span>
          <span>Curated </span>
          <span className='animate-gradient-x font-nyght tracking-wide text-colorfull'>
            Work
          </span>
        </span>
      </h2>
      <div className='relative mx-auto flex w-full'>
        <div className='mx-auto flex max-w-2xl flex-col gap-y-6 md:gap-y-24 lg:max-w-[85%]'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
