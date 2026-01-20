import { Social, ImgLogo, FooterContainer, FooterContent, FooterText } from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
    <FooterContainer>
        <div className="container">
            <FooterContent>
                <ImgLogo src={logo} alt="Logo do eFood" />

                <nav aria-label="Redes sociais do eFood">
                    <Social>
                        <li>
                            <a href="#">
                                <img src={instagram} alt="Instagram do eFood" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={facebook} alt="Facebook do eFood" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={twitter} alt="Twitter do eFood" />
                            </a>
                        </li>
                    </Social>
                </nav>

                <FooterText>
                    A efood é uma plataforma para divulgação de estabelecimentos. A responsabilidade
                    pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
                </FooterText>
            </FooterContent>
        </div>
    </FooterContainer>
)

export default Footer
