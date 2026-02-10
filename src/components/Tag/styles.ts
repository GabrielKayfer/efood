import styled from 'styled-components'
import { colors } from '../../utils'

type TagContainerProps = {
    $size: 'small' | 'big'
    $variant: 'default' | 'spaced'
}

export const TagContainer = styled.div<TagContainerProps>`
    background-color: ${colors.pink};
    color: ${colors.pinkishWhite};
    font-size: ${({ $size }) => ($size === 'small' ? '12px' : '14px')};
    padding: ${({ $size, $variant }) => {
        if ($size === 'small') return '4px 6px'
        if ($variant === 'spaced') return '8px 16px'
        return '4px 6px'
    }};
    font-weight: bold;
    border-radius: 8px;
    display: inline-flex;
    cursor: pointer;
    text-decoration: none;
    border: none;
    `