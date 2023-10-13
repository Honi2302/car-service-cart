import React from 'react'
import playstore from "../assest/google.jpeg";
import iosImg from "../assest/ios.jpeg";

const Footer = () => {
  return (
    <div>
      <div className="aboveFooter">
        <div className="listValues">
          <ul>
            <li style={{ fontSize: "21px" }}>About Us</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Car Service Partners</li>
            <li>Workshop Locator</li>
            <li>Offers</li>
            <li>Reviews</li>
            <li>Directory</li>
          </ul>
        </div>
        <div className="listValues">
          <ul>
            <li style={{ fontSize: "21px" }}>OUR SERVICES</li>
            <li>Scheduled Services</li>
            <li>AC Services</li>
            <li>Cleaning & Detailing</li>
            <li>Lights & Fitments</li>
            <li>Denting Painting</li>
            <li>Insurance Services</li>
            <li>Custom Repair</li>
            <li>Batteries</li>
            <li>Tyres</li>
            <li>Detailing Services</li>
            <li>Windshield & Glass</li>
          </ul>
        </div>
        <div className="listValues">
          <ul>
            <li style={{ fontSize: "21px" }}>LUXURY BRANDS</li>
            <li>Mercedes</li>
            <li>BMW</li>
            <li>Audi</li>
            <li>Volvo</li>
            <li>Mitsubishi</li>
            <li>Jaguar</li>
            <li>Porsche</li>
            <li>Rolls Royce</li>
            <li>Ferrari</li>
            <li>Land Rover</li>
          </ul>
        </div>
        <div className="listValues">
          <ul>
            <li style={{ fontSize: "21px" }}>POPULAR BRANDS</li>
            <li>Maruti Suzuki</li>
            <li>Hyundai</li>
            <li>Honda</li>
            <li>Toyota</li>
            <li>Tata</li>
            <li>Mahindra</li>
            <li>Chevrolet</li>
            <li>Fiat</li>
            <li>Renault</li>
            <li>Kia</li>
            <li>Skoda</li>
            <li>Volkswagen</li>
          </ul>
        </div>
      </div>

      <footer>
        <div class="row">
          <div class="col-3">
            <div class="link-cat" onclick="footerToggle(this)">
              <span class="footer-toggle"></span>
            </div>
            <ul class="footer-cat-links">
              <li>
                <a href="\">
                  <span>F-212, DLF NEW TOWN HEIGHTS</span>
                </a>
              </li>
              <li>
                <a href="\">
                  <span>
                    SECTOR 91, Garhi Harsaru, Gurugram, Haryana, 122505
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <div class="link-cat" onclick="footerToggle(this)">
              <span class="footer-toggle"></span>
            </div>
            <ul class="footer-cat-links">
              <li>
                <a href="\">
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="\">
                  <span>Phone Number</span>
                </a>
              </li>
              <li>
                <a href="\">
                  <span>Working Days</span>
                </a>
              </li>
              <li>
                <a href="\">
                  <span>Working Hours</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <div class="link-cat" onclick="footerToggle(this)">
              <span class="footer-toggle"></span>
            </div>
            <ul class="footer-cat-links">
              <li>
                <a href="\">
                  <span>Info@Carservice.in</span>
                </a>
              </li>
              <li>
                <a href="\">
                  <span>9388893888</span>
                </a>
              </li>
              <li>
                <a href="\">
                  <span>Monday - Sunday</span>
                </a>
              </li>
              <li>
                <a href="\">
                  <span>7:00AM - 9PM(IST)</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-3" id="newsletter">
            <img id="playstore" src={playstore} alt="..." />

            <div class="social-links social-2">
              <a href="\">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="\">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="\">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="\">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="\">
                <i class="fab fa-tumblr"></i>
              </a>
              <a href="\">
                <i class="fab fa-reddit-alien"></i>
              </a>
            </div>

            <div id="address">
              <img id="ios" src={iosImg} alt="..." />
            </div>
          </div>
          <div class="social-links social-1 col-6">
            <a href="\">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="\">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="\">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="\">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="\">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
