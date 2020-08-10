import React from "react";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="" alt="Logo de la conferencia" />
        </div>

        <div>
          <img src="" alt="Avatar" />
          <h1>
            Rafael <br />
            Flores
          </h1>
        </div>

        <div>
          <p>Desarrollador web</p>
          <p>@elfitaflores</p>
        </div>

        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
