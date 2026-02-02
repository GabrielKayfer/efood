export const cores = {
    branca: '#FFFFFF',
    brancaRosada: '#FFEBD9',
    rosa: '#f17e7e',
    brancaFundoLista: '#FFF8F2',
}

export const truncate = (text: string, max = 150) => {
  if (text.length <= max) return text

  const sliced = text.slice(0, max - 3).trimEnd()
  return sliced + "..."
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
