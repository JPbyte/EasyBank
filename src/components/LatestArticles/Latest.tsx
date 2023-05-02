/* react-bootstrap */
import { Container } from "react-bootstrap";

/* Styles */
import styles from "./style.module.scss"

function LatestArticle(){
    return(
        <Container fluid className={styles.container}>
            <h1 className={styles.title}>
                Latest Articles
            </h1>
            <div className={styles.articles}>
                
            </div>
        </Container>
    );
}

export default LatestArticle;