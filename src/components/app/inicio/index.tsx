import Icon_Text from "../../shared/icon_text";

const Inicio = () => {
  const textIcons: { text: string; className: string }[] = [
    {
      text: "Ofrecemos un análisis financiero exclusivo, adaptado a necesidades específicas.",
      className: "top-[23.75%] left-[6.25%]",
    },
    {
      text: "Utilizamos herramientas avanzadas y criterios personalizados.",
      className: "top-[49%] right-[8%]",
    },
    {
      text: "Identificamos oportunidades que otros pasan por alto.",
      className: "bottom-[12%] left-[30%]",
    },
  ];

  const listFeatures: { name: string; description: string }[] = [
    {
      name: "Diversificación",
      description:
        "Es nuestra clave para gestionar el riesgo y potenciar el crecimiento de los territorios donde operan nuestras empresas subsidiarías.",
    },
    {
      name: "Innovación",
      description:
        "Adoptamos las últimas tendencias y tecnologías financieras para optimizar la gestión de activos y pasivos; ofrecer a nuestros clientes soluciones vanguardistas que respalden sus inversiones.",
    },
    {
      name: "Comunidad",
      description:
        "La visión de apoyo al mercado, es fundamental en nuestra visión de generar comunidades sostenibles.",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="bg-primary w-full flex items-center justify-center pt-[92.5px] pb-80">
        <p className="max-w-[45ch] text-[26px] leading-[31.69px] text-center text-quaternary font-[550]">
          Descubre el futuro de las inversiones con Verri Capital Investments,
          LLC.{" "}
          <span className="font-extralight text-[#fff]">
            Nuestra experiencia y visión te abre las puertas a oportunidades
            financieras excepcionales
          </span>
        </p>
      </div>

      <div className="relative mt-[-330px]">
        <img src="/inicio/img_1.png" width={1142} />
        {textIcons.map((tIcon, i) => (
          <Icon_Text
            key={i}
            icon_path={`/inicio/icon_${i + 1}.svg`}
            text={tIcon.text}
            className={tIcon.className}
          />
        ))}
      </div>

      {listFeatures && (
        <div className="flex mx-20 gap-16 my-10">
          {listFeatures.map((feat, i) => (
            <div key={i} className="flex flex-col gap-10">
              <img
                src={`/inicio/feat_icon_${i + 1}.svg`}
                className="w-[90px] h-[90px] mx-auto"
              />
              <div className="flex flex-col gap-6">
                <h3 className="text-secondary font-bold text-center text-[20px] leading-[24.38px]">
                  {feat.name}
                </h3>
                <p className="text-[18px] leading-[21.94px] font-light text-center text-[#595959] max-w-[330px]">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Inicio;
