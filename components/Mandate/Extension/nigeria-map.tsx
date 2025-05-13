"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Hook to detect screen size
function useScreenSize() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop' | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log("Window width:", width); // Debugging line
      if (width <= 750) {
        setScreenSize('mobile');
      } else if (width <= 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}

type ZoneData = {
  id: string;
  name: string;
  villages: number;
  schools: number;
  image: string;
  position: {
    top: string;
    left: string;
    width: string;
    zIndex: number;
  };
  mobilePosition: {
    top: string;
    left: string;
    width: string;
    zIndex: number;
  };
  tabletPosition: {
    top: string;
    left: string;
    width: string;
    zIndex: number;
  };
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
  tabletWidth: number;
  tabletHeight: number;
};

export default function NigeriaMap() {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const screenSize = useScreenSize();

  const zones: ZoneData[] = [
    {
      id: "north-west",
      name: "North West",
      villages: 62,
      schools: 30,
      image: "/Images/Map/north-west.png",
      position: { top: "-0.2%", left: "-10%", width: "100%", zIndex: 2 },
      mobilePosition: { top: "-0.2%", left: "-22%", width: "100%", zIndex: 2 },
      tabletPosition: { top: "-0.2%", left: "-16.5%", width: "100%", zIndex: 2 },
      width: 754,
      height: 296,
      mobileWidth: 754,
      mobileHeight: 64,
      tabletWidth: 754,
      tabletHeight: 108,
    },
    {
      id: "north-east",
      name: "North East",
      villages: 74,
      schools: 31,
      image: "/Images/Map/north-east.png",
      position: { top: "7px", left: "43.45%", width: "100%", zIndex: 1 },
      mobilePosition: { top: "2px", left: "19.3%", width: "100%", zIndex: 1 },
      tabletPosition: { top: "4.5px", left: "14.5%", width: "100%", zIndex: 1 },
      width: 751,
      height: 445,
      mobileWidth: 751,
      mobileHeight: 97,
      tabletWidth: 751,
      tabletHeight: 156,
    },
    {
      id: "north-central",
      name: "North Central",
      villages: 115,
      schools: 63,
      image: "/Images/Map/north-central.png",
      position: { top: "22%", left: "-9.8%", width: "100%", zIndex: 3 },
      mobilePosition: { top: "11.2%", left: "-21.8%", width: "100%", zIndex: 3 },
      tabletPosition: { top: "18.1%", left: "-16.4%", width: "100%", zIndex: 3 },
      width: 753,
      height: 296,
      mobileWidth: 753,
      mobileHeight: 64.5,
      tabletWidth: 753,
      tabletHeight: 108,
    },
    {
      id: "south-west",
      name: "South West",
      villages: 48,
      schools: 34,
      image: "/Images/Map/south-west.png",
      position: { top: "40.3%", left: "-9.8%", width: "100%", zIndex: 4 },
      mobilePosition: { top: "20.5%", left: "-32%", width: "100%", zIndex: 4 },
      tabletPosition: { top: "33.8%", left: "-12.5%", width: "100%", zIndex: 4 },
      width: 479,
      height: 199,
      mobileWidth: 479,
      mobileHeight: 42,
      tabletWidth: 479,
      tabletHeight: 71,
    },
    {
      id: "south-east",
      name: "South East",
      villages: 34,
      schools: 24,
      image: "/Images/Map/south-east.png",
      position: { top: "58.1%", left: "40.7%", width: "100%", zIndex: 5 },
      mobilePosition: { top: "29.1%", left: "7.7%", width: "100%", zIndex: 5 },
      tabletPosition: { top: "48.5%", left: "15.8%", width: "100%", zIndex: 5 },
      width: 498,
      height: 136,
      mobileWidth: 498,
      mobileHeight: 30,
      tabletWidth: 498,
      tabletHeight: 49,
    },
    {
      id: "south-south",
      name: "South South",
      villages: 49,
      schools: 14,
      image: "/Images/Map/south-south.png",
      position: { top: "53.9%", left: "-10%", width: "100%", zIndex: 6 },
      mobilePosition: { top: "27.3%", left: "-24.4%", width: "100%", zIndex: 6 },
      tabletPosition: { top: "44.9%", left: "-18.3%", width: "100%", zIndex: 6 },
      width: 684,
      height: 197,
      mobileWidth: 684,
      mobileHeight: 42,
      tabletWidth: 684,
      tabletHeight: 71,
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-8 max-1369:overflow-hidden">
      <h3 className="text-xl font-semibold max-sm:text-center">Distribution Across Geopolitical Zones</h3>
      <div className=" hidden h-[296px]"></div>
      <div className=" hidden h-[64px]"></div>
      <div className=" hidden h-[108px]"></div>
      <div className=" hidden h-[445px]"></div>
      <div className=" hidden h-[97px]"></div>
      <div className=" hidden h-[156px]"></div>
      <div className=" hidden h-[64.5px]"></div>
      <div className=" hidden h-[199px]"></div>
      <div className=" hidden h-[42px]"></div>
      <div className=" hidden h-[71px]"></div>
      <div className=" hidden h-[136px]"></div>
      <div className=" hidden h-[30px]"></div>
      <div className=" hidden h-[49px]"></div>
      {/* Map */}
      {screenSize && (
        <div
          className={`relative ${
            screenSize === "mobile"
              ? "h-[300px] w-[282px]"
              : screenSize === "tablet"
              ? "h-[300px] w-[626px]"
              : "h-[700px] w-[1008px]"
          } bg-white rounded-lg shadow-sm`}
        >
          <div className="absolute inset-0">
            {zones.map((zone) => {
              let position, width, height;

              if (screenSize === 'mobile') {
                position = zone.mobilePosition;
                width = zone.mobileWidth;
                height = zone.mobileHeight;
              } else if (screenSize === 'tablet') {
                position = zone.tabletPosition;
                width = zone.tabletWidth;
                height = zone.tabletHeight;
              } else {
                position = zone.position;
                width = zone.width;
                height = zone.height;
              }

              return (
                <div
                  key={zone.id}
                  className={`absolute transition-all duration-300 ${
                    activeZone === zone.id
                      ? "opacity-100 filter drop-shadow-xl scale-105 z-10"
                      : activeZone
                      ? "opacity-40"
                      : "opacity-80"
                  }`}
                  style={{
                    top: position.top,
                    left: position.left,
                    width: position.width,
                    zIndex: activeZone === zone.id ? 10 : position.zIndex,
                  }}
                  onMouseEnter={screenSize !== 'mobile' ? () => setActiveZone(zone.id) : undefined}
                  onMouseLeave={screenSize !== 'mobile' ? () => setActiveZone(null) : undefined}
                  onClick={screenSize === 'mobile' ? () => setActiveZone(zone.id) : undefined}
                >
                  <Image
                    src={zone.image || "/placeholder.svg"}
                    alt={`${zone.name} region`}
                    width={width}
                    height={height}
                    className={`object-contain h-[${height}px]`}
                  />
                </div>
              );
            })}
          </div>

          {/* Info Box */}
          {activeZone ? (
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-lg shadow-md z-20 backdrop-blur-sm">
              {zones
                .filter((zone) => zone.id === activeZone)
                .map((zone) => (
                  <div key={zone.id} className="flex justify-between items-center">
                    <h4 className="font-bold text-lg text-green-800">{zone.name}</h4>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="text-xs text-gray-600">Villages</p>
                        <p className="font-bold text-green-700">{zone.villages}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-600">Schools</p>
                        <p className="font-bold text-green-700">{zone.schools}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-lg text-center text-gray-500 z-20">
              {screenSize === 'mobile' ? "Tap on a region to see details" : "Hover over a region to see details"}
            </div>
          )}
        </div>
      )}

      {/* Zone Buttons */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
        {zones.map((zone) => (
          <div
            key={zone.id}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              activeZone === zone.id ? "bg-green-100 shadow-md" : "bg-gray-50 hover:bg-green-50"
            }`}
            onMouseEnter={screenSize !== 'mobile' ? () => setActiveZone(zone.id) : undefined}
            onMouseLeave={screenSize !== 'mobile' ? () => setActiveZone(null) : undefined}
            onClick={screenSize === 'mobile' ? () => setActiveZone(zone.id) : undefined}
          >
            <h4 className="font-bold text-lg">{zone.name}</h4>
            <div className="mt-2 space-y-1">
              <p className="text-sm">
                Adopted Villages: <span className="font-semibold">{zone.villages}</span>
              </p>
              <p className="text-sm">
                Adopted Schools: <span className="font-semibold">{zone.schools}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Stats */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg w-full max-w-3xl">
        <h4 className="font-bold text-center mb-2">Total Impact</h4>
        <div className="flex justify-around">
          <div className="text-center">
            <p className="text-sm">Total Villages</p>
            <p className="font-bold text-2xl text-green-700">
              {zones.reduce((sum, zone) => sum + zone.villages, 0)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm">Total Schools</p>
            <p className="font-bold text-2xl text-green-700">
              {zones.reduce((sum, zone) => sum + zone.schools, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
