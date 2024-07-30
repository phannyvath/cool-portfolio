import React from "react";

// Images
import Image from "../assets/profile.png";

// Type animation
import { TypeAnimation } from "react-type-animation";

// Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

// Icons
import { FaFacebook, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Banner = () => {
  return (
    <section
      className=" min-h-[85vh] lg:min-h-[78vh] flex items-center:"
      id="home"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className=" flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              IM <span>PHANNYVATH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[" Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              As a passionate web developer, I excel in merging innovative
              design with precise coding skills. I specialize in crafting
              seamless user experiences, from sleek interfaces to robust backend
              systems. With each project, I embrace challenges, solve problems
              with ingenuity, and stay at the forefront of technological
              advancements. I am dedicated to shaping the digital landscape
              through creativity and continuous learning.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
            {/* Social */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#" aria-label="Facebook">
                <FaFacebook className=" hover:scale-150 hover:text-blue-600 h-10 w-10" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <CiLinkedin className=" hover:scale-150 hover:text-yellow-300 h-10 w-10" />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub className=" hover:scale-150 hover:text-gray-500 h-10 w-10" />
              </a>
            </div>
          </div>
          {/* Image */}
          <div className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
