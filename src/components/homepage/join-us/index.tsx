import { WhatsappIco } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const JoinUs = () => {
  return (
    <div className="custom-container-xl flex flex-col items-center py-16 gap-y-16 my-16 text-main-text relative">
      <h2 className="text-3xl lg:text-5xl text-center font-semibold text-main-green">
        Ingin Menjadi Bagian dari Kami?
      </h2>
      <div className="flex justify-center">
        <p className="text-2xl mx-4 lg:mx-0 text-center max-w-xl font-medium leading-10">
          Bersama kami membangun pertanian Indonesia karena Eratani{" "}
          <span className="font-bold text-black bg-primary-yellow px-1">
            #SelaluAdaUntukPetani
          </span>
        </p>
      </div>
      <Button className="bg-main-green text-lg">
        <Image src={WhatsappIco} alt="play-ico" /> Hubungi Kami
      </Button>
    </div>
  );
};

export default JoinUs;
