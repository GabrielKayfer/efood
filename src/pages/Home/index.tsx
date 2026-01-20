import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import type Restaurant from "../../models/Restaurant";

import hioki from "../../assets/images/sushi.png";
import trattoria from "../../assets/images/macarrao.png";
import mariachi from "../../assets/images/mexicana.png";
import burger from "../../assets/images/burguer.png";
import mineiro from "../../assets/images/brasileira.png";
import cafe from "../../assets/images/cafe.png";
import Card from "../../components/Card";

const restaurantsProduct: Restaurant[] = [
    {
        id: 1,
        title: "Hioki Sushi",
        nota: "4.9",
        description: "O Hioki Sushi leva até você uma experiência japonesa completa. Sushis preparados na hora, sashimis frescos e pratos quentes que equilibram sabor e delicadeza. Tudo embalado com cuidado para chegar perfeito à sua mesa.",
        image: hioki,
        categories: ["Destaque da semana", "Japonesa"],
    },
    {
        id: 2,
        title: "La Trattoria",
        nota: "4.7",
        description: "Receitas tradicionais, massas artesanais e molhos encorpados fazem da La Trattoria a escolha certa para quem ama a cozinha italiana. Ideal para um almoço especial ou um jantar aconchegante em casa.",
        image: trattoria,
        categories: ["Italiana"],
    },
    {
        id: 3,
        title: "El Mariachi",
        nota: "4.6",
        description: "Cores, aromas e temperos marcantes definem a cozinha do El Mariachi. Tacos, burritos e pratos típicos que transformam qualquer refeição em um verdadeiro passeio pelo México.",
        image: mariachi,
        categories: ["Mexicana"],
    },
    {
        id: 4,
        title: "Burger House",
        nota: "4.5",
        description: "Hambúrgueres artesanais suculentos, acompanhamentos crocantes e combinações pensadas para matar a fome de verdade. Perfeito para quem busca conforto e sabor sem complicação.",
        image: burger,
        categories: ["Hambúrguer"],
    },
    {
        id: 5,
        title: "Cantinho Mineiro",
        nota: "4.8",
        description: "Comida caseira, tempero afetivo e receitas que lembram almoço em família. O Cantinho Mineiro traz o melhor da culinária brasileira com aquele gostinho de casa.",
        image: mineiro,
        categories: ["Brasileira"],
    },
    {
        id: 6,
        title: "Le Petit Café",
        nota: "4.4",
        description: "Cafés especiais, doces delicados e um cardápio pensado para pausas tranquilas. Ideal para acompanhar o trabalho, a leitura ou simplesmente aproveitar um bom momento.",
        image: cafe,
        categories: ["Café"],
    }


]

const Home = () => (
    <>
        <Header />
        <CardList variant="restaurants">
            {restaurantsProduct.map((restaurant) => (
                <Card
                    key={restaurant.id}
                    id={restaurant.id}
                    title={restaurant.title}
                    nota={restaurant.nota}
                    description={restaurant.description}
                    image={restaurant.image}
                    categories={restaurant.categories}
                />
            ))}
        </CardList>
        <Footer />
    </>
)

export default Home