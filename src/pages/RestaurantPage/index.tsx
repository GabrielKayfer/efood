import CardList from "../../components/CardList"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import HeaderHero from "../../components/HeaderHero"

import { Modal, ModalContent, ModalInfos, ProductImage, ProductDetails } from "./styles"

import fechar from "../../assets/images/fechar.png"

import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import type { ApiRestaurant } from "../../models/ApiRestaurant"
import { truncate } from "../../utils"

const RestPage = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<ApiRestaurant | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const [isModalVisivel, setIsModalVisivel] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null)

  const openModal = (productId: number) => {
    setSelectedProductId(productId)
    setIsModalVisivel(true)
  }

  const closeModal = () => {
    setIsModalVisivel(false)
    setSelectedProductId(null)
  }

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError("")

        const res = await fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
        if (!res.ok) throw new Error("Falha ao carregar restaurante")

        const data: ApiRestaurant[] = await res.json()
        const found = data.find((r) => r.id === Number(id)) ?? null

        if (!found) throw new Error("Restaurante não encontrado")
        setRestaurant(found)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Erro desconhecido")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [id])

  const selectedProduct = useMemo(() => {
    if (!restaurant || selectedProductId === null) return null
    return restaurant.cardapio.find((p) => p.id === selectedProductId) ?? null
  }, [restaurant, selectedProductId])

  return (
    <>
      {restaurant ? (
  <HeaderHero
    tipo={restaurant.tipo}
    titulo={restaurant.titulo}
    capa={restaurant.capa}
  />
  ) : (
  <HeaderHero tipo="..." titulo="Carregando..." capa="..." />
      )}

      <CardList variant="products">
        {loading && <p>Carregando...</p>}
        {!loading && error && <p>{error}</p>}

        {!loading &&
          !error &&
          restaurant?.cardapio.map((product) => (
            <li key={product.id}>
              <Card
                variant="product"
                title={product.nome}
                description={truncate(product.descricao, 150)}
                image={product.foto}
                onActionClick={() => openModal(product.id)}
              />
            </li>
          ))}
      </CardList>
      <Modal className={isModalVisivel ? "visivel" : ""}>
          <ModalContent className="container">
            <header>
                <img src={fechar}  onClick={closeModal} aria-label="Fechar modal" alt="Fechar" />
            </header>

            {selectedProduct && (
              <ModalInfos>
                <ProductImage>
                  <img src={selectedProduct.foto} alt={selectedProduct.nome} />
                </ProductImage>

                <ProductDetails>
                  <h4>{selectedProduct.nome}</h4>
                  <p>
                    {selectedProduct.descricao}
                    <br />
                    <br />
                    Serve: {selectedProduct.porcao}
                  </p>

                  <button type="button">
                    Adicionar ao carrinho R$ {selectedProduct.preco.toFixed(2).replace(".", ",")}
                  </button>
                </ProductDetails>
              </ModalInfos>
            )}
          </ModalContent>

          <div className="overlay" onClick={closeModal} />
        </Modal>
      <Footer />
    </>
  )
}

export default RestPage