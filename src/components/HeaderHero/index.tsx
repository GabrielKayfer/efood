import headerBackground from "../../assets/images/bannerHeader.png"
import logo from "../../assets/images/logo.png"
import Hero from "../Hero"
import { HeaderBar, Image, TitleTag } from "./styles"

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux"
import type { RootReducer } from "../../store"

type Props = {
    tipo: string
    titulo: string
    capa: string
}

const HeaderHero = ({ tipo, titulo, capa}: Props) => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)
    
    const openCart = () => {
        dispatch(open())
    }

    return (
    <Image style={{ backgroundImage: `url(${headerBackground})` }}>
        <div className="container">
        <HeaderBar>
            <a href="/">
            <TitleTag>Restaurantes</TitleTag>
            </a>

            <img src={logo} alt="eFood" />

            <TitleTag onClick={openCart} >{items.length} - produto(s) no carrinho</TitleTag>
        </HeaderBar>
        </div>

        <Hero tipo={tipo} titulo={titulo} capa={capa}  />
    </Image>
)
}
export default HeaderHero