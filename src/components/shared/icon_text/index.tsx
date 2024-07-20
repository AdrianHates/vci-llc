import cx from "../../libs/cx";

interface Props {
  icon_path: string;
  className?: string;
  text: string;
}

const Icon_Text = ({ icon_path, className, text }: Props) => {
  return (
    <div
      className={cx(
        "absolute bg-quinary gap-2.5 flex items-center rounded-xl shadow-[2px_2px_13px_0_#24364B40] p-2",
        className
      )}
    >
      <div className="bg-quaternary rounded-full w-[45.15px] h-[45.15px] mx-2 flex items-center justify-center">
        <img src={icon_path} className="w-[24px] h-[24px]" />
      </div>
      <p className="max-w-[220px] text-[17.56px] leading-[17.56px] text-[#595959] font-medium">
        {text}
      </p>
    </div>
  );
};

export default Icon_Text;
