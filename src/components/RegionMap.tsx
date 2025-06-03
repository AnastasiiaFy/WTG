import React from "react";
import regionsData from "../data/regions.json";
import "../styles/RegionMap.css";

interface Region {
  id: string;
  name: string;
  picture_image: string;
  map_image: string;
}

interface RegionMapProps {
  regionId: string;
  eventCount: number;
}

interface RegionMapStyle {
  width: string;
  height: string;
  top?: string;
  left?: string;
  position?: string;
}

const regionMapStyles: { [key: string]: RegionMapStyle } = {
  lvivska: { width: "600px", height: "650px", top: "0px", left: "50%", position: "relative" },
  transcarpathian: { width: "750px", height: "650px", top: "5px", left: "55%", position: "relative" },
  "ivano-frankivsk": { width: "580px", height: "630px", top: "50px", left: "50%", position: "relative" },
  chernivtsi: { width: "680px", height: "650px", top: "5px", left: "50%", position: "relative" },
  ternopil: { width: "520px", height: "590px", top: "50px", left: "45%", position: "relative" },
  volyn: { width: "560px", height: "670px", top: "5px", left: "50%", position: "relative" },
  rivne: { width: "550px", height: "630px", top: "55px", left: "50%", position: "relative" },
  zhytomyr: { width: "590px", height: "610px", top: "55px", left: "50%", position: "relative" },
  khmelnytskyi: { width: "590px", height: "640px", top: "55px", left: "50%", position: "relative" },
  vinnytsia: { width: "580px", height: "630px", top: "55px", left: "50%", position: "relative" },
  kyivska: { width: "650px", height: "640px", top: "55px", left: "50%", position: "relative" },
  cherkasy: { width: "680px", height: "690px", top: "-15px", left: "43%", position: "relative" },
  kirovohrad: { width: "690px", height: "690px", top: "-80px", left: "50%", position: "relative" },
  mykolaiv: { width: "590px", height: "680px", top: "-40px", left: "45%", position: "relative" },
  odesa: { width: "630px", height: "620px", top: "55px", left: "50%", position: "relative" },
  sumska: { width: "580px", height: "620px", top: "65px", left: "50%", position: "relative" },
  poltavska: { width: "690px", height: "670px", top: "15px", left: "50%", position: "relative" },
  dnipropetrovska: { width: "680px", height: "690px", top: "-50px", left: "50%", position: "relative" },
  kharkivska: { width: "620px", height: "600px", top: "50px", left: "50%", position: "relative" },
  chernihiv: { width: "590px", height: "620px", top: "60px", left: "50%", position: "relative" },
  occupied_territories: { width: "0px", height: "0px" },
};

export const RegionMap: React.FC<RegionMapProps> = ({ regionId, eventCount }) => {
  const selectedRegion = regionsData.find((region: Region) => region.id === regionId);
  const mapImage = selectedRegion ? selectedRegion.map_image : "";
  const mapStyle = regionMapStyles[regionId] || {
    width: "600px",
    height: "400px",
    top: "20px",
    left: "50%",
    position: "relative",
  };

  return (
    <div
      className="region-map-container"
      style={{
        width: mapStyle.width,
        height: `calc(${mapStyle.height} + 40px)`, // Додаємо місце для тексту знизу
        position: "relative",
        left: mapStyle.left,
        top: mapStyle.top,
        transform: mapStyle.position === "relative" ? "translateX(-50%)" : undefined,
      }}
    >
      {mapImage ? (
        <>
          <img
            src={mapImage}
            alt={`Карта ${selectedRegion?.name || regionId}`}
            className="region-map-image"
            style={{
              width: mapStyle.width,
              height: mapStyle.height,
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            onError={() => console.error(`Failed to load map image: ${mapImage}`)}
          />
          <div
            className="events-count"
            style={{
              position: "absolute",
              top: `calc(${mapStyle.height} + 20px)`, // Фіксований відступ 20px від нижньої межі мапи
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              textAlign: "center",
            }}
          >
            Знайдено {eventCount} подій
          </div>
        </>
      ) : (
        <p>Карта для регіону {regionId} відсутня</p>
      )}
    </div>
  );
};