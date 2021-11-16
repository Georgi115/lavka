import { YMaps, Map, Placemark } from "react-yandex-maps";

const Maps = () => {
  return (
    <YMaps>
      <Map
        width={"100%"}
        height={"97%"}
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      >
        <Placemark></Placemark>
      </Map>
    </YMaps>
  );
};

export default Maps;
