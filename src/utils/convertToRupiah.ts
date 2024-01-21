export function convertToRupiah(amount: number): string {
    const rupiahString = amount.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    });

    return rupiahString.replace("IDR", "Rp").replace(",00", "");
}