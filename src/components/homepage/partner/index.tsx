import { BulogImage, MDBTImage, PIImage } from "@/assets";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="custom-container-xl py-16 my-16 text-main-text relative">
      <div className="flex justify-center">
        <h2 className="text-3xl lg:text-5xl mb-8 lg:mb-16 text-center font-semibold text-main-green max-w-2xl">
          Mitra Kami
        </h2>
      </div>
      <div className="grid grid-cols-3 items-center lg:px-0 px-4 gap-4">
        <Image src={BulogImage} alt="bulog" />
        <Image src={PIImage} alt="piimage" />
        <Image src={MDBTImage} alt="mdbtimage" />
      </div>
    </div>
  );
};

export default Partner;
