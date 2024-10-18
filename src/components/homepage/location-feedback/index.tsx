"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const GOOGLE_MAPS_API_KEY = "";

const LocationFeedback = () => {
  const [markerLocation] = useState({
    lat: -6.221791,
    lng: 106.843239,
  });
  return (
    <div className="custom-container-xl gap-8 pb-16 text-main-text grid grid-cols-[1.5fr,1fr]">
      <div className="relative">
        <div className="w-full h-[65vh]">
          <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
            <Map
              style={{ borderRadius: "20px" }}
              defaultZoom={18}
              defaultCenter={markerLocation}
              gestureHandling={"greedy"}
              disableDefaultUI
            >
              <Marker position={markerLocation} />
            </Map>
          </APIProvider>
        </div>
        <Button className="bg-primary-yellow bottom-10 left-[38%] px-16 absolute text-xl text-main-text hover:bg-primary-yellow/40">
          Lokasi
        </Button>
      </div>
      <div className="w-full h-full bg-gray-100 shadow-md p-9">
        <p className="text-2xl font-semibold text-center mb-9">
          Kritik & Saran
        </p>
        <div className="space-y-5">
          <Input type="text" placeholder="Nama" />
          <Input type="text" placeholder="Email" />
          <Input type="number" placeholder="Nomor Handphone" />
          <Textarea placeholder="Pesan Anda" rows={5} />
        </div>
        <div className="flex justify-center mt-16">
          <Button className="bg-primary-yellow left-[38%] px-16 text-xl text-main-text hover:bg-primary-yellow/40">
            Kirim Pesan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationFeedback;
