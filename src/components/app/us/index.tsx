import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { appearFromCenter } from "../../../animations/animations";
import SecondPart from "./second-section";
import FirstPart from "./first-part";

interface Props {
  id: string;
  dictionary: {
    listFeatures: { name: string; description: string }[];
    firstPart: {
      title: string;
      main: string;
      inner: string;
      aditional: string;
    };
    secondPart: {
      title: string;
      main: string;
      inner: string;
      icon: string;
    };
  };
}

const Us = ({ id, dictionary }: Props) => {
  const [featRef, featInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="sm:pb-32 pb-0 pt-[100px] mt-[-100px]"
      id={id}
      ref={featRef}
    >
      {dictionary.listFeatures && (
        <div className="flex sm:flex-row flex-col sm:gap-6 gap-10 justify-between min-[1920px]:max-w-[1650px] min-[1920px]:mx-auto lg:mx-20 sm:mx-6 mx-11 py-[41.5px]">
          {dictionary.listFeatures.map((feat, i) => (
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
      <FirstPart dictionary={dictionary.firstPart} />
      <SecondPart dictionary={dictionary.secondPart} />
    </section>
  );
};

export default Us;
