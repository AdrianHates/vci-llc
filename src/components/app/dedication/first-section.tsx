const FirstSection = () => {
  return (
    <div className="flex items-center py-36">
      <div>
        <div className="flex flex-col gap-14 pl-36">
          <h3 className="text-quaternary text-[32px] leading-[39px] font-bold w-[25ch]">
            ¿Porqué es importante la inclusión financiera en latinoamerica?
          </h3>
          <p className="w-[39ch] text-[#595959] text-[18px] leading-[21.95px] font-normal">
            El Salvador tiene una población de 6.3 millones y el 77%, 4.9
            millones, no tiene acceso a una cuenta corriente o de ahorro, 5.5
            millones* no tienen acceso a créditos. Somos la mejor opción
            disponible para la inclusión y apoyo financiero.
          </p>
        </div>
        <div className="bg-[#24364B] w-full py-4 my-4 relative">
          <p className="w-[53ch] pl-36 text-white text-[18px] leading-[21.94px] font-light">
            La población de Texas es de 31.1 millones, de los cuales 12.5
            millones son latinos y de esos 500 mil son Salvadoreños. 1.7
            millones* de personas no tienen cuenta corriente o de ahorro.
          </p>

          <div className="bg-[#24364B] absolute h-full w-[20px] left-[100%] top-0 z-0">
            <div className="bg-white absolute w-[267px] h-[267px] rounded-[50%] left-[6%] top-[-70%]" />
          </div>
        </div>
        <p className="ml-36 text-[13px] leading-[15.85px] italic font-light">
          *Entre ambos mercados tenemos 7.2 millones de clientes potenciales.
        </p>
      </div>

      <img
        src="/dedication/img_1.png"
        alt="img-dedication"
        className="w-[700px] relative z-10"
      />
    </div>
  );
};

export default FirstSection;
