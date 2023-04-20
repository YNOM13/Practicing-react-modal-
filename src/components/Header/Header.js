import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header style={{padding:'10px', display:'flex', justifyContent:'space-around', background:'lightgreen'}}>
      <Link to="/*">Search</Link>
      <Link to="/open/main">Popup</Link>
    </header>
  );
};

export default Header;