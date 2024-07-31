import { useInView } from "react-intersection-observer";
import FirstSection from "./first-section";
import SecondSection from "./second-section";
import { motion } from "framer-motion";
import { appearFromCenter } from "../../../animations/animations";

interface Props {
  id: string;
}

const Us = ({ id }: Props) => {
  const [featRef, featInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const listFeatures: { name: string; description: string }[] = [
    {
      name: "Diversificación",
      description:
        "Es nuestra clave para gestionar el riesgo y potenciar el crecimiento de los territorios donde operan nuestras empresas subsidiarías.",
    },
    {
      name: "Innovación",
      description:
        "Adoptamos las últimas tendencias y tecnologías financieras para optimizar la gestión de activos y pasivos; ofrecer a nuestros clientes soluciones vanguardistas que respalden sus inversiones.",
    },
    {
      name: "Comunidad",
      description:
        "La visión de apoyo al mercado, es fundamental en nuestra visión de generar comunidades sostenibles.",
    },
  ];

  return (
    <section className="sm:pb-32 pb-0 pt-[100px] mt-[-100px]" id={id}>
      {listFeatures && (
        <div className="flex sm:flex-row flex-col sm:gap-6 gap-10 justify-between lg:mx-20 sm:mx-6 mx-11 py-[41.5px]">
          {listFeatures.map((feat, i) => (
            <motion.div
              ref={featRef}
              key={i}
              variants={appearFromCenter}
              initial="initial"
              animate={featInView ? "animate" : "initial"}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
              className="flex flex-col gap-11 origin-top items-center"
            >
              <img
                src={`/inicio/feat_icon_${i + 1}.svg`}
                className="sm:w-[90px] w-[77.34px] sm:h-[90px] h-[77.34px] mx-auto"
              />
              <div className="flex flex-col sm:gap-6 gap-5">
                <h3 className="text-secondary font-bold text-center text-[20px] leading-[24.38px]">
                  {feat.name}
                </h3>
                <p className="lg:text-[18px] sm:text-[14px] text-[16px] lg:leading-[21.94px] sm:leading-[18px] leading-[19.5px] font-light text-center text-[#595959] max-w-[330px]">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <FirstSection />
      <SecondSection />
    </section>
  );
};

export default Us;
