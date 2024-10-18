import {
  GroupIco,
  CapitalIco,
  GrassIco,
  StaticGainIco,
  ProductivityGainIco,
} from "@/assets";
import { IStyleCard } from "@/lib/general-type";
import Image from "next/image";
import React from "react";

const StyleCard = ({ imageIco, mainText, subText }: IStyleCard) => {
  return (
    <div className="flex justify-center items-center mb-4 flex-col">
      <Image src={imageIco} alt="group-ico" className="w-16 h-16" />
      <h3 className="text-2xl font-bold text-main-green">{mainText}</h3>
      <p className="text-lg font-medium text-primary-yellow">{subText}</p>
    </div>
  );
};

const Advantages = () => {
  return (
    <div className="custom-container-xl py-16 text-main-text">
      <div className="flex justify-center">
        <h2 className="text-5xl mb-16 text-center font-semibold text-main-green max-w-2xl">
          Menuju Ekosistem yang Lebih Kuat Bersama Eratani
        </h2>
      </div>
      <div className="flex justify-center gap-28 mb-20">
        <StyleCard
          imageIco={GroupIco}
          mainText="500+"
          subText="Petani Binaan"
        />
        <StyleCard
          imageIco={CapitalIco}
          mainText="> Rp 5 Miliar"
          subText="Pendanaan Tersalurkan"
        />
      </div>
      <div className="flex justify-center gap-16">
        <StyleCard
          imageIco={StaticGainIco}
          mainText="> 15%"
          subText="Peningkatan Pendapatan"
        />
        <StyleCard
          imageIco={GrassIco}
          mainText="750 Ha +"
          subText="Luas Wilayah Binaan"
        />
        <StyleCard
          imageIco={ProductivityGainIco}
          mainText="> 20%"
          subText="Peningkatan Produktivitas"
        />
      </div>
    </div>
  );
};

export default Advantages;
