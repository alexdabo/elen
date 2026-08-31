export function getCurrentFormattedDate(): string {
    return new Date().toLocaleDateString("es-EC", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}
