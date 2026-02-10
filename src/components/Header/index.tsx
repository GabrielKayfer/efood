import headerBackground from '../../assets/images/bannerHeader.png'
import logo from '../../assets/images/logo.png'
import * as S from "./styles"

const Header = () => (
    <S.Image style={{ backgroundImage: `url(${headerBackground})` }}>
        <S.HeaderContainer>
            <S.LogoImg src={logo} alt="logo" />
            <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
        </S.HeaderContainer>
    </S.Image>
)

export default Header