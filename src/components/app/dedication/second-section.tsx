import Icon_Text from "../../shared/icon_text";

const SecondSection = () => {
  return (
    <div className="pl-16 flex items-center py-[77px] relative">
      <Icon_Text
        className="pr-5 pl-0.5 py-1.5 rounded-[8.28px] absolute bottom-10 left-[31.5%] gap-0 bg-white"
        class_text="max-w-[35ch] text-[13.5px] leading-[14.63px] font-[400]"
        class_icon="w-[36px] h-[36px]"
        icon_path="/dedication/dedication_icon_1.svg"
        text="Este tipo de cliente y crédito representan un riesgo mucho menor para nosotros, ya que han demostrado un excelente comportamiento y moral de pago."
      />

      <img
        src="/dedication/img_2.png"
        alt="dedication_img_2"
        className="w-[679.13px]"
      />
      <div className="flex flex-col gap-3 w-full ml-[-15px]">
        <h3 className="text-quaternary font-bold text-[32px] leading-[39.01px] mb-7">
          ¡Impacto positivo!
        </h3>

        <p className="text-[#595959] font-medium text-[18px] leading-[21.94px] w-[45ch] mt-3.5">
          Más del 50% de nuestros créditos han sido otorgados a personas que
          viven fuera de las capitales financieras de El Salvador y Texas.
        </p>

        <div className="bg-[#24364B] px-3 py-3.5 text-white font-light text-[16px] leading-[19.5px]">
          <p className="max-w-[48ch]">
            Recientemente hemos visto un incremento en clientes que optan por
            más de un crédito, esto quiere decir que son clientes recurrentes
            que han pagado su crédito y necesitan uno nuevo o necesitan capital
            adicional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
