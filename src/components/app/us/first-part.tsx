import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeInFromXY } from "../../../animations/animations";

interface Props {
  dictionary: {
    title: string;
    main: string;
    inner: string;
    aditional: string;
  };
}

const imgPath: string = `${import.meta.env.BASE_URL}dedication/img_1.png`;

const FirstPart = ({ dictionary }: Props) => {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="flex lg:flex-row flex-col items-center sm:pt-[90px] pt-[75px] sm:pb-[89px] pb-8 lg:gap-0 gap-10">
      <motion.div
        variants={fadeInFromXY(-250, 0, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
        ref={firstRef}
        className="2xl:w-1/2"
      >
        <div className="flex flex-col items-center gap-14 xl:pl-[147px] lg:pl-20 pl-6 lg:pr-0 pr-6">
          <h3 className="text-quaternary sm:min-h-[7.3rem] sm:max-w-none max-w-[35ch] lg:text-start text-center sm:text-[32px] text-[20px] sm:leading-[39px] leading-[24px] font-bold sm:w-[25ch] w-full">
            {dictionary?.title}
          </h3>
          <p className="sm:pr-0 pr-1 2xl:max-w-[45ch] max-w-[39ch] 2xl:self-center lg:self-start w-full text-[#595959] sm:text-[18px] text-[16px] sm:leading-[21.95px] leading-[19.5px] font-normal">
            {dictionary?.main}
          </p>
        </div>

        <div className="bg-[#24364B] w-full py-4 my-4 relative">
          <p className="2xl:max-w-[57ch] lg:max-w-[53ch] max-w-[44ch] 2xl:mx-auto lg:mx-0 mx-auto w-full xl:pl-36 lg:pl-20 pl-6 lg:pr-0 pr-6 text-white sm:text-[18px] text-[16px] sm:leading-[21.94px] leading-[19.5px] font-light">
            {dictionary?.inner}
          </p>

          <div className="bg-[#24364B] absolute h-full w-[60px] left-[100%] top-0 z-0 lg:block hidden">
            <div className="bg-white absolute 2xl:w-[375px] 2xl:h-[375px] w-[267px] h-[267px] rounded-[50%] 2xl:left-[12.5%] left-[8.9%] 2xl:top-[-70%] xl:top-[-57.5%] top-[-64%]" />
          </div>
        </div>

        <div>
          <p className="xl:pl-36 xl:pr-0 pl-6 pr-6 2xl:mx-auto xl:mx-0 mx-auto 2xl:max-w-[80ch] sm:max-w-[62ch] max-w-[55ch] text-[13px] leading-[15.85px] italic font-light">
            {dictionary?.aditional}
          </p>
        </div>
      </motion.div>

      <motion.img
        src={imgPath}
        alt="img-dedication"
        className="2xl:w-[950px] lg:w-[700px] w-[331.42px] relative z-10"
        variants={fadeInFromXY(250, 0, 0)}
        initial="initial"
        animate={firstInView ? "animate" : "initial"}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.5 }}
      />
    </div>
  );
};

export default FirstPart;
