const Footer = () => {
  const socials: { name: string; class_icon?: string }[] = [
    {
      name: "facebook",
      class_icon: "w-[11.62px]",
    },
    {
      name: "instagram",
      class_icon: "w-[20.79px]",
    },
    {
      name: "whatsapp",
      class_icon: "w-[19.52px]",
    },
  ];
  return (
    <footer>
      <div className="flex bg-[#24364B] pl-[135px] pt-[81px] pb-[139px] gap-[136px] relative overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-4">
          <img alt="logo" src="logo.svg" className="w-[343px]" />
          <p className="ml-[5px] text-[16px] leading-[20px] font-semibold text-white max-w-[30ch]">
            Somos un conglomerado Americano{" "}
            <span className="font-[250]">
              que invierte en sus subsidiarías, bajo una estricta política
              interna de evaluación,
            </span>{" "}
            con analistas capacitados y un puntaje propio.
          </p>
        </div>

        <div className="text-white flex flex-col justify-center gap-2">
          <h3 className="text-[#0295BC] font-bold text-[20px] leading-[24.38px] mt-2">
            Contacto
          </h3>
          <div className="flex gap-[7.13px] mt-4">
            <img alt="phone" src="phone.svg" className="w-[21.4px]" />
            <p>512-656-3077</p>
          </div>
          <div className="flex gap-[7.13px]">
            <img alt="phone" src="mail_1.svg" className="w-[21.4px]" />
            <p>info@vcapinvest.com</p>
          </div>
          {socials && (
            <div className="flex gap-6 mt-[30px]">
              {socials.map((social, i) => (
                <img
                  alt={social.name}
                  key={i}
                  src={`${social.name}.svg`}
                  className={social.class_icon}
                />
              ))}
            </div>
          )}
        </div>

        <img
          src="/footer/bg_1.png"
          alt="bg"
          className="w-[653px] absolute left-[57.6%] top-[14.5%]"
        />
      </div>
      <div className="bg-[#1B2A3C] h-[40px] flex items-center justify-center text-white text-opacity-[69%] text-[14px] leading-[17.07px] font-[250]">
        2024 Verri capital investment all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
