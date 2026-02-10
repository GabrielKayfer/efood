import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


import { open } from '../../store/reducers/cart'
import type { RootReducer } from "../../store"

import logo from "../../assets/images/logo.png"
import Hero from "../Hero"
import headerBackground from "../../assets/images/bannerHeader.png"
import * as S from "./styles"

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
    <S.Image style={{ backgroundImage: `url(${headerBackground})` }}>
        <div className="container">
        <S.HeaderBar>
            <Link title="Clique aqui para retornar à página inicial"  to="/">
            <S.TitleTag>Restaurantes</S.TitleTag>
            </Link>

            <img src={logo} alt="eFood" />

            <S.TitleTag onClick={openCart} >{items.length} - produto(s) no carrinho</S.TitleTag>
        </S.HeaderBar>
        </div>

        <Hero tipo={tipo} titulo={titulo} capa={capa}  />
    </S.Image>
)
}
export default HeaderHero