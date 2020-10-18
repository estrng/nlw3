import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import mapMarkerImg from "../../images/map-marker.svg";
import { useHistory } from "react-router-dom";

import "./styles.css";

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;
