interface Props {
  id: string;
}
const Proyections = ({ id }: Props) => {
  return (
    <section className="bg-primary bg-opacity-[5%] pt-24 pb-40" id={id}>
      <h3 className="mx-auto max-w-[15ch] text-center font-nanum-myeongjo text-tertiary font-semibold text-[64px] leading-[55px]">
        Verri Capital Investments, LLC
      </h3>
      <p className="text-[18px] leading-[21.94px] font-light max-w-[80ch] text-center mx-auto my-10">
        <span className="font-semibold text-quaternary">
          Somos un conglomerado Americano
        </span>{" "}
        que invierte en sus subsidiarías, bajo una estricta política interna de
        evaluación,
        <span className="font-semibold text-quaternary">
          {" "}
          con analistas capacitados y un puntaje propio.
        </span>{" "}
        Nuestras subsidiarías ofrecen microcréditos a individuos que normalmente
        no tienen acceso al sistema bancario tradicional.
      </p>
    </section>
  );
};

export default Proyections;
