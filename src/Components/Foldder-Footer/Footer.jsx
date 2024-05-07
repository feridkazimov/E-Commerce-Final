import React from "react";
import styles from "./footer.module.css";
import "../Foldder-Footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Qrimg from "../Foldder-Footer/Footer-Imge/Qrcode 1.png";
import googleimg from "../Foldder-Footer/Footer-Imge/GooglePlay.png";
import AppStore from "../Foldder-Footer/Footer-Imge/AppStore.png";
function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footerBackground}>
          <div className="container">
            <div className={styles.allBoxFooter}>
              <div className={styles.BoxFooter}>
                <h2 className={styles.h2}>Exclusive</h2>
                <h3>
                  <a className={styles.a} href="#">
                    Subscribe
                  </a>
                </h3>
                <p>
                  <a className={styles.a} href="#">
                    Get 10% off your first order
                  </a>
                </p>
                <div className={styles.inputDivFooter}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className={styles.inputFooter}
                  />
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className={styles.faPaperPlane}
                  />
                </div>
              </div>
              <div className={styles.BoxFooter}>
                <h3 className={styles.h3}>Support</h3>
                <p>
                  <a className={styles.a} href="#">
                    111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
                  </a>
                </p>
                <p>
                  <a className={styles.a} href="#">
                    exclusive@gmail.com
                  </a>
                </p>
                <a className={styles.a} href="#">
                  +88015-88888-9999
                </a>
              </div>
              <div className={styles.BoxFooter}>
                <h3 className={styles.h3_third}>Account</h3>
                <p>
                  <a className={styles.a_third} href="#">
                    My Account
                  </a>
                </p>
                <p>
                  <a className={styles.a_third} href="#">
                    Login / Register
                  </a>
                </p>
                <p>
                  <a className={styles.a_third} href="#">
                    Cart
                  </a>
                </p>
                <p>
                  <a className={styles.a_third} href="#">
                    Wishlist
                  </a>
                </p>
                <p>
                  <a className={styles.a_third} href="#">
                    Shop
                  </a>
                </p>
              </div>
              <div className={styles.BoxFooter}>
                <h3 className={styles.h3}>Quick Link</h3>
                <p>
                  <a className={styles.a} href="#">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a className={styles.a} href="#">
                    Terms Of Use
                  </a>
                </p>
                <p>
                  <a className={styles.a} href="#">
                    FAQ
                  </a>
                </p>
                <p>
                  <a className={styles.a} href="#">
                    Contact
                  </a>
                </p>
              </div>
              <div className={styles.BoxFooter}>
                <h3 className={styles.h3}>Download App</h3>
                <p>
                  <a className={styles.Doownload_a} href="#">
                    Save $3 with App New User Only
                  </a>
                </p>
                <div className={styles.allImgFooter}>
                  <img
                    src={Qrimg}
                    alt="burda sekil var"
                    className={styles.QrImg}
                  />
                  <div className={styles.googleAppImg}>
                    <img src={googleimg} alt="" className={styles.GooglApp} />
                    <img src={AppStore} alt="" className={styles.GooglApp} />
                  </div>
                </div>
                <div className={styles.allIconFooter}>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className={styles.icons}
                  />
                  <FontAwesomeIcon icon={faTwitter} className={styles.icons} />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.icons}
                  />
                  <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
                </div>
              </div>
            </div>
          </div>
          <hr className={styles.HrFooter} />
          <div className={styles.logoFooter}>
            <span className={styles.logospan}>C</span>
            <p className={styles.logo_P}>
              Copyright Rimel 2022. All right reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
