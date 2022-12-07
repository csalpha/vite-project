import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

// {}
// []

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("#ffffff");
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState("#ffffff");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "w-full h-20 z-[100] shadow-xl ease-in-out duration-300"
          : "w-full h-20 z-[100] shadow-xl ease-in-out duration-300"
      }
    >
      {/*****  Menu *****/}
      <div className='flex justify-between bg-black text-white items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <img
              src={reactLogo}
              className='logo react'
              alt='React logo'
              width='85'
              height='85'
              ght
            />
          </a>
        </Link>

        <div className=''>
          {/***** nav items *****/}
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-white text-sm uppercase hover:border-b'>
              <Link href='/#'>Home</Link>
            </li>
            <li className='ml-10 text-white text-sm uppercase hover:border-b'>
              <Link href='/#'>About</Link>
            </li>
            <li className='ml-10 text-white text-sm uppercase hover:border-b'>
              <Link href='/#'>Skills</Link>
            </li>
            <li className='ml-10 text-white text-sm uppercase hover:border-b'>
              <Link href='/#'>Projects</Link>
            </li>
            <li className='ml-10 text-white text-sm uppercase hover:border-b'>
              <Link href='/#'>Contact</Link>
            </li>
          </ul>

          {/***** Hamburger Icon *****/}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='text-white md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/***** Mobile Menu *****/}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black text-white"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#white] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              {/* Logo */}
              <Link href='/'>
                <a>
                  <img
                    src={reactLogo}
                    className='logo react'
                    alt='React logo'
                    width='85'
                    height='85'
                    ght
                  />
                </a>
              </Link>
              {/* Close */}
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg
                  shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>

            {/* Nav Links */}
            <div className='py-4 flex flex-col'>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Let's work together</p>
              </div>
              <ul className='uppercase'>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Home
                  </li>
                </Link>
                <Link href='/#about'>
                  <li className='py-4 text-sm' onClick={() => setNav(false)}>
                    About
                  </li>
                </Link>
                <Link href='/#skills'>
                  <li className='py-4 text-sm' onClick={() => setNav(false)}>
                    Skills
                  </li>
                </Link>
                <Link href='/#projects'>
                  <li className='py-4 text-sm' onClick={() => setNav(false)}>
                    Projects
                  </li>
                </Link>
                <Link href='/#contacts'>
                  <li className='py-4 text-sm' onClick={() => setNav(false)}>
                    Contact
                  </li>
                </Link>
              </ul>
              <div className='pt-40'>
                <div
                  className='flex items-center justify-between my-4 w-full
                    sm:w-[80%]'
                >
                  <a
                    href='https://www.linkedin.com/in/carlos-serodio-6b7404126/'
                    target='_blank'
                    rel=''
                  >
                    <div
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in
                        duration-300'
                    >
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href='https://github.com/csalpha/' target='_blank' rel=''>
                    <div
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer
                        hover:scale-105 ease-in duration-300'
                    >
                      <FaGithub />
                    </div>
                  </a>
                  <Link href='/#contact'>
                    <div
                      onClick={() => setNav(!nav)}
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href='/#resume'>
                    <div
                      onClick={() => setNav(!nav)}
                      className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                    >
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// {}
// []
