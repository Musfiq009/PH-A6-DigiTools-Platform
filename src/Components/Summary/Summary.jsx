const Summary = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center">
      <div className="flex gap-0.5 max-w-7xl mx-auto py-16">
        <div className="px-20">
          <h1 className="mb-3 text-6xl font-extrabold text-white">50K+</h1>
          <p className="text-2xl font-medium text-white text-center">Active Users</p>
        </div>
        <div className="divider divider-horizontal before:bg-white after:bg-white py-5"></div>
        <div className="px-20">
          <h1 className="mb-3 text-6xl font-extrabold text-white">200+</h1>
          <p className="text-2xl font-medium text-white text-center">Tools</p>
        </div>
        <div className="divider divider-horizontal before:bg-white after:bg-white py-5"></div>
        <div className="px-20">
          <h1 className="mb-3 text-6xl font-extrabold text-white">4.9</h1>
          <p className="text-2xl font-medium text-white text-center">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
