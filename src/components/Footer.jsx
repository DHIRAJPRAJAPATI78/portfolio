
const date = new Date();
export default function Footer() {
  return (
    <footer className='relative overflow-hidden border-t border-white/10 backdrop-blur-sm'>
      <div className='absolute -top-40 left-1/2 h-40 w-[800px] -translate-x-1/2 blur-[100px]'></div>

      <div className='container mx-auto px-4 py-12' style={{ opacity: 1 }}>
        <div className='flex flex-col items-center justify-center gap-8'>
          <div
            className='flex items-center justify-center gap-6'
            style={{ opacity: 1, transform: "none" }}
          >
            {/* GitHub */}
            <a
              href='https://github.com/DHIRAJPRAJAPATI78'
              target='_blank'
              rel='noopener noreferrer'
              className='group relative'
            >
              <span className='absolute -inset-2 -z-10 scale-0 rounded-full bg-white/5 transition-all duration-300 group-hover:scale-100'></span>
              <div
                className='flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-colors duration-300 hover:bg-purple-500/20 hover:text-purple-300'
                style={{ transform: "none" }}
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
                  className='lucide lucide-github h-5 w-5'
                >
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                  <path d='M9 18c-4.51 2-5-2-7-2'></path>
                </svg>
              </div>
              <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href='https://www.linkedin.com/in/dhiraj-prajapati-859003256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
              target='_blank'
              rel='noopener noreferrer'
              className='group relative'
            >
              <span className='absolute -inset-2 -z-10 scale-0 rounded-full bg-white/5 transition-all duration-300 group-hover:scale-100'></span>
              <div
                className='flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-colors duration-300 hover:bg-blue-500/20 hover:text-blue-400'
                style={{ transform: "none" }}
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
                  className='lucide lucide-linkedin h-5 w-5'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect width='4' height='12' x='2' y='9'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </div>
              <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                LinkedIn
              </span>
            </a>

            {/* Email */}
            <a
              href='mailto:dhirajkumarprajapati1200@gmail.com'
              target='_blank'
              aria-label='Gmail'
              rel='noopener noreferrer'
              className='group relative'
            >
              <span className='absolute -inset-2 -z-10 scale-0 rounded-full bg-white/5 transition-all duration-300 group-hover:scale-100'></span>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-colors duration-300 hover:bg-purple-500/20 hover:text-purple-300'>
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
                  className='lucide lucide-mail h-5 w-5'
                >
                  <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                </svg>
              </div>
              <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                Email
              </span>
            </a>
          </div>

          {/* Divider */}
          <div
            className='flex w-full max-w-xs items-center gap-4'
            style={{ opacity: 1, transform: "none" }}
          >
            <div className='h-px flex-1 bg-gradient-to-r from-transparent to-white/20'></div>
            <div className='h-1.5 w-1.5 rounded-full bg-purple-500/50'></div>
            <div className='h-px flex-1 bg-gradient-to-l from-transparent to-white/20'></div>
          </div>

          <p
            className='text-center text-sm text-white/60'
            style={{ opacity: 1, transform: "none" }}
          >
            &copy; {date.getFullYear()}{" "}
            <span className='bg-gradient-to-r from-white to-purple-300 bg-clip-text font-medium text-transparent'>
              Dhiraj Prajapati
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
