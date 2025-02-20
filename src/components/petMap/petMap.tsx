// Этот компонент будет загружать карту с единственной точкой (приютом, где находится питомец).

import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  SearchControl,
  GeolocationControl,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import config from "../../config/config";

const shelters = {
  "Подари надежду": { lat: 55.7887, lon: 49.1221 }, // kazan
  "Танин дом друзей": { lat: 55.7963, lon: 49.1088 }, // kazan
  "Собачья жизнь": { lat: 55.7433, lon: 52.3959 }, // Набережные Челны
  "Человек собаке друг": { lat: 54.9014, lon: 52.2978 },
};

interface PetMapProps {
  hospice: string;
}

function PetMap({ hospice }: PetMapProps) {
  const location = shelters[hospice];

  if (!location) return <p>Координаты приюта не найдены</p>;

  return (
    <YMaps query={{ apikey: config.YANDEX_API_KEY }}>
      <Map
        defaultState={{
          center: [location.lat, location.lon],
          zoom: 12,
        }}
        width="500px"
        height="420px"
      >
        <Placemark
          geometry={[location.lat, location.lon]}
        //   options={{
        //     iconLayout: "default#image",
        //     iconImageHref: "/icons/dog-paw.svg", // Путь к твоей иконке
        //     iconImageSize: [40, 40], // Размер иконки
        //     iconImageOffset: [-20, -40], // Смещение, чтобы центрировать иконку
        //   }}
        />
        <FullscreenControl />
        <SearchControl options={{ float: "right" }} />
        <GeolocationControl options={{ float: "left" }} />
        <ZoomControl options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
}

export default PetMap;
