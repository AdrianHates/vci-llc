import { useEffect, useState } from "react";
import cx from "../../libs/cx";
import ModalNavbar from "./modal-navbar";
import useToggle from "../../../hooks/useToogle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./index.css";
import {
  fadeInFromLeft10050,
  fadeInFromTop,
} from "../../../animations/animations";

interface NavbarProps {
  logo: string;
  options: {
    name: string;
    classOpt: string;
  }[];
}

const Navbar = ({ logo, options }: NavbarProps) => {
  //const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onToggle, onClose } = useToggle();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const { ref: navbarRef, inView: navbarInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };
    const sections = options.map((opt) =>
      document.getElementById(opt.name.toLowerCase())
    );

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section?.offsetTop - 10;
        const sectionBottom = sectionTop + section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [options, scrollPosition]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={cx(
          " bg-primary backdrop-blur-sm flex justify-between xl:pl-[147px] sm:pl-5 pl-11 sm:pr-[70px] pr-5 pt-9 pb-0 sticky top-0 z-[9999] w-full max-w-[1536px]",
          scrollPosition > 121 ? "bg-opacity-40 pt-4 transition-all" : ""
        )}
      >
        <motion.a
          href="#"
          variants={fadeInFromTop}
          initial="initial"
          animate={navbarInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            alt="logo"
            src={logo}
            className="sm:w-[343px] w-[150px] sm:h-[85px] h-[37px]"
          />
        </motion.a>

        <button
          className="text-white lg:hidden block"
          onClick={() => {
            onToggle();
          }}
        >
          <img src="toggle.svg" alt="toggle" className="w-6 h-6" />
        </button>

        <ul className="sm:flex hidden gap-3 items-center justify-center text-[15.5px] leading-[19px] text-white">
          {options.map((opt, i) => (
            <li
              key={i}
              className={cx(
                "hover:text-secondary hover:font-bold font-extralight mx-auto text-center lg:block hidden relative",
                opt.classOpt,
                activeSection === opt.name.toLowerCase()
                  ? "text-secondary font-bold"
                  : ""
              )}
            >
              <motion.div
                variants={fadeInFromTop}
                initial="initial"
                animate={navbarInView ? "animate" : "initial"}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <a href={"#" + opt.name.toLowerCase()}>
                  <p>{opt.name}</p>
                </a>
              </motion.div>
              <motion.div
                {...fadeInFromLeft10050}
                className={cx(
                  "bg-quaternary fade-in-from-left h-[2.5px] absolute top-100 left-0",
                  activeSection === opt.name.toLowerCase() ? "w-full" : "w-0"
                )}
              />
            </li>
          ))}
          <button className="bg-quaternary py-2.5 px-[22px] rounded-md font-bold">
            Ingresar
          </button>
        </ul>
      </nav>
      {isOpen && <ModalNavbar onClick={onClose} options={options} />}
    </>
  );
};

export default Navbar;
