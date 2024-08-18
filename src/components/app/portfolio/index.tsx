import React from "react";
import cx from "../../libs/cx";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  appearFromCenterScale,
  fadeInFromTop,
} from "../../../animations/animations";

interface Props {
  id: string;
  dictionary: Portfolio;
}

const listPortfolio: { class_img: string; link?: string }[] = [
  {
    link: "https://www.inversionestauro.com/",
    class_img: "w-[185px]",
  },
  {
    link: "https://www.curbsideloan.com/",
    class_img: "w-[92.55px]",
  },
];

const Portfolio = ({ id, dictionary }: Props) => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      className="pb-[115px] mt-[-250px] pt-[325px] xl:px-0 px-6"
      id={id}
      ref={textRef}
    >
      <div className="mt-[-227px]">
        <div className="bg-white py-[67.5px] max-w-[1146px] w-full mx-auto text-[16px] leading-[19.5px] font-light gap-10 flex flex-col shadow-[0px_4px_4px_0_#24364B40] rounded-[24px]">
          <motion.h3
            variants={fadeInFromTop}
            initial="initial"
            animate={textInView ? "animate" : "initial"}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="text-center sm:text-[32px] text-[20px] sm:leading-[39.01px] leading-[24.38px] text-[#EE7623] font-bold"
          >
            {dictionary?.title}
          </motion.h3>
          <motion.p
            variants={fadeInFromTop}
            initial="initial"
            animate={textInView ? "animate" : "initial"}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="max-w-[68ch] text-center mx-auto px-6"
          >
            {dictionary?.description}
          </motion.p>
          {listPortfolio && (
            <motion.div
              variants={appearFromCenterScale}
              initial="initial"
              animate={textInView ? "animate" : "initial"}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
              className="flex sm:flex-row flex-wrap flex-col items-center justify-center pt-7 pb-1 lg:gap-0 gap-[52px]"
            >
              {listPortfolio.map((ulist, i) => (
                <React.Fragment key={i}>
                  {i !== 0 && (
                    <div className="bg-[#24364B1F] w-[1px] h-32 mx-7 mb-16 lg:block hidden"></div>
                  )}

                  <div className="flex flex-col items-center">
                    <div className="h-[69px] flex items-center justify-center sm:mb-8 mb-[30px]">
                      <img
                        src={`/portfolio/portfolio_img_${i + 1}.png`}
                        className={cx("", ulist.class_img)}
                      />
                    </div>
                    <p className="max-w-[25ch] h-[183px] text-center">
                      {dictionary?.listPortfolio[i]?.description}
                    </p>
                    <a href={ulist.link} target="_blank">
                      <button className="bg-[#24364B] hover:brightness-125 hover:scale-[1.05] duration-300 text-white text-[16px] leading-[19.5px] py-2.5 px-[22px] rounded-[8px] font-light">
                        {dictionary?.button?.name}
                      </button>
                    </a>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
