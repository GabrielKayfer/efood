import type { ReactNode } from 'react'
import { Container, List } from './styles'

type Props = {
    children: ReactNode
    variant?: 'restaurants' | 'products'
}

const CardList = ({ children, variant = 'restaurants' }: Props) => (
    <Container>
        <div className="container">
            <List $variant={variant}>{children}</List>
        </div>
    </Container>
)

export default CardList