import * as S from './styles'

type Props = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const CartLayout = ({ isOpen, onClose, children }: Props) => (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={onClose} />
        <S.Sidebar>{children}</S.Sidebar>
    </S.CartContainer>
)

export default CartLayout