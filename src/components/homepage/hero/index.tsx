"use client";

import React, { useEffect, useRef, useState } from "react";
import { MainHeroImage } from "@/assets";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const arrLength = 3;

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 3500 }));

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (!api) return;

    setCurrent(index + 1);
    api.scrollTo(index);
  };

  return (
    <div
      className="min-h-screen max-w-[100vw] bg-cover relative flex justify-center items-center"
      style={{ backgroundImage: `url(${MainHeroImage.src})` }}
    >
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="lg:px-0 px-10 w-full custom-container-xl"
      >
        <CarouselContent>
          {Array.from({ length: arrLength }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="text-center flex flex-col items-center gap-y-8">
                <h1 className="text-2xl lg:text-5xl font-semibold text-white">
                  #SelaluAdaUntukPetani
                </h1>
                <h3 className="lg:text-4xl lg:leading-[48px] font-medium text-white/95 max-w-screen-lg">
                  Eratani adalah perusahaan startup Agri-tech yang fokus
                  membangun sebuah ekosistem pertanian yang kuat dengan
                  mendigitalisasi proses pertanian dari hulu hingga ke hilir.
                  Eratani berupaya memberikan kemudahan akses kepada petani
                  melalui teknologi yang kami miliki untuk meningkatkan
                  produktivitas dan kesejahteraan ekosistem pertanian.
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-x-6 items-center absolute bottom-20">
        {Array.from({ length: arrLength }).map((_, indx) => (
          <div
            key={indx}
            onClick={() => handleDotClick(indx)}
            className={`${
              current - 1 === indx ? "bg-primary-yellow" : "bg-gray-400"
            }  w-10 lg:w-16 h-2 lg:h-3 rounded-full cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
