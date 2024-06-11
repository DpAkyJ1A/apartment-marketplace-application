import { IRent } from "../types/Rent";

export const saveToLocalStorage = (key: string, value: IRent[]) => {
  const jsonString = JSON.stringify(value);
  localStorage.setItem(key, jsonString);
}

export const loadFromLocalStorage = (key: string): IRent[] | null => {
  const jsonString = localStorage.getItem(key);
  if (jsonString) {
    return JSON.parse(jsonString) as IRent[];
  }
  return null;
}
