import type { ReactNode, ElementType } from 'react'
import { TagContainer } from './styles'

export type Props<T extends ElementType = 'div'> = {
    as?: T
    size?: 'small' | 'big'
    variant?: 'default' | 'spaced'
    children: ReactNode
} & React.ComponentPropsWithoutRef<T>

const Tag = <T extends ElementType = 'div'>({
    as,
    children,
    size = 'big',
    variant = 'default',
    ...props
}: Props<T>) => (
    <TagContainer
    as={as}
    $size={size}
    $variant={variant}
    {...props}
    >
    {children}
    </TagContainer>
)

export default Tag