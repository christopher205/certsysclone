import React from 'react';
import './Section.css';
import '../../responsividade.css'

function Section ({children}) {
    return (

        <section className="section">
           <div className="content-section">
                <div className="box1">
                    <p>
                    Somos o seu parceiro de Transformação Digital
                    </p>
                </div>
                <div className="box2">
                    <p>
                    Com mais de 14 anos de história como trust advisor,
                    apoiamos empresas em seus mais diversos e complexos
                    desafios diários por meio de soluções digitais
                    completas e escaláveis alinhadas as principais
                    tendências e necessidades do mercado.
                    </p>
                </div>
                <div className="box3">
                    <p>
                    Construímos jornadas consistentes e sustentáveis de
                    modernização tecnológica, colaborando com a
                    Transformação Digital e gerando novas oportunidades
                    de crescimento para os nossos clientes.
                    </p>
                </div>

            </div>
        </section>
        
    )

}
export default Section;