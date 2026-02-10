import { Link } from "react-router-dom"

import Tag from "../Tag"
import { truncate } from "../../utils"

import star from "../../assets/images/estrela.png"
import * as S from "./styles"

type Props = {
    variant?: "restaurant" | "product"
    title: string
    description: string
    image: string
    id?: number
    rating?: string
    categories?: string[]
    onActionClick?: () => void
}

const Card = ({
    variant = "restaurant",
    title,
    categories,
    description,
    image,
    rating,
    id,
    onActionClick
}: Props) => {
    const isRestaurant = variant === "restaurant"

    return (
        <S.RestaurantCard $variant={variant}>
            <S.CardImage
                $variant={variant}
                src={image}
                alt={isRestaurant ? `Imagem do restaurante ${title}` : `Imagem do produto ${title}`}
            />

            {isRestaurant && categories && categories.length > 0 && (
                <S.Categories>
                    {categories.map((category) => (
                        <li key={category}>
                            <Tag>{category}</Tag>
                        </li>
                    ))}
                </S.Categories>
            )}

            <S.CardContent $variant={variant}>
                <S.TitleContainer $variant={variant}>
                    <S.Title $variant={variant}>{title}</S.Title>

                    {isRestaurant && rating && (
                        <S.RatingContainer>
                            <S.Title $variant={variant}>{rating}</S.Title>
                            <S.StarIcon src={star} alt="Avaliação" />
                        </S.RatingContainer>
                    )}
                </S.TitleContainer>

                <S.Description $variant={variant}>{truncate(description, 140)}</S.Description>

                <S.ButtonWrapper $variant={variant}>
                    {isRestaurant && id ? (
                        <Tag as={Link} to={`/restaurantes/${id}`}>
                            Saber mais
                        </Tag>
                    ) : (
                        <Tag
                        as="button"
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation()
                            onActionClick?.()
                        }}
                        >
                        Adicionar ao carrinho
                        </Tag>
                    )}
                </S.ButtonWrapper>
            </S.CardContent>
        </S.RestaurantCard>
    )
}

export default Card
