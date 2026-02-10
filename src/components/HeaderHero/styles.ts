import styled from "styled-components";
import { colors } from "../../utils";

export const HeaderBar = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 60px;

    a {
    text-decoration: none;}
`

export const Image = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    background-size: cover;
    background-position: center;
`
export const TitleTag = styled.span`
    font-size: 18px;
    font-weight: 900;
    color: ${colors.pink}`

