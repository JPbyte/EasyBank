/* Logo for component */
import Logo from "../../assets/images/logo.svg";

/* Styles for component */
import styles from "./style.module.scss"

/* react-bootstrap */
import { Container, Navbar, Nav } from "react-bootstrap"

function Header(){
    
    return(
        <Navbar collapseOnSelect expand="lg" className={styles.navBar}>
            <Container className={styles.container}>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={styles.navLink}>
                    <Nav className="me-auto" id={styles.navContent}>
                        <Nav.Link className={styles.anchor} href="#home">
                            Home
                        </Nav.Link>
                        <Nav.Link className={styles.anchor} href="#about">
                            About
                        </Nav.Link>
                        <Nav.Link className={styles.anchor} href="#contact">
                            Contact
                        </Nav.Link>
                        <Nav.Link className={styles.anchor} href="#blog">
                            Blog
                        </Nav.Link>
                        <Nav.Link className={styles.anchor} href="careers">
                            Careers
                        </Nav.Link>
                    </Nav>
                    <Nav className={styles.divBtn}>
                        <button className={styles.btn}>
                            Request Invite
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;