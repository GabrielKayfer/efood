import styled from "styled-components";
import { cores } from "../../utils";

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
background-color: ${cores.rosa};
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
    background-color: ${cores.brancaRosada};
    color: ${cores.rosa};}

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
color: ${cores.brancaRosada};
margin-top: 40px;
margin-bottom: 16px;
`
export const CartItem = styled.li`
display: flex;
background-color: ${cores.brancaRosada};
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
    color: ${cores.rosa};
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
`