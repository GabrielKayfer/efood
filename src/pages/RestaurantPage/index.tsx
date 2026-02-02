import CardList from "../../components/CardList"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import HeaderHero from "../../components/HeaderHero"

import { Modal, ModalContent, ModalInfos, ProductImage, ProductDetails } from "./styles"

import fechar from "../../assets/images/fechar.png"

import { useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { truncate } from "../../utils"

import { useGetRestaurantePorIdQuery } from "../../services/api"
import Cart from "../../components/Cart"

import { add, open } from "../../store/reducers/cart"
import { useDispatch } from "react-redux"

import { formataPreco } from "../../utils"

const RestPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const {data: restaurant} = useGetRestaurantePorIdQuery(id!)

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

  

  const selectedProduct = useMemo(() => {
    if (!restaurant || selectedProductId === null) return null
    return restaurant.cardapio.find((p) => p.id === selectedProductId) ?? null
  }, [restaurant, selectedProductId])

    const addToCart = () => {
    if (!selectedProduct) return
    dispatch(add(selectedProduct))
    closeModal()
    dispatch(open())
  }


  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

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

      <CardList variant="products">{
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

                  <button type="button" onClick={addToCart}>
                    Adicionar ao carrinho {formataPreco(selectedProduct.preco)}
                  </button>
                </ProductDetails>
              </ModalInfos>
            )}
          </ModalContent>

          <div className="overlay" onClick={closeModal} />
        </Modal>
      <Footer />
      <Cart/>
    </>
  )
}

export default RestPage