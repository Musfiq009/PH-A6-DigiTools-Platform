const CTA = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-32">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-4">
          <h3 className="text-white text-[40px] font-extrabold text-center">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-white leading-6 text-center">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
        </div>
        <div className="space-y-4">
            <div className="flex gap-4 justify-center">
                <button className="btn rounded-full">
                    <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold shadow-none">Explore Products</span>
                </button>
                <button className="btn rounded-full bg-transparent border border-white text-white shadow-none">View Pricing</button>
            </div>
            <p className="text-white text-center">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
