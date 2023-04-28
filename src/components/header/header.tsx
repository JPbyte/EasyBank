/* Logo for component */
import Logo from "../../assets/images/logo.svg";

/* Styles for component */
import styles from "./style.module.scss"

/* react-bootstrap */
import { Container, Navbar, Nav } from "react-bootstrap"
function HeaderComponent(){
    return(
        <Navbar collapseOnSelect expand="lg" className={styles.header}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className={styles.navBarCollapse}>
                    <Nav className={styles.anchor}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#careers">Careers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button>
                    Reject
                </button>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;