import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEFVCRAPFpbUA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=c2Yemhho1AcnMNhyFasT5SZEUuyyfxiSXnuRJebu7Pg" alt="Diego Fernandes"/>
                    <div>
                        <strong>Diego Fernandes</strong>
                        <span>ReactJS</span>
                    </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de desenvolvimento web e mobile.
            <br/><br/>
                Apaixonado por educação e por mudar a vida das pessoas através da programação. 
                Mais de 200.000 pessoas já passaram por um dos meus treinamentos.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                        
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;