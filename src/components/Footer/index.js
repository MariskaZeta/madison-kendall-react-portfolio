import React from "react";

function Footer() {
  return (
    <footer className="footer">
        <div>
             <a
                 href="https://github.com/MariskaZeta"
                 target="_blank"
                 rel="noopener noreferrer"
             >
                 <img
                     src={require("../../assets/logos/github-logo.png")}
                     alt="Github logo"
                     className="logo"
                 ></img>
             </a>
         </div>
         <div>
              <a
                  href="www.linkedin.com/in/madisonzetakendall"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img
                      src={require("../../assets/logos/linkedin-logo.png")}
                      alt="LinkedIn logo"
                      className="logo"
                  ></img>
              </a>
        </div>
        <div>
            <a
                href="https://www.instagram.com/lilyzetakovic/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={require("../../assets/logos/instagram-logo.jpg")}
                    alt="Instagram logo"
                    className="logo"
                ></img>
            </a>
        </div>
    </footer>
  );
}

export default Footer;
