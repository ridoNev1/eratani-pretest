"use client";

import { MainLogo, MainWhiteLogo, MenuIco } from "@/assets";
import { Button } from "@/components/ui/button";
import useScroll from "@/custom-hook/use-scroll";
import { CircleX, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const isScrolled: boolean = useScroll(0);
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className={`${
        isScrolled
          ? "sticky top-0 bg-white shadow-md text-main-text"
          : "absolute top-0 bg-transparent lg:text-white text-main-text"
      } w-full py-6 px-6 lg:px-0 transition-all duration-300 ease-in-out z-50`}
    >
      <div className="custom-container-xl flex items-center justify-between">
        <Image
          src={isScrolled ? MainLogo : MainWhiteLogo}
          alt="main-logo"
          className="lg:max-w-36"
        />
        <div
          className={`fixed left-0 lg:static w-full lg:w-auto transition-all duration-300 lg:h-auto lg:bg-transparent h-screen bg-black/30 ${
            toggle ? "top-0" : "-top-[1000px]"
          }`}
        >
          <div className="flex items-center flex-col lg:flex-row py-10 lg:py-0 bg-white lg:bg-transparent lg:gap-12 text-lg">
            <div
              className="flex justify-end px-10 pb-4 w-full cursor-pointer lg:hidden"
              onClick={() => setToggle(!toggle)}
            >
              <CircleX size={24} />
            </div>
            <div className="lg:hover:bg-transparent lg:w-auto lg:text-start lg:py-0 hover:bg-[#FFF9CC] w-full text-center py-4">
              <Link href="/" className="font-semibold">
                Beranda
              </Link>
            </div>
            <div className="lg:hover:bg-transparent lg:w-auto lg:text-start lg:py-0 hover:bg-[#FFF9CC] w-full text-center py-4">
              <Link href="/about-us">Tentang Kami</Link>
            </div>
            <div className="lg:hover:bg-transparent lg:w-auto lg:text-start lg:py-0 hover:bg-[#FFF9CC] w-full text-center py-4">
              <Link href="/tips-n-news">Tips & Berita Pertanian</Link>
            </div>
            <div className="lg:hover:bg-transparent lg:w-auto lg:text-start lg:py-0 hover:bg-[#FFF9CC] w-full text-center py-4">
              <Link href="/activity">Kegiatan</Link>
            </div>
            <Button className="bg-primary-yellow lg:hidden mt-2 text-lg text-main-text hover:bg-primary-yellow/40">
              Mitra Petani
            </Button>
          </div>
        </div>
        <Button className="bg-primary-yellow hidden lg:block text-lg text-main-text hover:bg-primary-yellow/40">
          Mitra Petani
        </Button>
        <Button
          variant="ghost"
          className="hover:bg-main-green/20 lg:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <Image src={MenuIco} alt="menu-ico" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
