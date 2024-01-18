import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        Footer
        <button onClick={() => navigate("/disabilityrightsinfo")}>
          Click here to know additional info on rights
        </button>
      </div>
    </div>
  );
};

export default Footer;
