const Steps = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="max-w-7xl mx-auto py-32 space-y-10 ">
        <div className="text-center space-y-4">
          <h2 className="text-[#101727] text-5xl font-extrabold">
            Get Started in 3 Steps
          </h2>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="w-full flex flex-col justify-center items-center shadow-lg rounded-xl space-y-4 py-20 px-6 bg-white">
            <div className="flex justify-center w-fit p-3 rounded-full bg-neutral-content">
              <img src="/src/assets/user.png" alt="User" />
            </div>
            <h3 className="text-2xl font-bold text-[#101727]">
              Create Account
            </h3>
            <p className="text-[#627382] text-center">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center shadow-lg rounded-xl space-y-4 py-20 px-6 bg-white">
            <div className="flex justify-center w-fit p-3 rounded-full bg-neutral-content">
              <img src="/src/assets/package.png" alt="Package" />
            </div>
            <h3 className="text-2xl font-bold text-[#101727]">
              Choose Products
            </h3>
            <p className="text-[#627382] text-center">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center shadow-lg rounded-xl space-y-4 py-20 px-6 bg-white">
            <div className="flex justify-center w-fit p-3 rounded-full bg-neutral-content">
              <img src="/src/assets/rocket.png" alt="Rocket" />
            </div>
            <h3 className="text-2xl font-bold text-[#101727]">
              Start Creating
            </h3>
            <p className="text-[#627382] text-center">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
