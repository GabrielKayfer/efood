import CardList from "../../components/CardList"
import type Product from "../../models/Products"
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import HeaderHero from "../../components/HeaderHero";

import marguerita from "../../assets/images/marguerita.png";
import pepperoni from "../../assets/images/peperoni.png";
import quatroqueijos from "../../assets/images/quatroqueijos.png";
import vegetariana from "../../assets/images/vegetariana.png";
import carnespicantes from "../../assets/images/carnespicantes.png";
import frango from "../../assets/images/frago.png";

const productRestPage: Product[] = [
    {
        id: 1,
        title: "Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: marguerita,
    },
    {
        id: 2,
        title: "Pepperoni",
        description: "Clássica e irresistível: fatias generosas de pepperoni levemente crocantes, queijo derretido e um toque defumado que conquista logo na primeira fatia.",
        image: pepperoni,
    },
    {
        id: 3,
        title: "Quatro queijos",
        description: "Cremosa e envolvente: uma mistura harmoniosa de queijos selecionados que se fundem em textura e sabor, perfeita para quem ama intensidade.",
        image: quatroqueijos,
    },
    {
        id: 4,
        title: "Vegetariana",
        description: "Colorida e aromática: legumes frescos salteados, queijo derretido e ervas selecionadas que destacam o frescor dos ingredientes naturais.",
        image: vegetariana,
    },
    {
        id: 5,
        title: "Carnes picantes",
        description: "Intensa e marcante: seleção de carnes suculentas com especiarias ardentes, criando uma experiência quente, ousada e cheia de personalidade.",
        image: carnespicantes,
    },
    {
        id: 6,
        title: "Frango",
        description: "Uma combinação leve e saborosa: tiras de frango bem temperadas, queijo cremoso e um equilíbrio perfeito entre maciez e sabor a cada mordida.",
        image: frango,
    },

]

const RestPage = () => (
    <>
        <HeaderHero />
        <CardList variant="products">
            {productRestPage.map((product) => (
                <Card
                    key={product.id}
                    variant="product"
                    title={product.title}
                    description={product.description}
                    image={product.image}
                />
            ))}
        </CardList>
        <Footer />
    </>
)

export default RestPage