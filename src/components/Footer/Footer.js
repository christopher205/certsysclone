import './Footer.css'
import footerlogo from '../../images/certsys-logo.png'
import FooterLinks from '../FooterLinks/FooterLinks'

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-box">
                    <a href="/#" className="logo-footer">
                        <img src={footerlogo} alt="Logo Certsys" />
                    </a>
                    <p className="p-content" >Este é um clone da Homepage da empresa
                        Certsys. Este Projeto foi construído com ReactJS
                        e possui objetivos acadêmicos e de aprendizado.
                        Todos os direitos estão reservados a Certsys.  
                    </p>
                </div>
                <div className="footer-box">
                    <p className="footer-p"> Empresa </p>
                    <FooterLinks text="Home" />
                    <FooterLinks text="Quem Somos" />
                    <FooterLinks text="O Que Fazemos" />
                    <FooterLinks text="Insights" />
                    <FooterLinks text="Carreiras" />
                    <FooterLinks text="Contato" />

                </div>
                <div className="footer-box">
                    <p className="footer-p"> Políticas </p>
                    <FooterLinks text="Política de Segurança" />
                    <FooterLinks text="Política de Privacidade e Uso de Cookies" />
                    <FooterLinks text="Política de Qualidade" />
                    <FooterLinks text="Manifesto da Segurança da Informação" />

                </div>
                <div className="footer-box">
                    <p className="footer-p"> Contato </p>
                    <FooterLinks text="+55 (11) 5084-2984" />
                    <FooterLinks text="atendimento@certsys.com.br" />
                    <FooterLinks text="Rua Dr. Rafael de Barros, 209 13andar
                    - São Paulo - SP" />

                </div>
            </div>
        
        </footer>
    )
}

export default Footer