import { Box } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';

function Markers({ dataSekolah, jenjang }) {
  const sdNegeriIcon = L.icon({
    iconUrl: 'https://github.com/ichigoseira/Marker/blob/main/26.png?raw=true',
    iconSize: [25, 25],
  });
  const sdSwastaIcon = L.icon({
    iconUrl: 'https://github.com/ichigoseira/Marker/blob/main/27.png?raw=true',
    iconSize: [25, 25],
  });
  const smpNegeriIcon = L.icon({
    iconUrl: 'https://github.com/ichigoseira/Marker/blob/main/29.png?raw=true',
    iconSize: [25, 25],
  });
  const smpSwastaIcon = L.icon({
    iconUrl: 'https://github.com/ichigoseira/Marker/blob/main/28.png?raw=true',
    iconSize: [25, 25],
  });
  const smaNegeriIcon = L.icon({
    iconUrl: 'https://github.com/ichigoseira/Marker/blob/main/31.png?raw=true',
    iconSize: [25, 25],
  });
  const smaSwastaIcon = L.icon({
    iconUrl: 'https://github.com/ichigoseira/Marker/blob/main/30.png?raw=true',
    iconSize: [25, 25],
  });
  const smkNegeriIcon = L.icon({
    iconUrl: 'https://github.com/ichigoseira/Marker/blob/main/32.png?raw=true',
    iconSize: [25, 25],
  });
  const smkSwastaIcon = L.icon({
    iconUrl: 'https://github.com/ichigoseira/Marker/blob/main/33.png?raw=true',
    iconSize: [25, 25],
  });

  function checkTypeSchool(jenjang, type) {
    switch (jenjang) {
      case 'sd':
        return type === 'negeri' ? sdNegeriIcon : sdSwastaIcon;
      case 'smp':
        return type === 'negeri' ? smpNegeriIcon : smpSwastaIcon;
      case 'sma':
        return type === 'negeri' ? smaNegeriIcon : smaSwastaIcon;
      case 'smk':
        return type === 'negeri' ? smkNegeriIcon : smkSwastaIcon;
    }
  }

  const [data, setData] = useState([...dataSekolah]);
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    <>
      {position && (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      {data.map((sekolah) => (
        <Marker
          position={sekolah.coordinates}
          icon={checkTypeSchool(jenjang, sekolah.tipe)}
        >
          <Popup>
            <h3>{sekolah.name}</h3>
            <p>{sekolah.alamat}</p>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

function Map({ data, jenjang }) {
  return (
    <Box
      as={MapContainer}
      center={[-6.2, 106.816666]}
      zoom={14}
      scrollWheelZoom={true}
      height="600px"
      my={16}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers dataSekolah={data} jenjang={jenjang} />
    </Box>
  );
}

export default Map;
