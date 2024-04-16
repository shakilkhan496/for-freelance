import Header from "../header"
import Footer from "../footer/Footer"
import Notation from "./index"
import "../../styles/components/avis/avis.css"


const Avis = () => {
    return(
        <div className="avis-avis">
            <div className="header">
                <Header/>
            </div>
            <div className="home-page-avis">
                <div className="product-title">
                    <h1>
                        <span>|</span> Votre avis
                    </h1>
                </div>
                <Notation/>
                <h1>Avis clients</h1>
                <br/>
                <input type="text" name="" id="" placeholder="texte" />
                <input type="button" value="post" />
                <br/>
                <br/>
                <h2>magali</h2>
                <p>tres conte du service client</p>
                <br/>
                <h2>thierry</h2>
                <p>enbalage de caliter apple</p>
                <br/>
                <br/>
                <h1>...</h1>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Avis

