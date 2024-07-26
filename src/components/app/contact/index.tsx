import InputIcon from "../../ui/input-icon";
import { useState } from "react";
import "./index.css";
import { PhoneInput } from "react-international-phone";

interface Props {
  id: string;
}

const Contact = ({ id }: Props) => {
  const [phone, setPhone] = useState<string | undefined>("");

  return (
    <section
      className="bg-primary bg-opacity-[6%] py-[58px] px-6 flex flex-col gap-10 items-center justify-center"
      id={id}
    >
      <h3 className="text-[#24364B] font-bold sm:text-[32px] text-[20px] sm:leading-[39.01px] leading-[24.38px]">
        Contacto
      </h3>
      <form className="flex flex-col gap-4 max-w-[871px] mx-auto w-full">
        <div className="flex sm:flex-row flex-col gap-6">
          <InputIcon icon_path="user.svg" placeholder="Nombre completo" />
          <InputIcon icon_path="mail.svg" placeholder="Correo electrónico" />
        </div>
        <div className="flex sm:flex-row flex-col gap-6">
          <PhoneInput
            placeholder="Número de celular"
            className="phone-input"
            defaultCountry="sv"
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
          <InputIcon icon_path="company.svg" placeholder="Empresa" />
        </div>
        <textarea
          className="bg-[#F8F8F8] focus:outline-none w-full min-h-[114px] sm:text-[16px] text-[14px] sm:leading-[19.5px] leading-[17.07px] resize-none sm:px-[31px] px-[11.14px] py-4 rounded-[10px] placeholder:text-[#D1D1D1]"
          placeholder="Mensaje"
        />
        <button className="mt-8 bg-quaternary sm:px-[63px] px-[50.13px] sm:py-[15px] py-[11.94px] mx-auto sm:rounded-[10px] rounded-[8px] text-white font-bold sm:text-xl text-base">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
