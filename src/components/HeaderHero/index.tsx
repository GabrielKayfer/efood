import headerBackground from '../../assets/images/bannerHeader.png'
import logo from '../../assets/images/logo.png'
import Hero from '../Hero'
import { HeaderBar, Image, TitleTag } from "./styles"

const HeaderHero = () => (
    <>
        <Image style={{ backgroundImage: `url(${headerBackground})` }}>
            <div className='container'>
                <HeaderBar>
                    <a href="/">
                        <TitleTag>Restaurantes</TitleTag>
                    </a>
                    <img src={logo} alt="eFood" />
                    <TitleTag>0 produto(s) no carrinho</TitleTag>
                </HeaderBar>
            </div>
            <Hero />
        </Image>
    </>
)

export default HeaderHero