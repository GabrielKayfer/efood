import { Image, HeaderContainer, LogoImg, Title } from "./styles"

import headerBackground from '../../assets/images/bannerHeader.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
    <Image style={{ backgroundImage: `url(${headerBackground})` }}>
        <HeaderContainer>
            <LogoImg src={logo} alt="logo" />
            <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </HeaderContainer>
    </Image>
)

export default Header