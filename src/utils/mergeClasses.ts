import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export default function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
