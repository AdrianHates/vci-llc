const FirstSection = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center sm:pt-[105px] pt-[75px] sm:pb-[105px] pb-8 sm:gap-0 gap-10">
      <div>
        <div className="flex flex-col gap-14 sm:pl-[147px] pl-12 sm:pr-0 pr-12">
          <h3 className="text-quaternary sm:text-[32px] text-[20px] sm:leading-[39px] leading-[24px] font-bold w-[25ch]">
            ¿Porqué es importante la inclusión financiera en latinoamerica?
          </h3>
          <p className="sm:pr-0 pr-1 max-w-[39ch] w-full text-[#595959] sm:text-[18px] text-[16px] sm:leading-[21.95px] leading-[19.5px] font-normal">
            El Salvador tiene una población de 6.3 millones y el 77%, 4.9
            millones, no tiene acceso a una cuenta corriente o de ahorro, 5.5
            millones* no tienen acceso a créditos. Somos la mejor opción
            disponible para la inclusión y apoyo financiero.
          </p>
        </div>
        <div className="bg-[#24364B] w-full py-4 my-4 relative">
          <p className="max-w-[53ch] w-full sm:pl-36 pl-12 sm:pr-0 pr-12 text-white sm:text-[18px] text-[16px] sm:leading-[21.94px] leading-[19.5px] font-light">
            La población de Texas es de 31.1 millones, de los cuales 12.5
            millones son latinos y de esos 500 mil son Salvadoreños. 1.7
            millones* de personas no tienen cuenta corriente o de ahorro.
          </p>

          <div className="bg-[#24364B] absolute h-full w-[60px] left-[100%] top-0 z-0">
            <div className="bg-white absolute w-[267px] h-[267px] rounded-[50%] left-[8.9%] top-[-64%]" />
          </div>
        </div>
        <p className="sm:ml-36 ml-12 sm:mr-0 mr-20 text-[13px] leading-[15.85px] italic font-light">
          *Entre ambos mercados tenemos 7.2 millones de clientes potenciales.
        </p>
      </div>

      <img
        src="/dedication/img_1.png"
        alt="img-dedication"
        className="sm:w-[700px] w-[331.42px] relative z-10"
      />
    </div>
  );
};

export default FirstSection;
