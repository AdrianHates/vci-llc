import InputIcon from "../../ui/input-icon";
import { useState } from "react";
import "./index.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Contact = () => {
  const [phone, setPhone] = useState<string | undefined>("");

  return (
    <section className="bg-primary bg-opacity-[6%] py-[58px] flex flex-col gap-10 items-center justify-center">
      <h3 className="text-[#24364B] font-bold text-[32px] leading-[39.01px]">
        Contacto
      </h3>
      <form className="flex flex-col gap-4">
        <div className="flex gap-6">
          <InputIcon icon_path="user.svg" placeholder="Nombre completo" />
          <InputIcon icon_path="mail.svg" placeholder="Correo electrónico" />
        </div>
        <div className="flex gap-6">
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
          className="bg-[#F8F8F8] focus:outline-none max-w-[871px] w-full min-h-[114px] resize-none px-8 py-4 rounded-[10px] placeholder:text-[#D1D1D1]"
          placeholder="Mensaje"
        />
        <button className="mt-8 bg-quaternary px-[63px] py-[15px] mx-auto rounded-[10px] text-white font-bold text-xl">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
