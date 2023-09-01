import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <span className="copyright">
                &copy; Creado por AlucinaMKT 2023
              </span>
            </div>
            <div className="col-12 col-sm-6">
              <div className="socialFooter align-items-end">
                <div className="containerPreheader social-icons">
                  <a
                    href="https://www.facebook.com/profile.php?id=100092566864147&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/innovacall-contact-center/mycompany/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://instagram.com/innovacallcc?utm_source=qr&igshid=NGExMmI2YTkyZg=="
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
