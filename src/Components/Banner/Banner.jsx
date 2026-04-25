const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="badge badge-soft badge-primary px-4 py-3 rounded-full">
              <img src="/src/assets/Bullet.png" alt="bullet point" />
              New: AI-Powered Tools Available
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-[#101727] leading-20 sm:leading-24">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            <p className="text-lg text-[#627382] leading-7 max-w-2xl">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. <br /> Explore Products
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-amber-50 font-bold">
              Explore Products
            </button>
            <button className="btn btn-outline btn-primary rounded-full font-bold">
              <img src="/src/assets/Play.png" alt="play icon" /> Watch Demo
            </button>
          </div>
        </div>
        <div>
            <img src="/src/assets/banner.png" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
