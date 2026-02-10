export const colors = {
    white: '#FFFFFF',
    pinkishWhite: '#FFEBD9',
    pink: '#f17e7e',
    listBackgroundWhite: '#FFF8F2',
}

export const truncate = (text: string, max = 150) => {
  if (text.length <= max) return text

  const sliced = text.slice(0, max - 3).trimEnd()
  return sliced + "..."
}

export const formatPrice = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const onlyDigits = (value: string) => value.replace(/\D/g, '')