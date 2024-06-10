import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-6 col-lg-3 about-footer">
              <h3>TICK TICK</h3>
              <ul>
                <li>
                  <a href="tel:(010) 1234 4321">
                    <i className="fa fa-phone fa-flip-horizontal"></i>(+977) 9823423512
                  </a>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  Sunsari Nepal
                  <br />BirathChwok
                  <br />LIC 3201
                </li>
              </ul>
              <a href="/" className="btn red-btn">Go To Top</a>
            </div>
            <div className="col-md-6 col-lg-2 page-more-info">
              <div className="footer-title">
                <h4>Page links</h4>
              </div>
              <ul>
                <li><a href="#">Home</a></li>
            
              </ul>
            </div>

            <div className="col-md-6 col-lg-2 page-more-info">
              <div className="footer-title">
                <h4>More Info</h4>
              </div>
              <ul>
                <li><a href="#">Faster</a></li>
                <li><a href="#">Reliable</a></li>
                <li><a href="#">Secure </a></li>
             
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 open-hours">
              <div className="footer-title">
                <h4>Server status</h4>
                <ul className="footer-social">
                  <li><a href="/" target="_blank"><i className="fa fa-facebook-f"></i></a></li>
                  <li><a href="/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="/" target="_blank"><i className="fa fa-linkedin-in"></i></a></li>
                </ul>
              </div>
              <table className="table" style={{ color: "#fff" }}>
                <tbody>
                  <tr>
                    <td><i className="fa fa-clock-o"></i>Active</td>
                    <td>Every Day</td>
                  </tr>
              
                </tbody>
              </table>
              <hr />
              
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="row">
            <div className="col-sm-4">
              <a href="/">Privacy policy</a>
            </div>
            <div className="col-sm-8">
              <p>TODO-LIST TICK TICK @ 2019 All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
