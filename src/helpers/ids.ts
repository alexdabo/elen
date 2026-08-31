export function generateProcedureId(): string {
    const randomPart = Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0");
    return `GRV-DEMO-${randomPart}`;
}
