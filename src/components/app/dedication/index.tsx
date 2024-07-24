import FirstSection from "./first-section";
import SecondSection from "./second-section";

interface Props {
  id: string;
}

const Dedication = ({ id }: Props) => {
  return (
    <section className="pb-32" id={id}>
      <FirstSection />
      <SecondSection />
    </section>
  );
};

export default Dedication;
