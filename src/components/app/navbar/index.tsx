import { useEffect, useState } from "react";
import cx from "../../libs/cx";
import ModalNavbar from "./modal-navbar";
import useToggle from "../../../hooks/useToogle";

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
        className={cx(
          "bg-primary flex justify-between xl:pl-[147px] sm:px-5 pl-16 pr-[70px] pt-9 pb-0 sticky top-0 z-[9999] w-full max-w-[1536px]",
          scrollPosition > 121 ? "bg-opacity-80 pt-4 transition-all" : ""
        )}
      >
        <a href="#">
          <img
            alt="logo"
            src={logo}
            className="sm:w-[343px] w-[150px] sm:h-[85px] h-[37px]"
          />
        </a>

        <button
          className="text-white lg:hidden block"
          onClick={() => {
            onToggle();
          }}
        >
          <img src="toggle.svg" alt="toggle" className="w-6 h-6" />
        </button>

        <ul className="sm:flex hidden gap-3 items-center justify-center text-[16px] tracking-[0.005em] leading-[19.5px] text-white">
          {options.map((opt, i) => (
            <li
              key={i}
              className={cx(
                "hover:text-secondary hover:font-bold transition-all duration-[300ms] font-extralight mx-auto text-center lg:block hidden",
                opt.classOpt,
                activeSection === opt.name.toLowerCase()
                  ? "text-secondary font-bold"
                  : ""
              )}
            >
              <a href={"#" + opt.name.toLowerCase()}>
                <p>{opt.name}</p>
              </a>
            </li>
          ))}
          <button className="bg-quaternary py-2.5 px-[22px] rounded-md font-bold">
            Ingresar
          </button>
        </ul>
      </nav>
      {
        isOpen && <ModalNavbar onClick={onClose} />
      }
    </>
  );
};

export default Navbar;
