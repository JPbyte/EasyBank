/* react-bootstrap */
import { Container } from "react-bootstrap";
import ArticlesProps from "./articleProps/props";

/* Styles */
import styles from "./style.module.scss";

/* Images */
import MoneyImg from "../../assets/images/image-currency.jpg";
import Restaurant from "../../assets/images/image-restaurant.jpg";
import Plane from "../../assets/images/image-plane.jpg";
import Confetti from "../../assets/images/image-confetti.jpg";

function LatestArticle(){
    return(
        <Container fluid className={styles.container}>
            <h1 className={styles.title}>
                Latest Articles
            </h1>
            <div className={styles.articles}>
                <ArticlesProps
                    image={MoneyImg}
                    name="By Claire Robinson"
                    title="Receive money in any currency with no fees"
                    description="The world getting smaller and we're becoming
                    more mobile. So why should you be forced to only receive
                    money in a single"
                />
                <ArticlesProps
                    image={Restaurant}
                    name="By Claire Robinson"
                    title="Receive money in any currency with no fees"
                    description="The world getting smaller and we're becoming
                    more mobile. So why should you be forced to only receive
                    money in a single"
                />
                <ArticlesProps
                    image={Plane}
                    name="By Claire Robinson"
                    title="Receive money in any currency with no fees"
                    description="The world getting smaller and we're becoming
                    more mobile. So why should you be forced to only receive
                    money in a single"
                />
                 <ArticlesProps
                    image={Confetti}
                    name="By Claire Robinson"
                    title="Receive money in any currency with no fees"
                    description="The world getting smaller and we're becoming
                    more mobile. So why should you be forced to only receive
                    money in a single"
                />
            </div>
        </Container>
    );
}

export default LatestArticle;