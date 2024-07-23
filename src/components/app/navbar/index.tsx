import cx from "../../libs/cx";

interface NavbarProps {
  logo: string;
}

const Navbar = ({ logo }: NavbarProps) => {
  //const [currentIndex, setCurrentIndex] = useState(0);
  //const { isOpen, onToggle, onClose } = useToggle();

  const options: { name: string; classOpt: string }[] = [
    {
      name: "Inicio",
      classOpt: "w-[46px]",
    },
    {
      name: "Nosotros",
      classOpt: "w-[71px]",
    },
    {
      name: "Dedicación",
      classOpt: "w-[90px]",
    },
    {
      name: "Proyecciones",
      classOpt: "w-[105px]",
    },
    {
      name: "Portafolio",
      classOpt: "w-[77px]",
    },
    {
      name: "Contacto",
      classOpt: "w-[73px]",
    },
  ];

  return (
    <>
      <nav className="bg-primary flex justify-between sm:pl-[147px] pl-16 pr-20 py-9 sticky top-0 z-[9999] w-full max-w-[1536px]">
        <a href="#">
          <img alt="logo" src={logo} className="sm:w-[343px] w-[150px] sm:h-[85px] h-[37px]" />
        </a>
        <ul className="sm:flex hidden gap-3 items-center justify-center text-[16px] tracking-[0.005em] leading-[19.5px] text-white">
          {options.map((opt, i) => (
            <li
              key={i}
              className={cx(
                "hover:text-secondary hover:font-semibold hover:tracking-[-0.034rem] transition-all duration-[300ms] font-extralight text-center lg:block hidden",
                opt.classOpt
              )}
            >
              {opt.name}
            </li>
          ))}
          <button className="bg-quaternary py-2.5 px-[22px] rounded-md font-bold">
            Ingresar
          </button>
        </ul>
      </nav>
      {/*
        isOpen && <ModalNavbar logo={logo} opciones={opciones} onClose={onClose} onClick={onClose} />
      */}
    </>
  );
};

export default Navbar;
