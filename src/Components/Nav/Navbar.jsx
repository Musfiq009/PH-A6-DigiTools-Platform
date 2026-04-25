import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({selectedCard, onCartClick}) => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="max-w-7xl mx-auto ">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li className="block md:hidden">
                  <a>Login</a>
                </li>
              </ul>
            </div>
            <h1 className="text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent pb-2.5">
              DigiTools
            </h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="font-semibold">Products</a>
              </li>
              <li>
                <a className="font-semibold">Features</a>
              </li>
              <li>
                <a className="font-semibold">Pricing</a>
              </li>
              <li>
                <a className="font-semibold">Testimonials</a>
              </li>
              <li>
                <a className="font-semibold">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-4">
            <div onClick={()=>onCartClick()} className="p-3 cursor-pointer rounded-full hover:bg-neutral-content relative">
              <FiShoppingCart />
              {selectedCard.length>0 ? (<div className="badge badge-error badge-xs absolute top-1 left-6 font-bold">{selectedCard.length}</div>) : null}
            </div>
            <a className="hidden md:block p-2 cursor-pointer rounded-md font-semibold hover:bg-neutral-content">
              Login
            </a>
            <a className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-amber-50">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
