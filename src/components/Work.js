import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/project1.jpg";
import Img2 from "../assets/project2.jpg";
import Img3 from "../assets/project3.jpg";
import Img4 from "../assets/project4.jpg";
import Img5 from "../assets/project5.jpg";
import Img6 from "../assets/project6.jpg";

const projects = [
  {
    img: Img1,
    preTitle: "My Api Website",
    title: "Anime Website",
    link: "https://animeapi-gilt.vercel.app/",
  },
  {
    img: Img2,
    preTitle: "FrontEnd website",
    title: "Restaurant",
    link: "https://restaurantnyvath.vercel.app/",
  },
  {
    img: Img3,
    preTitle: "FrontEnd website",
    title: "Interior",
    link: "https://interiorvath.vercel.app/",
  },
  {
    img: Img4,
    preTitle: "FrontEnd/Backend website",
    title: "Company Website",
    link: "https://ea-consultant.vercel.app/",
  },
  {
    img: Img5,
    preTitle: "Api Website",
    title: "Country Information",
    link: "https://country-vath.vercel.app/",
  },
  {
    img: Img6,
    preTitle: "Frontend Website",
    title: "Gym Coder",
    link: "https://vathgym.vercel.app/",
  },
];

const Work = () => {
  return (
    <section className="selection" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12">
          {/* Title and Description */}
          <div className="text-center">
            <h2 className="h2 leading-tight text-accent font-extrabold">
              My Latest <br />
              Work
            </h2>
            <p className="max-w-sm mx-auto mb-16">
              This is all the Projects I have done
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-80 w-full hover:border-purple-600">
      <div className="group-hover:bg-purple-950/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      <img
        className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
        src={project.img}
        alt={project.title}
      />
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
        <span className="text-gradient">{project.preTitle}</span>
      </div>
      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
        <span className="text-3xl text-white">{project.title}</span>
      </div>
    </div>
  );
};

export default Work;
