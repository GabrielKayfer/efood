import * as S from './styles'

type Props = {
    tipo: string
    titulo: string
    capa: string
    cartCount?: number
}

const Hero = ({ tipo, titulo, capa }: Props) => (
    <>
        <S.Image style={{ backgroundImage: `url(${capa})` }}>
            <S.HeroContainer className='container'>
                <S.CategoryTitle>{tipo}</S.CategoryTitle>
                <S.RestauranteTitle>{titulo}</S.RestauranteTitle>
            </S.HeroContainer>
        </S.Image>
    </>
)

export default Hero