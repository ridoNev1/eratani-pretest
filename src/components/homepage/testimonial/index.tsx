"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { PlayIco, UserImage } from "@/assets";
import { Button } from "@/components/ui/button";

const Testimonial = () => {
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
    <div className="custom-container-xl py-16 text-main-text relative">
      <div className="flex justify-center">
        <h2 className="text-3xl lg:text-5xl mb-16 text-center font-semibold text-main-green max-w-2xl">
          Kata Mereka
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <Carousel
          plugins={[plugin.current]}
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <div className="lg:grid grid-cols-[1.3fr,2fr] shadow-lg w-full bg-gray-100">
                    <Image
                      src={UserImage}
                      alt="user"
                      className="h-56 lg:h-auto w-full object-cover"
                    />
                    <div className="relative p-16">
                      <p className="text-2xl mb-2">
                        <span className="font-semibold">Wasroni</span> |{" "}
                        <span className="font-light">Petani</span>
                      </p>
                      <p className="text-lg">
                        Harapan saya Eratani semakin meluas karena petani sangat
                        amat dibantu dengan adanya Eratani. Terima kasih
                        Eratani!
                      </p>
                      <Button className="bg-primary-yellow text-lg text-main-text hover:bg-primary-yellow/40 mt-10 lg:absolute right-16 bottom-16">
                        <Image src={PlayIco} alt="play-ico" /> Putar Video
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex bg-primary-yellow text-main-text w-10 h-10 text-xl" />
          <CarouselNext className="hidden lg:flex bg-primary-yellow text-main-text w-10 h-10 text-xl" />
        </Carousel>
        <div className="flex gap-x-6 items-center absolute bottom-0">
          {Array.from({ length: 4 }).map((_, indx) => (
            <div
              key={indx}
              onClick={() => handleDotClick(indx)}
              className={`${
                current - 1 === indx ? "bg-primary-yellow" : "bg-gray-400"
              } w-10 lg:w-16 h-2 lg:h-3 rounded-full cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
