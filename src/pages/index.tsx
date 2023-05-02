import Header from "../components/header/header";
import LatestArticle from "../components/LatestArticles/Latest";
import Presentation from "../components/presentation/presentation";
import Choose from "../components/whyChoose/choose";


function Home(){
    return(
        <>
            <Header/>
            <Presentation/>
            <Choose/>
            <LatestArticle/>
        </>
    );
}

export default Home;