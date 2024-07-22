interface NavbarProps {
  logo: string;
}

const Navbar = ({ logo }: NavbarProps) => {
  //const [currentIndex, setCurrentIndex] = useState(0);
  //const { isOpen, onToggle, onClose } = useToggle();

  const options = [
    "Inicio",
    "Nosotros",
    "Dedicación",
    "Proyecciones",
    "Portafolio",
    "Contacto",
  ];

  return (
    <>
      <nav className="bg-primary flex justify-between pl-36 pr-20 py-9">
        <a href="#">
          <img alt="logo" src={logo} className="w-[343px] h-[85px]" />
        </a>
        <ul className="flex gap-3 items-center justify-center text-[16px] tracking-[0.005em] leading-[19.5px] text-white">
          {options.map((x, i) => (
            <li
              key={i}
              className="hover:text-secondary hover:font-semibold transition-all duration-[300ms] font-extralight"
            >
              {x}
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
