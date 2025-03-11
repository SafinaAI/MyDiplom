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

interface SpecialistMapProps {
  location: { lat: number; lon: number };
  address: string;
}

function SpecialistMap({ location, address }: SpecialistMapProps) {
  if (!location) return <p>Координаты специалиста не найдены</p>;

  return (
    <div className="specialist__map-container">
      {/* <h3 className="specialist__map-title">Местоположение:</h3> */}
      <div className="specialist__map-wrapper">
        <YMaps query={{ apikey: config.YANDEX_API_KEY }}>
          <Map
            defaultState={{
              center: [location.lat, location.lon],
              zoom: 16,
            }}
            width="100%"
            height="100%"
          >
            <Placemark geometry={[location.lat, location.lon]} />
            <FullscreenControl />
            <SearchControl options={{ float: "right" }} />
            <GeolocationControl options={{ float: "left" }} />
            <ZoomControl options={{ float: "right" }} />
          </Map>
        </YMaps>
      </div>
      <p className="specialist__address">Адрес: {address}</p>
    </div>
  );
}

export default SpecialistMap;
