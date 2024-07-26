import { useState } from "react";
import Modal from "../../ui/modal";
import cx from "../../libs/cx";

interface Props {
  logo?: string;
  onClick: () => void;
  options?: {
    name: string;
    classOpt: string;
  }[];
  toggle?: boolean;
}

const ModalNavbar = ({ logo, onClick, options, ...toggle }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Modal {...toggle}>
      <div
        className={cx(
          "modal-navbar w-full h-full bg-primary",
          isVisible ? "" : "fade-out"
        )}
      >
        <div>
          {logo && (
            <a href="#">
              <img alt="logo" height={32} width={50} src={logo} />
            </a>
          )}
          <button
            className="text-white absolute right-2 top-2"
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                onClick();
              }, 300);
            }}
          >
            X
          </button>
        </div>
        <ul>
          {options && options.map((opt, i) => <li key={i}>{opt.name}</li>)}
        </ul>
      </div>
    </Modal>
  );
};

export default ModalNavbar;
