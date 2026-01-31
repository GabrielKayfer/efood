import styled from "styled-components"
import { cores } from "../../utils"

export const Container = styled.section`
    padding: 80px 172px 120px;
    background-color: ${cores.brancaFundoLista};
`

export const List = styled.ul<{ $variant: 'restaurants' | 'products' }>`
    display: grid;
    
    list-style: none;
    margin: 0;
    padding: 0;

    align-items: stretch;
    width: 100%;
    
    

    ${({ $variant }) =>
        $variant === 'restaurants'
            ? `
        grid-template-columns: repeat(2, 1fr);
        gap: 48px 80px;
        `
            : `
         grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 32px 32px;
        `
    }
`