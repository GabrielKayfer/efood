import styled from "styled-components";
import { cores } from "../../utils";

export const Image = styled.div`
    width: 100%;
    height: 280px;

    display: block;                          

    padding: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.67);
    }
`

export const CategoryTitle = styled.span`
    font-weight: 100;
    color: ${cores.branca};
    position: relative;
    z-index: 1;
    font-size: 32px;
`

export const RestauranteTitle = styled.h1`
    font-weight: 900;
    color: ${cores.branca};
    position: relative;
    z-index: 1;
    font-size: 32px;
    margin: 0;
`
export const HeroContainer = styled.div`
height: 280px;
display: flex;
gap: 169px;
flex-direction: column;
padding-top:16px;
padding-bottom: 32px;`