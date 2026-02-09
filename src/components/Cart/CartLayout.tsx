import { CartContainer, Overlay, Sidebar } from './styles'

type Props = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const CartLayout = ({ isOpen, onClose, children }: Props) => (
    <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={onClose} />
        <Sidebar>{children}</Sidebar>
    </CartContainer>
)

export default CartLayout