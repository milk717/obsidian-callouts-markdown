const BackgroundCover = () => {
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 overflow-clip bg-indigo-50 -z-20">
      <svg
        viewBox="0 0 1024 1024"
        className="relative left-0 -bottom-1/2 -z-10 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true">
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.2"></circle>
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6"></stop>
            <stop offset="1" stopColor="#E935C1"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundCover;
