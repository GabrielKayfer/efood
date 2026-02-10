import styled from "styled-components"
import { colors } from "../../utils"
import { TagContainer } from "../Tag/styles"

type Variant = "restaurant" | "product"

export const RestaurantCard = styled.article<{ $variant: Variant }>`
  background-color: ${colors.white};
  border: 1px solid ${colors.pink};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${({ $variant }) =>
    $variant === "product"
      ? `
        background-color: ${colors.pink};
        color: ${colors.pinkishWhite};
        padding: 8px;
        border-radius: 8px;
        
      `
      : ""}

  ${({ $variant }) =>
    $variant === "product"
      ? `
        ${TagContainer} {
          background-color: ${colors.pinkishWhite};
          color: ${colors.pink};
          font-weight: 600;
          border-radius: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
      `
      : ""}
`


export const CardImage = styled.img<{ $variant: Variant }>`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;

  ${({ $variant }) =>
    $variant === "product"
      ? `
        width: 100%;
        height: 167px;
        border-radius: 8px;
      `
      : ""}
`

export const Categories = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  gap: 8px;

  list-style: none;
  padding: 0;
  margin: 0;
`

export const CardContent = styled.div<{ $variant: Variant }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px;
  height: 100%;

    ${({ $variant }) =>
    $variant === "product"
      ? `
        padding: 0;
      `
      : ""}
`

export const TitleContainer = styled.div<{ $variant: Variant }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  ${({ $variant }) =>
    $variant === "product"
      ? `
        margin-bottom: 0;
        margin-top: 8px;
      `
      : ""}
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Title = styled.h2<{ $variant: Variant }>`
  font-weight: 700;
  font-size: 18px;
  margin: 0;

    ${({ $variant }) =>
    $variant === "product"
      ? `
        font-weight: 900;
        font-size: 16px;
      `
      : ""}
`

export const Description = styled.p<{ $variant: Variant }>`
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 16px;

  ${({ $variant }) =>
    $variant === "product"
      ? `
        margin-bottom: 8px;
        margin-top: 8px;
      `
      : ""}
`

export const StarIcon = styled.img`
  width: 21px;
  height: 20px;
  display: block;
`

export const ButtonWrapper = styled.div<{ $variant: Variant }>`
  margin-top: auto;

  ${({ $variant }) =>
    $variant === "product"
      ? `
        width: 100%;
        display: flex;
      `
      : ""}
`
