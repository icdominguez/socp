export const timestampToDayHoursAndMinutes = ( timestamp ) => {
    const date = new Date(timestamp);

    const days = ['MON','MAR','MIE','JUE','VIE','SAB','DOM'];

    const minutes = date.getUTCMinutes() == 0 ? date.getUTCMinutes() + '0' : date.getUTCMinutes()

    return `${days[date.getDay()]} - ${date.getUTCHours()}:${minutes}`
}

export const timestampToDate = ( timestamp ) => {
    const date = new Date(timestamp);

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let monthName = months[date.getMonth()]
    return `${date.getDate()} de ${monthName} del ${date.getFullYear()}`;
} 