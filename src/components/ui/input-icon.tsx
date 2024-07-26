import { useState } from "react";
import cx from "../libs/cx";

interface Props {
  placeholder: string;
  icon_path: string;
  className?: string;
}

const InputIcon = ({ placeholder, icon_path, className }: Props) => {
  const [value, setValue] = useState("");
  return (
    <div className={cx("relative group w-full", className)}>
      <label
        className={cx(
          "group-focus-within:opacity-0 transition-opacity duration-300 ease-in-out opacity-100 pointer-events-none  flex items-center absolute top-1/2 translate-y-[-50%] sm:pl-[31px] pl-6 gap-3 z-0",
          value.length ? "opacity-0" : "opacity-100"
        )}
      >
        <img src={icon_path} alt="user" className="sm:w-6 w-[19.1px] sm:h-6 h-[19.1px]" />
        <p className="sm:text-[16px] text-[14px] sm:leading-[19.5px] leading-[17.07px] text-[#D1D1D1] font-normal">
          {placeholder}
        </p>
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-[#F8F8F8] w-full sm:h-[68px] h-[54.11px] rounded-[10px] pl-[31px] focus:outline-none"
      />
    </div>
  );
};

export default InputIcon;
