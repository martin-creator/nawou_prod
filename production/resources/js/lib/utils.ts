import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const AppColors = {
    primary:"#B32A81",
    primaryPale: "#B32A810D",
    primaryPale30: "#B32A814D",
    secondary:"#0D1F54",
    secondaryPale:"#0D1F540D",
    tertiary:"#FED1D1"
}
