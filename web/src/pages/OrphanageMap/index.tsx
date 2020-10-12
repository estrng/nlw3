import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import mapMarkerImg from "../../images/map-marker.svg";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./styles.css";

const OrphanageMap: React.FC = () => {
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
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"></FiPlus>
      </Link>
    </div>
  );
};

export default OrphanageMap;
