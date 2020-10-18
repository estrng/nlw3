import React, { useEffect, useState } from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import mapMarkerImg from "../../images/map-marker.svg";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import api from "../../services/api";

import "leaflet/dist/leaflet.css";
import "./styles.css";
import mapIcon from "../../utils/mapIcon";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanageMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Marcador no mapa" />

          <h2>Escolha um orfanato</h2>
          <p>Muitas crianças estão esperando sua visita!</p>
        </header>

        <footer>
          <strong>Mairiporã</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.3162197, -46.5820678]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />;
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#fff"></FiPlus>
      </Link>
    </div>
  );
};

export default OrphanageMap;
