const SecondSection = () => {
  return (
    <div className="pl-16 flex items-center">
      <img
        src="/dedication/img_2.png"
        className="w-[679px]"
        alt="dedication_img_2"
      />
      <div className="flex flex-col gap-14">
        <h3 className="text-quaternary font-bold text-[32px] leading-[39.01px]">
          ¡Impacto positivo!
        </h3>
        <p className="text-[#595959] font-medium text-[18px] leading-[21.94px] w-[45ch]">
          Más del 50% de nuestros créditos han sido otorgados a personas que
          viven fuera de las capitales financieras de El Salvador y Texas.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
