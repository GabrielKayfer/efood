import { useEffect, useState } from "react"

import CardList from "../../components/CardList"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Card from "../../components/Card"

import type { ApiRestaurant } from "../../models/ApiRestaurant"

const Home = () => {
  const [restaurants, setRestaurants] = useState<ApiRestaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError("")

        const res = await fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
        if (!res.ok) throw new Error("Falha ao carregar restaurantes")

        const data: ApiRestaurant[] = await res.json()
        setRestaurants(data)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Erro desconhecido")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return (
    <>
      <Header />

      <CardList variant="restaurants">
        {loading && <p>Carregando...</p>}
        {!loading && error && <p>{error}</p>}

        {!loading &&
          !error &&
          restaurants.map((r) => (
            <Card
              key={r.id}
              id={r.id}
              title={r.titulo}
              description={r.descricao}
              image={r.capa}
              nota={String(r.avaliacao)}
              categories={[r.tipo, ...(r.destacado ? ["Destaque"] : [])]}
            />
          ))}
      </CardList>

      <Footer />
    </>
  )
}

export default Home