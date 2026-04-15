import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="max-w-7xl mx-auto pt-32 pb-8 space-y-20">
        <div className="flex gap-12">
          <div className="space-y-4">
            <h3 className="text-4xl font-extrabold text-white">DigiTools</h3>
            <p className="text-white leading-6">
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>
          <div className="mr-2.5">
            <ul className="space-y-4">
              <li className="text-[20px] font-medium text-white">Product</li>
              <li className="text-white">Features</li>
              <li className="text-white">Pricing</li>
              <li className="text-white">Templates</li>
              <li className="text-white">Integrations</li>
            </ul>
          </div>
          <div className="mr-24">
            <ul className="space-y-4">
              <li className="text-[20px] font-medium text-white">Company</li>
              <li className="text-white">About</li>
              <li className="text-white">Blog</li>
              <li className="text-white">Careers</li>
              <li className="text-white">Press</li>
            </ul>
          </div>
          <div className="mr-11">
            <ul className="space-y-4">
              <li className="text-[20px] font-medium text-white">Resources</li>
              <li className="text-white">Documentation</li>
              <li className="text-white">Help Center</li>
              <li className="text-white">Community</li>
              <li className="text-white">Contact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[20px] font-medium text-white">Social Links</h5>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <AiFillInstagram></AiFillInstagram>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <FaFacebookSquare></FaFacebookSquare>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <FaXTwitter></FaXTwitter>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-8 border-t-2 border-[#FAFAFA]">
            <div>
                <p className="text-[#FAFAFA]">© 2026 Digitools. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
                <p className="text-[#FAFAFA]">Privacy Policy</p>
                <p className="text-[#FAFAFA]">Terms of Service</p>
                <p className="text-[#FAFAFA]">Cookies</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
