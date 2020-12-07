import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FollowMe.css';
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function FollowMe() {
  return (
    <div class="social-container">
      <h3>Follow Me</h3>
      <a href="https://twitter.com/AmonstaAA" className="twitter social">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      
      <a href="https://www.instagram.com/amonstaaa/"
      className="instagram social">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default FollowMe