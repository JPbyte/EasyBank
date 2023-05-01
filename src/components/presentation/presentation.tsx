

/* React-bootstrap */
import { Container } from "react-bootstrap";

/* Styles */
import styles from "./style.module.scss";

/* Mockup */
import Mock from "../../assets/images/image-mockups.png";

function Presentation(){
    return(
        <Container fluid className={styles.container}>
            <section className={styles.text}>
                <h1 className={styles.title}>
                    Next generation digital banking
                </h1>
                <p className={styles.description}>
                    Take your financial life online. Your Easybank account will be a one-stop shop
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <button className={styles.btn}>
                    Request Invite
                </button>
            </section>
            <section className={styles.mockup}>
                <img src={Mock} alt="Mockups"/>
            </section>
        </Container>
    );
}

export default Presentation;