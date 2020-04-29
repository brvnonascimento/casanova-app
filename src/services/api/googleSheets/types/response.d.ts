export interface SheetResponse {
    result: {
        majorDimension: string;
        range: string;
        values: array<array<string>>;
        status: number;
    }
} 