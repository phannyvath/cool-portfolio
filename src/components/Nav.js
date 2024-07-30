import { Link } from "react-scroll";
import { House, User, Clipboard, Briefcase, Contact } from "lucide-react";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-0 w-full overflow-hidden z-50">
      <div className="container mx-auto mb-5">
        <div className="w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-full h-full">
              <House />
            </div>
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-full h-full">
              <User />
            </div>
          </Link>
          <Link
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-full h-full">
              <Clipboard />
            </div>
          </Link>
          <Link
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-full h-full">
              <Briefcase />
            </div>
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-full h-full">
              <Contact />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
