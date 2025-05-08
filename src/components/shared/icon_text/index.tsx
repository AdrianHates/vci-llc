import cx from "../../libs/cx";
import { motion, Transition, Variants } from "framer-motion";

interface Props {
  icon_path: string;
  className?: string;
  class_icon?: string;
  class_text?: string;
  text: string;
  variants?: Variants;
  initial?: string;
  animate?: string;
  transition?: Transition;
}

const Icon_Text = ({
  icon_path,
  className,
  text,
  class_icon,
  class_text,
  ...props
}: Props) => {
  const last = icon_path?.split("/");
  return (
    <motion.div
      {...props}
      className={cx(
        "absolute bg-white z-10 flex items-center rounded-xl shadow-[2px_2px_13px_0_#24364B40] pl-1.5 pr-0 py-3 font-nunito-sans",
        className
      )}
    >
      <img
        className={cx(
          "bg-quaternary rounded-full flex items-center justify-center",
          class_icon
        )}
        src={icon_path}
        alt={last[last?.length - 1]}
      />
      <p className={cx("max-w-[25ch] text-[#595959] font-medium", class_text)}>
        {text}
      </p>
    </motion.div>
  );
};

export default Icon_Text;
