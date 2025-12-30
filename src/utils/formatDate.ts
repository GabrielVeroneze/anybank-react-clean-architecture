export const formatDatePtBR = (date: Date = new Date()): string => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }

    return date.toLocaleDateString('pt-BR', options)
}
