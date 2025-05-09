import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(num: number): string {
  const [wholeNumber, decimalNumber] = num.toString().split(".");
  return decimalNumber
    ? `${wholeNumber}.${decimalNumber.padEnd(2, "0")}`
    : `${wholeNumber}.00`;
}
