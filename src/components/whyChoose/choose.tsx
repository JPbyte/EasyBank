
/* react-bootstrap */
import { Container } from "react-bootstrap";

/* Component */
import BankCard from "./bankcard/BankCard";

/* Styles */
import styles from "./style.module.scss";

/* Images */
import Online from "../../assets/images/icon-online.svg";
import Budgeting from "../../assets/images/icon-budgeting.svg";
import Fast from "../../assets/images/icon-onboarding.svg";
import iconAPI from "../../assets/images/icon-api.svg";

function Choose(){
    return(
        <Container fluid className={styles.container}>
            <div className={styles.titleDescription}>
                <h2 className={styles.whyChoose}>
                    Why choose Easybank?
                </h2>
                <p className={styles.description}>
                    We leverange Open Banking to turn your bank account into your financial hub.
                    Control your finances like never before.
                </p>
            </div>
            <div className={styles.bankCard}>
                <BankCard
                    image={Online}
                    name="Online Banking"
                    description="Our modem web and mobile applications allow you keep
                    track of your finances wherever you are in the world."
                />
                <BankCard
                    image={Budgeting}
                    name="Simple Budgeting"
                    description="See exactly where your money goes each month. 
                    Receive notifications when you're close to hitting your
                    limits"
                />
                <BankCard
                    image={Fast}
                    name="Fast Onboarding"
                    description="We don't branches. Open your account in minutes online
                    and start taking control of your finances right away."
                />
                <BankCard
                    image={iconAPI}
                    name="Open API"
                    description="Manage your savings, investments, pension, and much
                    more from one account. Tracking your money has never been easier"
                />
            </div>
        </Container>
    );
}

export default Choose;