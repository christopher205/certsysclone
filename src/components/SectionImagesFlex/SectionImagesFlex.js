import image1 from "../../images/bg-image1.png";
import image2 from "../../images/bg-image2.png"
import image3 from "../../images/bg-image3.png"
import image4 from "../../images/bg-image4.png"
import image5 from "../../images/bg-image5.png"
import image6 from "../../images/bg-image6.png"

import BoxImages from '../BoxImages/BoxImages';
import './ImagesFlex.css'

function SectionImagesFlex() {
    return (
        <>
        <div className="box-paragraph">
            <h2> Insights </h2>
            <p>De temas técnicos a tendências de mercado,
               compartilhamos as <br/>
               nossas experiências e fomentamos o conhecimento
               sobre o universo da tecnologia.</p>
        </div>
        <div className="box-images-flex">
            
            <BoxImages image={image1}
            text="DIGITAL PRODUCTS SQUADS" />
            <BoxImages image={image2}
            text="HYPERAUTOMATION & CX" />
            <BoxImages image={image3}
            text="CLOUD, DEVOPS & PLATFORM" />
            <BoxImages image={image4}
            text="DATA & ANALYTICS" />
            <BoxImages image={image5}
            text="DATA PROTECTION & COMPLIANCE" />
            <BoxImages image={image6}
            text="SAIBA MAIS" />
        </div>
        </>
    )
}

export default SectionImagesFlex;