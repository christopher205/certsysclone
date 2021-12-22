import BoxImages from "../BoxImages/BoxImages"
import img1 from "../../images/img-1.png"
import img2 from "../../images/img-2.png"
import img3 from "../../images/img-3.png"
import img4 from "../../images/img-4.png"
import img5 from "../../images/img-5.png"
import img6 from "../../images/img-6.png"
import img7 from "../../images/img-7.png"
import img8 from "../../images/img-8.png"
import img9 from "../../images/img-9.png"
import img10 from "../../images/img-10.png"
import img11 from "../../images/img-11.png"
import img12 from "../../images/img-12.png"
import img13 from "../../images/img-13.png"
import img14 from "../../images/img-14.png"
import img15 from "../../images/img-15.png"
import img16 from "../../images/img-16.png"
import './SectionCompanies.css'

function SectionCompanies() {
    return (
        <>
        <h3 className="h3-content"> Empresas que revolucionam negócios
             através dos <br/> nossos serviços </h3>
        <div className="box-companies">
            <BoxImages image={img1} />
            <BoxImages image={img2} />
            <BoxImages image={img3} />
            <BoxImages image={img4} />
            <BoxImages image={img5} />
            <BoxImages image={img6} />
            <BoxImages image={img7} />
            <BoxImages image={img8} />
            <BoxImages image={img9} />
            <BoxImages image={img10} />
            <BoxImages image={img11} />
            <BoxImages image={img12} />
            <BoxImages image={img13} />
            <BoxImages image={img14} />
            <BoxImages image={img15} />
            <BoxImages image={img16} />
        </div>
        </>
    )
}

export default SectionCompanies