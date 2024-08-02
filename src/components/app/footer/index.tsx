import { useInView } from "react-intersection-observer";
import { fadeInFromXY } from "../../../animations/animations";
import { motion } from "framer-motion";

const Footer = () => {
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <footer ref={footerRef}>
      <div className="flex sm:flex-row flex-col bg-[#24364B] lg :pl-[135px] pl-6 sm:pr-0 pr-6 pt-[82.5px] sm:pb-[139px] pb-0 lg:gap-[136px] gap-[60px] relative overflow-hidden">
        <motion.div
          variants={fadeInFromXY(0, 0, 0)}
          initial="initial"
          animate={footerInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          className="flex flex-col sm:items-center items-start justify-center gap-4"
        >
          <img alt="logo" src="logo.svg" className="sm:w-[343px] w-[202px]" />
          <p className="ml-[5px] sm:text-[16px] text-[14px] sm:leading-[20px] leading-[17.07px] font-semibold text-white sm:max-w-[30ch] max-w-[33ch]">
            Somos un conglomerado Americano{" "}
            <span className="font-[250]">
              que invierte en sus subsidiarías, bajo una estricta política
              interna de evaluación,
            </span>{" "}
            con analistas capacitados y un puntaje propio.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInFromXY(0, 0, 0)}
          initial="initial"
          animate={footerInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          className="text-white flex flex-col justify-center gap-2"
        >
          <h3 className="text-[#0295BC] font-bold sm:text-[20px] text-[16px] sm:leading-[24.38px] leading-[19.5px] mt-2">
            Contacto
          </h3>
          <div className="flex gap-[7.13px] mt-4 text-[16px] leading-[19.5px]">
            <img alt="phone" src="phone.svg" className="w-[21.4px]" />
            <p>512-656-3077</p>
          </div>
          <div className="flex gap-[7.13px] text-[16px] leading-[19.5px]">
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
        </motion.div>

        <motion.img
          variants={fadeInFromXY(0, 0, 0)}
          initial="initial"
          animate={footerInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          src="/footer/bg_1.png"
          alt="bg"
          className="min-[460px]:w-[653px] max-[460px]:w-[460px] sm:absolute relative max-w-none sm:left-[57.6%] left-0 sm:top-[14.5%] sm:ml-0 ml-[-12.5px] sm:mt-0 mt-[-35px]"
        />
      </div>
      <div className="bg-[#1B2A3C] h-[40px] flex items-center justify-center text-white text-opacity-[69%] sm:text-[14px] text-[12px] sm:leading-[17.07px] leading-[14.63px] font-[250]">
        2024 Verri capital investment all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
