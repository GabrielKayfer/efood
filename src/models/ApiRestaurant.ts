export type ApiMenuItem = {
    id: number
    nome: string
    descricao: string
    porcao: string
    preco: number
    foto: string
    }

export type ApiRestaurant = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: ApiMenuItem[]
    }