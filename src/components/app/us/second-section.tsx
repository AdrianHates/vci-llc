import { useInView } from "react-intersection-observer";
import Icon_Text from "../../shared/icon_text";
import { motion } from "framer-motion";
import { fadeInFromXY } from "../../../animations/animations";

interface Props {
  dictionary: {
    title: string;
    main: string;
    inner: string;
    icon: string;
  };
}

const imgPath: string = `${import.meta.env.BASE_URL}dedication/img_2.png`;

const SecondPart = ({ dictionary }: Props) => {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="xl:pl-16 pl-0 lg:pr-0 pr-0 flex lg:flex-row flex-col-reverse pt-[75.5px] pb-[78.5px] relative lg:gap-0 gap-10">
      <Icon_Text
        variants={fadeInFromXY(0, 0, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
        className="sm:pr-5 pr-3 sm:pl-2.5 pl-[7.49px] sm:py-1.5 py-[4.5px] rounded-[8.28px] absolute bottom-[48px] sm:left-[31.4%] left-[22.5%] gap-2 bg-white"
        class_text="max-w-[35ch] sm:text-[13.5px] text-[8.99px] sm:leading-[14.63px] leading-[10.96px] font-[400]"
        class_icon="sm:w-[36px] w-[26.97px] sm:h-[36px] h-[26.97px]"
        icon_path={`${
          import.meta.env.BASE_URL
        }dedication/dedication_icon_1.svg`}
        text={dictionary?.icon}
      />

      <motion.img
        variants={fadeInFromXY(-250, 0, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
        ref={firstRef}
        src={imgPath}
        alt="dedication_img_2"
        className="2xl:w-[950px] 2xl:ml-[calc(50%-935px)] w-[679.13px] lg:mx-0 mx-auto"
      />
      <motion.div
        variants={fadeInFromXY(250, 0, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
        className="flex flex-col gap-3 2xl:w-1/2 w-full lg:ml-[-15px] ml-0 justify-center sm:items-start items-center"
      >
        <h3 className="text-quaternary 2xl:max-w-full sm:max-w-[35ch] max-w-[37ch] w-full font-bold lg:px-0 px-6 mx-auto lg:text-start sm:text-center text-start sm:text-[32px] text-[20px] sm:leading-[39.01px] leading-[24.38px] mb-7">
          {dictionary?.title}
        </h3>

        <p className="lg:px-0 px-6 text-[#595959] lg:self-start self-center font-medium sm:text-[18px] text-[16px] sm:leading-[21.94px] leading-[19.5px] w-full sm:max-w-[45ch] max-w-[47ch] mt-3.5">
          {dictionary?.main}
        </p>

        <div className="bg-[#24364B] sm:w-full sm:px-3 py-3.5 text-white font-light text-[16px] leading-[19.5px]">
          <p className="max-w-[48ch] lg:mx-0 mx-auto lg:px-0 sm:px-2 px-6">
            {dictionary?.inner}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondPart;
