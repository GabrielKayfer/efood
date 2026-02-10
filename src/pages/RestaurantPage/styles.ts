import styled from "styled-components";
import { colors } from "../../utils";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;  
    z-index: 1;   
    display: none;
    justify-content: center;
    align-items: center;

    &.visible {
    display: flex;}
    
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.73);
    }`

export const ModalContent = styled.div`
    background-color: ${colors.pink};
    padding: 8px;
    max-width: 1024px;
    height: 344px;
    position: relative;
    z-index: 1;
    color: ${colors.white};
    header {
        display: flex;
        justify-content: flex-end;

            img{
        cursor: pointer;
        max-width: 100%;
}
}
`
export const ModalInfos = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    padding: 8px 24px 24px;
    `

export const ProductImage = styled.section`
    img {
        width: 280px;
        height: 280px;
}
    `

export const ProductDetails = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    h4 {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
}
        
p {
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 16px;
}
    
button {
    margin-top: 20px;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 14px;
    align-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    border: none;
    background-color: ${colors.pinkishWhite};
    color: ${colors.pink};}`