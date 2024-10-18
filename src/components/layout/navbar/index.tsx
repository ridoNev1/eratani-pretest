"use client";

import { MainLogo, MainWhiteLogo } from "@/assets";
import { Button } from "@/components/ui/button";
import useScroll from "@/custom-hook/use-scroll";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const isScrolled: boolean = useScroll(0);

  return (
    <nav
      className={`${
        isScrolled
          ? "sticky top-0 bg-white shadow-md text-main-text"
          : "absolute top-0 bg-transparent text-white"
      } w-full py-6 transition-all duration-300 ease-in-out z-50`}
    >
      <div className="custom-container-xl flex items-center justify-between">
        <Image
          src={isScrolled ? MainLogo : MainWhiteLogo}
          alt="main-logo"
          className="max-w-36"
        />
        <div className="flex items-center gap-12 text-lg">
          <Link href="/" className="font-semibold">
            Beranda
          </Link>
          <Link href="/about-us">Tentang Kami</Link>
          <Link href="/tips-n-news">Tips & Berita Pertanian</Link>
          <Link href="/activity">Kegiatan</Link>
        </div>
        <Button className="bg-primary-yellow text-lg text-main-text hover:bg-primary-yellow/40">
          Mitra Petani
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
