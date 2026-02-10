import * as S from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
    <S.FooterContainer>
        <div className="container">
            <S.FooterContent>
                <S.ImgLogo src={logo} alt="Logo do eFood" />

                <nav aria-label="Redes sociais do eFood">
                    <S.Social>
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
                    </S.Social>
                </nav>

                <S.FooterText>
                    A efood é uma plataforma para divulgação de estabelecimentos. A responsabilidade
                    pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
                </S.FooterText>
            </S.FooterContent>
        </div>
    </S.FooterContainer>
)

export default Footer
