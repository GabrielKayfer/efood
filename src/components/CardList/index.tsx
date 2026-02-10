import type { ReactNode } from 'react'

import * as S from './styles'

type Props = {
    children: ReactNode
    variant?: 'restaurants' | 'products'
}

const CardList = ({ children, variant = 'restaurants' }: Props) => (
    <S.Container>
        <div className="container">
            <S.List $variant={variant}>{children}</S.List>
        </div>
    </S.Container>
)

export default CardList