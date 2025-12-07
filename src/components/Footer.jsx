import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#D5E1D5] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
        {/* LEFT: Contact */}
        <div className="w-full md:w-1/3">
          <h3 className="text-sm font-semibold tracking-wide text-[#275835]">
            Get in touch
          </h3>

          <div className="mt-4 space-y-2 text-sm text-[#275835]">
            <p>support@amrutam.global</p>
            <p>
              Amrutam Pharmaceuticals Pvt Ltd.,
              <br />
              chitragupt ganj, Nai Sadak, Lashkar,
              <br />
              Gwalior - 474001
            </p>
            <p className="pt-2">+91 9713171999</p>
          </div>

          {/* Social icons */}
          <div className="mt-5 flex items-center gap-3">
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Youtube} />
            <SocialIcon icon={Twitter} />
            <SocialIcon icon={Linkedin} />
            <SocialIcon icon={MessageCircle} />
          </div>
        </div>

        {/* MIDDLE: Information links */}
        <div className="w-full md:w-1/3">
          <h3 className="text-sm font-semibold tracking-wide text-[#275835]">
            Information
          </h3>

          <ul className="mt-4 space-y-2 text-sm text-[#275835]">
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Privacy Policy for Mobile Apps</li>
            <li>Shipping, return and cancellation Policy</li>
            <li>International Delivery</li>
            <li>For Businesses, Hotels, and Resorts</li>
          </ul>
        </div>

        {/* RIGHT: Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="text-sm font-semibold tracking-wide text-[#275835]">
            Subscribe to our Newsletter and join
            <br />
            Amrutam Family today!
          </h3>

          {/* Email + subscribe pill */}
          <form
            className="mt-6 flex w-full max-w-md rounded-full border border-[#275835] bg-transparent"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full rounded-l-full bg-transparent px-4 py-3 text-sm text-[#275835] placeholder:text-[#6C816C] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#222222]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon }) => {
  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3E6B45] text-white transition-transform hover:scale-105"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
};

export default Footer;
