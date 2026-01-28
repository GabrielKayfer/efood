import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { restaurantsProduct } from "../../data/restaurants";


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