import { useState } from "react";
import cx from "../libs/cx";

interface Props {
  placeholder: string;
  icon_path: string;
}

const InputIcon = ({ placeholder, icon_path }: Props) => {
  const [value, setValue] = useState("");
  return (
    <div className="relative group">
      <label
        className={cx(
          "group-focus-within:opacity-0 transition-opacity duration-300 ease-in-out opacity-100 pointer-events-none  flex items-center absolute top-1/2 translate-y-[-50%] pl-[31px] gap-3 z-0",
          value.length ? "opacity-0" : "opacity-100"
        )}
      >
        <img src={icon_path} alt="user" className="w-6 h-6" />
        <p className="text-[16px] leading-[19.5px] text-[#D1D1D1] font-normal">
          {placeholder}
        </p>
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-[#F8F8F8] w-[421px] h-[68px] rounded-[10px] pl-[31px] focus:outline-none"
      />
    </div>
  );
};

export default InputIcon;
