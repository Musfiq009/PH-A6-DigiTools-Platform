const StarterSubscription = () => {
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-sm rounded-xl">
        <div className="card-body space-y-3 bg-[#F9FAFC]">
          <div className="space-x-2">
            <h2 className="text-2xl font-bold text-[#101727]">Starter</h2>
            <p className="text-[#627382]">Perfect for getting started</p>
          </div>
          <div>
            <p className="text-[#627382] text-2xl">
              <span className="text-5xl text-[#101727] font-bold">$0</span>
              /month
            </p>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Access to 10 free tools</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Basic templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Community support</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>1 project per month</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block text-white rounded-full">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterSubscription;
