

import { Image, CategoryTitle, RestauranteTitle, HeroContainer } from './styles'

type Props = {
    tipo: string
    titulo: string
    capa: string
    cartCount?: number
}

const Hero = ({ tipo, titulo, capa }: Props) => (
    <>
        <Image style={{ backgroundImage: `url(${capa})` }}>
            <HeroContainer className='container'>
                <CategoryTitle>{tipo}</CategoryTitle>
                <RestauranteTitle>{titulo}</RestauranteTitle>
            </HeroContainer>
        </Image>
    </>
)

export default Hero