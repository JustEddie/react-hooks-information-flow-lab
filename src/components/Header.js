import React from "react";


function Header({onDarkModeClick,theme}) {
    const buttonText = `${theme} Mode`;
  return <header>
    <h2>Eddieeeee</h2>
    <button onClick={onDarkModeClick}>
        {buttonText}
    </button>
  </header>;
}

export default Header;
