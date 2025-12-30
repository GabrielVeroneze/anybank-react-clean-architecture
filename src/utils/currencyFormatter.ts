const brlFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
})

export const formatToBRL = (value: number): string => {
    return brlFormatter.format(value)
}
