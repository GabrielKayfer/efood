import headerBackground from "../../assets/images/bannerHeader.png"
import logo from "../../assets/images/logo.png"
import Hero from "../Hero"
import { HeaderBar, Image, TitleTag } from "./styles"

type Props = {
    tipo: string
    titulo: string
    capa: string
    cartCount?: number
}

const HeaderHero = ({ tipo, titulo, capa, cartCount = 0 }: Props) => (
    <Image style={{ backgroundImage: `url(${headerBackground})` }}>
        <div className="container">
        <HeaderBar>
            <a href="/">
            <TitleTag>Restaurantes</TitleTag>
            </a>

            <img src={logo} alt="eFood" />

            <TitleTag>{cartCount} produto(s) no carrinho</TitleTag>
        </HeaderBar>
        </div>

        <Hero tipo={tipo} titulo={titulo} capa={capa}  />
    </Image>
)

export default HeaderHero