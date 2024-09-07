import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsTwitterX } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

export function FooterComponent() {
  return (


    <footer className="bg-[#0E0E0E] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 ">
        <div className="md:flex md:justify-between py-16">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex gap-1 items-center">
              <img src="../../icon.png" className="h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-bold text-white">Furni<span className="text-[#1E99F5]">Flex</span></span>
            </Link>
          </div>
          <div className="grid gap-[120px] grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">About Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Master Plan</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Jobs</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Invest</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Pressroom</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">Explore EEVE</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">Unlock my Robot Power</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Starlight</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline ">Robot Platform</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">EEVE Roadmap</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">Community & Support</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Willow X Community</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Developer & Maker Access</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Special Cases</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FiFacebook color="white" />
              <FiInstagram color="white" />
              <BsTwitterX color="white" />
              <FiLinkedin color="white" />
            </div>
            <div className="flex items-center gap-4 text-[#81859F] text-lg font-semibold">
              <p>March22 Recap</p>
              <p>Privacy Policy
              </p>
              <p>General Terms
              </p>
              <p>Contact</p>
            </div>
            <div className="flex items-center gap-2 text-[#81859F] text-lg font-semibold">
              <img src="../../flag.png" alt="us-flag" className="w-4"/>
              <p>United States (English)</p>
            </div>
          </div>
        </div>
        <p className="text-center text-[#323544] font-semibold">EEVE © 2024. All rights reserved.</p>
      </div>
    </footer>

  );
}