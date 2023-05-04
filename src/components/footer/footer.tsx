

/* Styles */
import styles from "./style.module.scss";

/* Images */
import Logo from "../../assets/images/logo.svg";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import YoutubeIcon from "../../assets/images/icon-youtube.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";
import PinterestIcon from "../../assets/images/icon-pinterest.svg";
import InstagramIcon from "../../assets/images/icon-instagram.svg";

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.social}>
                <img src={Logo} alt="logo" />
                <div className={styles.socialMidia}>
                    <a href="#">
                        <img src={FacebookIcon} alt="Facebook-icon" />
                    </a>
                    <a href="#">
                        <img src={YoutubeIcon} alt="Youtube-icon" />
                    </a>
                    <a href="#">
                        <img src={TwitterIcon} alt="Twitter-icon" />
                    </a>
                    <a href="#">
                        <img src={PinterestIcon} alt="Pintrest-icon" />
                    </a>
                    <a href="#">
                        <img src={InstagramIcon} alt="Instagram-icon" />
                    </a>
                </div>
            </div>
            <div className={styles.nav}>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
            </div>
            <div className={styles.nav}>
                <a href="#">Careers</a>
                <a href="#">Support</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className={styles.copy}>
                <button className={styles.btn}>
                    Request Invite
                </button>
                <span>©Easybank. All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;