import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mynavbar">
      <div>
        <ul>
          <li>
            <Link to="/">Todo</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/redux-practise">Temp converter</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
