import InputIcon from "../../ui/input-icon";
import { useState } from "react";
import "./index.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeInFromTop, fadeInFromXY } from "../../../animations/animations";

interface Props {
  id: string;
  dictionary: Contact;
}

const Contact = ({ id, dictionary }: Props) => {
  const [phone, setPhone] = useState<string | undefined>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      phone,
      company,
      message,
    };

    console.log("Form Data:", formData);

    // Enviar datos a la API
  };

  return (
    <section className="mt-[-100px] pt-[100px]" id={id}>
      <div
        ref={textRef}
        className="bg-primary bg-opacity-[6%] pt-[58px] pb-[60px] px-6 flex flex-col gap-10 items-center justify-center"
      >
        <motion.h3
          variants={fadeInFromTop}
          initial="initial"
          animate={textInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          className="text-[#24364B] font-bold sm:text-[32px] text-[20px] sm:leading-[39.01px] leading-[24.38px]"
        >
          {dictionary?.title}
        </motion.h3>
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeInFromXY(0, 100, 0)}
          initial="initial"
          animate={textInView ? "animate" : "initial"}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          className="flex flex-col gap-4 2xl:max-w-[1146px] max-w-[871px] mx-auto w-full"
        >
          <div className="flex sm:flex-row flex-col gap-6 relative">
            <InputIcon
              icon_path="user.svg"
              placeholder={dictionary?.form?.placeholder?.name}
              value={name}
              onChange={handleNameChange}
              type="text"
              pattern="[A-Za-zÀ-ÿ\s]+"
            />

            <InputIcon
              icon_path="mail.svg"
              placeholder={dictionary?.form?.placeholder?.email}
              value={email}
              onChange={handleEmailChange}
              type="email"
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-6">
            <PhoneInput
              placeholder={dictionary?.form?.placeholder?.phone}
              className="phone-input"
              defaultCountry="sv"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              required
            />
            <InputIcon
              icon_path="company.svg"
              placeholder={dictionary?.form?.placeholder?.company}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <textarea
            className="bg-[#F8F8F8] focus:outline-none w-full min-h-[114px] sm:text-[16px] text-[14px] sm:leading-[19.5px] leading-[17.07px] resize-none sm:px-[31px] px-[11.14px] py-4 rounded-[10px] placeholder:text-[#D1D1D1]"
            placeholder={dictionary?.form?.placeholder?.message}
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="mt-[23px] bg-quaternary hover:brightness-125 hover:scale-[1.05] duration-300 sm:px-[63px] px-[50.13px] sm:py-[15px] py-[11.94px] mx-auto sm:rounded-[10px] rounded-[8px] text-white font-bold sm:text-xl text-base">
            {dictionary?.form?.button?.name}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
