import cx from "../../libs/cx";

interface Props {
  icon_path: string;
  className?: string;
  class_icon?: string;
  class_text?: string;
  text: string;
}

const Icon_Text = ({
  icon_path,
  className,
  text,
  class_icon,
  class_text,
}: Props) => {
  return (
    <div
      className={cx(
        "absolute bg-quinary gap-1 flex items-center rounded-xl shadow-[2px_2px_13px_0_#24364B40] pl-1.5 pr-0 py-3 font-nunito-sans",
        className
      )}
    >
      <div
        className={cx(
          "bg-quaternary rounded-full w-[45.15px] h-[45.15px] mx-2 flex items-center justify-center",
          class_icon
        )}
      >
        <img src={icon_path} className="w-[24px] h-[24px]" />
      </div>
      <p
        className={cx(
          "max-w-[23ch] text-[18px] leading-[18px] text-[#595959] font-medium",
          class_text
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default Icon_Text;
