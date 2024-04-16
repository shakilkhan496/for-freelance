import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import '../../styles/components/log/index.css'

const Log = ( props ) => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(true);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul className="ul">
          <li
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : "btn"}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : "btn"}
          >
            Se connecter
          </li>
        </ul>
        {signUpModal && <Signup />}
        {signInModal && <Login />}
      </div>
    </div>
  );
};

export default Log;
