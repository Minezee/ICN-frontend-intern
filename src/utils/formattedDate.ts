export function formattedDate(inputDate: string): string {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(inputDate);
        const formattedDate = date.toLocaleDateString('id-ID', options);
        return formattedDate;
}