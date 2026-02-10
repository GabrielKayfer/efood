import styled from "styled-components";
import { colors } from "../../utils";

import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`

export const CartContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: none;
justify-content: flex-end;
z-index: 1;

&.is-open {
    display: flex;
}
`
export const Sidebar = styled.aside`
background-color: ${colors.pink};
z-index: 1;
padding: 16px 8px 0 8px;
max-width: 360px;
width: 100%; 

> button {
    max-width: 100%;
    width: 100%;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    border: none;
    background-color: ${colors.pinkishWhite};
    color: ${colors.pink};}

ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}
`

export const Prices = styled.p`
display: flex;
justify-content: space-between;
font-weight: bold;
font-size: 14px;
color: ${colors.pinkishWhite};
margin-top: 40px;
margin-bottom: 16px;

h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.pinkishWhite};
  padding: 8px;
  margin-top: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
    color: ${colors.pink};
    font-size: 18px;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 14px;
    margin-bottom: 28px;
    margin-top: 16px;
  }

  > button {
    position: absolute;
    bottom: 8px;
    right: 8px;

    width: 16px;
    height: 16px;
    background-image: url(${lixeira});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${colors.pinkishWhite};

    .buttomMargin {
      margin-top: 20px;
    }

    > button {
    max-width: 100%;
    width: 100%;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    border: none;
    background-color: ${colors.pinkishWhite};
    color: ${colors.pink};}
`
export const InputGroup = styled.div`

  p {
  font-size: 12px;
  text-align: center;
  margin-bottom: 0;}

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;
    box-sizing: border-box;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 8px; 
  width: 100%;
`

export const InputLarge = styled(InputGroup)`
  flex: 3;
`

export const InputSmall = styled(InputGroup)`
  flex: 1;
`
export const TitleStep = styled.h1`
    margin-top: 26px;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 16px;
`

export const SucessStep = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${colors.pinkishWhite};

    button {
    max-width: 100%;
    width: 100%;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    border: none;
    background-color: ${colors.pinkishWhite};
    color: ${colors.pink};}
`
export const EmptyCart = styled.p`
    display: flex;
    margin-top: 26px;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 16px;
    color: ${colors.pinkishWhite};
    text-align: center;
    
    
`