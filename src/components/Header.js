import React from 'react';
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">
        <FlightTakeoffIcon fontSize="large" /> {props.title}
      </h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Nosso Próximo Destino'
};

export default Header;
