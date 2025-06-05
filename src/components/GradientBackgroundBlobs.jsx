function GradientBackgroundBlobs() {
 const blobs = [
    {
      position: 'left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]',
      size: 'w-[60vw] h-[10vh] md:w-[600px] md:h-[140px]',
      from: 'from-indigo-500/[0.15]',
      rotate: 'rotate-[12deg]',
    },
    {
      position: 'right-[-5%] md:right-0 top-[70%] md:top-[75%]',
      size: 'w-[50vw] h-[9vh] md:w-[500px] md:h-[120px]',
      from: 'from-rose-500/[0.15]',
      rotate: 'rotate-[-15deg]',
    },
    {
      position: 'left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]',
      size: 'w-[40vw] h-[7vh] md:w-[300px] md:h-[80px]',
      from: 'from-violet-500/[0.15]',
      rotate: 'rotate-[-8deg]',
    },
    {
      position: 'right-[15%] md:right-[20%] top-[10%] md:top-[15%]',
      size: 'w-[30vw] h-[5vh] md:w-[200px] md:h-[60px]',
      from: 'from-amber-500/[0.15]',
      rotate: 'rotate-[20deg]',
    },
    {
      position: 'left-[20%] md:left-[25%] top-[5%] md:top-[10%]',
      size: 'w-[25vw] h-[4vh] md:w-[150px] md:h-[40px]',
      from: 'from-cyan-500/[0.15]',
      rotate: 'rotate-[-25deg]',
    },
  ];


  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mask-b-from-50%  ">
      {blobs.map((blob, idx) => (
        <div
          key={idx}
          className={`absolute ${blob.position} ${blob.rotate} opacity-100 `}
          style={{
                  animation: "floatY 1.5s ease-in-out infinite alternate",
                }}
        >
          <div className={`relative ${blob.size}`}>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${blob.from} to-transparent backdrop-blur-[1px] border border-white/15 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GradientBackgroundBlobs;
