import { CycleMovementIco, FundsIco, LogisticIco } from "@/assets";
import { IStyleCard } from "@/lib/general-type";
import Image from "next/image";

const StyleCard = ({ imageIco, mainText, subText }: IStyleCard) => {
  return (
    <div className="bg-gray-100 py-6 px-6 lg:px-24 rounded-lg shadow flex items-center gap-9">
      <Image
        src={imageIco}
        alt="service-icons"
        className="w-20 h-w-20 lg:w-36 lg:h-36"
      />
      <div className="space-y-1 lg:space-y-2">
        <p className="text-xl lg:text-2xl font-bold text-main-green">
          {mainText}
        </p>
        <p className="text-sm lg:text-lg">{subText}</p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="custom-container-xl py-16 text-main-text">
      <div className="flex justify-center">
        <h2 className="px-4 lg:px-0 text-3xl lg:text-5xl mb-16 text-center font-semibold text-main-green max-w-2xl">
          Peduli Petani Bersama Eratani
        </h2>
      </div>
      <div className="px-4 lg:px-0 space-y-4">
        <StyleCard
          imageIco={FundsIco}
          mainText="Pembiayaan"
          subText="Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi bagi para petani yang mengalami kesulitan permodalan untuk meningkatkan produktivitas pertanian."
        />
        <StyleCard
          imageIco={CycleMovementIco}
          mainText="Manajemen Rantai Pasok"
          subText="Eratani memfasilitasi akses kebutuhan petani melalui mitra penyedia sarana kebutuhan di bidang pertanian secara transparan dan terstandarisasi."
        />
        <StyleCard
          imageIco={LogisticIco}
          mainText="Distribusi & Penjualan"
          subText="Eratani memfasilitasi petani untuk menjual dan mendistribusikan hasil panen secara langsung dan mudah dengan harga yang terstandarisasi."
        />
      </div>
    </div>
  );
};

export default Service;
