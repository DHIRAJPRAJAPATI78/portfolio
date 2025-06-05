import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [idx, setIdx] = useState(0);
 const location = useLocation();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "More", href: "/more" },
  ];
 useEffect(() => {
    const path = location.pathname;
    const indexFromPath = navLinks.findIndex(link => link.href === path);
    
    if (indexFromPath !== -1) {
      setIdx(indexFromPath);
      localStorage.setItem("navIndex", indexFromPath); // keep in sync
    } else {
      // fallback to localStorage if path not in navLinks
      const storedIdx = localStorage.getItem("navIndex");
      if (storedIdx !== null) {
        setIdx(parseInt(storedIdx, 10));
      }
    }
  }, [location.pathname]);
  const handleClick = (index) => {
    setIdx(index);
    localStorage.setItem("navIndex", index);
    setMenuOpen(false); // close menu on link click (for mobile)
  };

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-30 h-15 flex items-center justify-center'>
        <nav className='fixed top-5 z-20 w-full flex items-center justify-center px-4'>
          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center justify-center space-x-5 px-1.5 py-1 border border-white/10 bg-white/5 rounded-full text-accent-foreground backdrop-blur-md'>
            {navLinks.map(({ label, href }, index) => (
              <li
                key={label}
                className={`cursor-pointer relative inline-block px-4 py-1.5 text-base font-semibold rounded-full p-2 transition-[text-shadow,color] duration-200 ${
                  index === idx
                    ? "text-white/95 hover:text-white/85"
                    : "text-white/70 hover:text-white/85"
                }`}
              >
                <p href={href} onClick={() => handleClick(index)}>
                  <Link to={href}>{label}</Link>
                </p>

                {index === idx && (
                  <div className='absolute inset-0 -z-10 w-full h-full rounded-full'>
                    <div className='absolute inset-0 w-full h-full rounded-full bg-[#9810F2]/20 blur-md' />
                    <div className='absolute -top-[9px] left-1/2 w-10 h-1 -translate-x-1/2 rounded-t-full bg-[#9810F2]' />
                    <div className='absolute -top-1 w-8 h-6 rounded-full blur-sm' />
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className='md:hidden fixed right-4 top-5 z-50 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 transition-transform cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {menuOpen ? (
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 352 512'
                  className='text-white/70 text-xl'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z' />
                </svg>
              ) : (
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 448 512'
                  className='text-white/70 text-xl'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z' />
                </svg>
              )}
            </div>
          </button>

          {/* Animation Keyframes */}
          <style>
            {`
              @keyframes rise {
                0% {
                  opacity: 0;
                  transform: translateY(20px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          </style>

          {/* Mobile Menu */}
          {menuOpen && (
            <>
              {/* Overlay */}
              <div
                className='fixed inset-0 z-30 bg-black/50 backdrop-blur-sm'
                onClick={() => setMenuOpen(false)}
              />

              {/* Centered List */}
              <ul className='fixed top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-3 p-6  text-gray-300 md:hidden'>
                {navLinks.map(({ label, href }, index) => (
                  <li
                    key={label}
                    className='opacity-0 animate-[rise_0.4s_ease-out_forwards]'
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      href={href}
                      className='text-2xl font-semibold block px-4 py-2 text-center hover:text-white'
                      onClick={() => handleClick(index)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
