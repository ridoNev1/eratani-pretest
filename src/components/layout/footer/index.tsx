import {
  InstaIco,
  LinkedInIco,
  MainWhiteLogo,
  TiktokIco,
  WhatsappIco,
  YoutubeIco,
} from "@/assets";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-main-green text-white/95">
      <div className="custom-container-xl py-10">
        <Image src={MainWhiteLogo} alt="main-logo" className="max-w-36" />
        <div className="grid grid-cols-[2fr,4fr,1fr] gap-24">
          <div className="mt-8 text-sm">
            <p className="mb-8 leading-7">
              Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung
              Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI Jakarta 12870,
              Indonesia
            </p>
            <p className="mb-2">Email : info.eratani@eratani.co.id</p>
            <p>Telepon : +62 811 952 2577</p>
          </div>
          <div>
            <p className="font-bold">Menu</p>
            <div className="flex flex-col gap-y-2 my-4 text-sm">
              <Link href="/our-team">Tim Kami</Link>
              <Link href="/our-partner">Mitra Eratani</Link>
              <Link href="/tips-n-news">Tips & Berita Pertanian</Link>
              <Link href="/career">Karir</Link>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <Globe />
              <p className="border-b-4 border-b-primary-yellow">IN</p>
              <p>EN</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span></span>
          <div className="flex gap-x-6">
            <Image src={TiktokIco} alt="main-logo" />
            <Image src={InstaIco} alt="main-logo" />
            <Image src={LinkedInIco} alt="main-logo" />
            <Image src={YoutubeIco} alt="main-logo" />
            <Image src={WhatsappIco} alt="main-logo" />
          </div>
        </div>
        <p className="text-sm text-center mt-3">
          Copyright © 2021 by PT Eratani Teknologi Nusantara
        </p>
      </div>
    </div>
  );
};

export default Footer;
