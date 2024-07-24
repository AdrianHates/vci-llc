import { useState } from "react";
import Modal from "../../ui/modal";

interface Props {
  logo?: string;
  onClick: () => void;
  opciones?: string[];
  toggle?: boolean;
}

const ModalNavbar = ({ logo, onClick, ...toggle }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Modal {...toggle}>
      <div className={`modal-navbar ${isVisible ? "" : "fade-out"}`}>
        <div>
          {logo && (
            <a href="#">
              <img alt="logo" height={32} width={50} src={logo} />
            </a>
          )}
          <button
            className="text-white"
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
          {/*opciones.map((x, i) => (
            <li key={i}>{x.name}</li>
          ))*/}
        </ul>
      </div>
    </Modal>
  );
};

export default ModalNavbar;
