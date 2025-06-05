


export default function Blog() {
  return (
    <section className="min-h-screen flex items-center justify-center text-gray-300 px-4">
      <div className="text-center max-w-xl">
        <div className="flex justify-center mb-6 text-violet-500 text-5xl">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-violet-500"
          >
            <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Blog Coming Soon
        </h1>

        <p className="text-gray-400 mb-6 text-base md:text-lg">
          I'm working on something awesome for you! My blog will be launching soon with insights, tutorials, and dev-life stories.
        </p>

        <span className="inline-block bg-violet-600/20 text-violet-500 px-4 py-2 rounded-full text-sm tracking-wide">
          Stay tuned 👀
        </span>
      </div>
    </section>
  );
}


