import { Link } from "react-router-dom"

import Tag from "../Tag"
import {
    RestCard,
    Titulo,
    Descricao,
    StarIcon,
    ContainerTitulo,
    ContainerNota,
    ConteudoCard,
    Categorys,
    CardImage,
    ButtonWrapper
} from "./styles"

import estrela from "../../assets/images/estrela.png"

type Props = {
    variant?: "restaurant" | "product"
    title: string
    description: string
    image: string
    id?: number
    nota?: string
    categories?: string[]
}

const Card = ({
    variant = "restaurant",
    title,
    categories,
    description,
    image,
    nota,
    id,
}: Props) => {
    const isRestaurant = variant === "restaurant"

    return (
        <RestCard $variant={variant}>
            <CardImage
                $variant={variant}
                src={image}
                alt={isRestaurant ? `Imagem do restaurante ${title}` : `Imagem do produto ${title}`}
            />

            {isRestaurant && categories && categories.length > 0 && (
                <Categorys>
                    {categories.map((category) => (
                        <li key={category}>
                            <Tag>{category}</Tag>
                        </li>
                    ))}
                </Categorys>
            )}

            <ConteudoCard $variant={variant}>
                <ContainerTitulo $variant={variant}>
                    <Titulo $variant={variant}>{title}</Titulo>

                    {isRestaurant && nota && (
                        <ContainerNota>
                            <Titulo $variant={variant}>{nota}</Titulo>
                            <StarIcon src={estrela} alt="Avaliação" />
                        </ContainerNota>
                    )}
                </ContainerTitulo>

                <Descricao $variant={variant}>{description}</Descricao>

                <ButtonWrapper $variant={variant}>
                    {isRestaurant && id ? (
                        <Tag as={Link} to={`/restaurantes/${id}`}>
                            Saber mais
                        </Tag>
                    ) : (
                        <Tag as="button" type="button">
                            Adicionar ao carrinho
                        </Tag>
                    )}
                </ButtonWrapper>
            </ConteudoCard>
        </RestCard>
    )
}

export default Card
