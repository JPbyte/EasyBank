
/* Styles */
import styles from "./styles.module.scss"

interface BankProps{
    image: string;
    name: string;
    description: string;
}

function BankCard({image, name, description}:BankProps){
    return(
        <div className={styles.card}>
            <img src={image} alt="image" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default BankCard