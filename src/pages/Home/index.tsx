

import CardList from "../../components/CardList"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Card from "../../components/Card"

import { useGetRestaurantesQuery } from "../../services/api"

const Home = () => {
  const {data: restaurants} = useGetRestaurantesQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <CardList variant="restaurants">
          {restaurants?.map((r) => (
            <Card
              key={r.id}
              id={r.id}
              title={r.titulo}
              description={r.descricao}
              image={r.capa}
              nota={String(r.avaliacao)}
              categories={[r.tipo, ...(r.destacado ? ["destaque"] : [])]}
            />
          ))}
      </CardList>

      <Footer /> 
    </>
  )
}

export default Home