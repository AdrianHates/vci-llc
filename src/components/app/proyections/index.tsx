interface Props {
  id: string;
}
const Proyections = ({ id }: Props) => {
  return (
    <section className="sm:bg-primary bg-white sm:bg-opacity-[5%] opacity-100 px-5 pt-24 pb-40" id={id}>
      <h3 className="mx-auto max-w-[15ch] text-center font-nanum-myeongjo text-tertiary font-semibold sm:text-[64px] text-[32px] sm:leading-[55px] leading-[30.94px]">
        Verri Capital Investments, LLC
      </h3>
      <p className="sm:text-[18px] text-[16px] sm:leading-[21.94px] leading-[19.5px] font-light max-w-[80ch] text-center mx-auto my-10">
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
