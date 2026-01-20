import heroImage from '../../assets/images/hero.png'
import { Image, CategoryTitle, RestauranteTitle, HeroContainer } from './styles'

const Hero = () => (
    <>
        <Image style={{ backgroundImage: `url(${heroImage})` }}>
            <HeroContainer className='container'>
                <CategoryTitle>Italiana</CategoryTitle>
                <RestauranteTitle>La Dolce Vita Trattoria</RestauranteTitle>
            </HeroContainer>
        </Image>
    </>
)

export default Hero