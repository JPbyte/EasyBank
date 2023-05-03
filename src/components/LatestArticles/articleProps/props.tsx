
/* Styles */
import styles from "./styles.module.scss";


interface Props {
    image: string;
    name: string;
    title: string;
    description: string
}

function ArticlesProps({ image, name, title, description }:Props){
    return(
        <div className={styles.articleCard}>
            <img src={image} alt="article-image" />
            <div className={styles.articleText}>
                <span>{name}</span>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ArticlesProps;