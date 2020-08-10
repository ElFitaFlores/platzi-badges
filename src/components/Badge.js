import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            src="https://www.gravatar.com/avatar?id=identicon"
            alt="Avatar"
            className="Badge__avatar"
          />
          <h1>
            Rafael <br />
            Flores
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Desarrollador web</h3>
          <div>@elfitaflores</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
