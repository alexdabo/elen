import { useContext } from "react";
import { FormalitiesContext } from "./FormalitiesContext";

export function useFormalities() {
    const context = useContext(FormalitiesContext);
    if (!context) {
        throw new Error("useFormalities must be used within FormalitiesProvider");
    }
    return context;
}
