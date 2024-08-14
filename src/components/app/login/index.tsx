interface Props {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setLogin }: Props) => {
  return (
    <section className="flex  items-center justify-center min-h-[100vh] bg-primary bg relative overflow-hidden">
      <div className="bg-[url('/inicio/bg_img_1.png')] bg-center bg-[length:1452.09px_816.16px] absolute top-0 left-0 w-full h-full opacity-5"></div>

      <div className="flex xl:flex-row flex-col gap-16 relative sm:py-20 py-2">
        <svg
          className="absolute left-[100%] bottom-[9%]"
          width="53"
          height="51"
          viewBox="0 0 53 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_9_94)">
            <rect
              x="12.6759"
              y="30.7729"
              width="25.3784"
              height="27.3241"
              rx="4.40119"
              transform="rotate(-90 12.6759 30.7729)"
              fill="white"
            />
          </g>
          <path
            d="M30.3733 15.1261V15.8722C30.3733 16.5297 28.5134 17.066 26.2209 17.066C23.9284 17.066 22.0685 16.5297 22.0685 15.8722V15.1261C22.0685 14.4686 23.9284 13.9324 26.2209 13.9324C28.5134 13.9324 30.3733 14.4686 30.3733 15.1261ZM30.3733 16.8048V18.4836C30.3733 19.1411 28.5134 19.6773 26.2209 19.6773C23.9284 19.6773 22.0685 19.1411 22.0685 18.4836V16.8048C22.9606 17.3458 24.5935 17.5976 26.2209 17.5976C27.8484 17.5976 29.4812 17.3458 30.3733 16.8048ZM30.3733 19.4162V21.0949C30.3733 21.7524 28.5134 22.2886 26.2209 22.2886C23.9284 22.2886 22.0685 21.7524 22.0685 21.0949V19.4162C22.9606 19.9571 24.5935 20.2089 26.2209 20.2089C27.8484 20.2089 29.4812 19.9571 30.3733 19.4162Z"
            fill="#EE7623"
          />
          <defs>
            <filter
              id="filter0_d_9_94"
              x="0.398887"
              y="0.761695"
              width="51.8781"
              height="49.9325"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="7.64418" />
              <feGaussianBlur stdDeviation="6.13851" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.136675 0 0 0 0 0.118125 0 0 0 0 0.35 0 0 0 0.24 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_9_94"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_9_94"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="flex flex-col gap-1 px-6 sm:items-start items-center">
          <img src="logo.svg" alt="logo" className="w-[427.74px] h-[106px]" />
          <h3 className="text-[29px] leading-[35px] text-quaternary font-light tracking-[2.88px] sm:text-start text-center">
            Sitio en construcción
          </h3>
          <p className="sm:text-[59.02px] sm:leading-[63.56px] text-2xl sm:text-start text-center max-w-[19ch] text-white">
            Estamos construyendo algo increíble. ¡Pronto podrás verlo!
          </p>
          <button
            onClick={() => {
              setLogin(false);
            }}
            className="duration-300 hover:brightness-125 hover:scale-[1.05] bg-quaternary mt-10 xl:self-start self-center px-[22px] py-2.5 text-white font-bold text-[16px] leading-[19.5px] rounded-[8px]"
          >
            Regresar al Sitio Web
          </button>
        </div>
        <img
          src="/login/img_1.png"
          alt="login"
          className="w-[424px] xl:self-end self-center"
        />
      </div>
    </section>
  );
};

export default Login;
