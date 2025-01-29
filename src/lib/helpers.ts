import { v4 as uuidv4 } from "uuid";
export function formatPhoneNumber(phoneNumber: string): string {
  let cleaned = phoneNumber.replace(/\D/g, "");

  if (cleaned.startsWith("1")) {
    cleaned = cleaned.substring(1);
  }

  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "+1" + match[1] + match[2] + match[3];
  }

  return phoneNumber;
}

export const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const uuid = () => uuidv4();

const SAFE_CHARACTERS = /[^0-9a-zA-Z!_\\.\\*'\\(\\)\\\-/]/g;
export const sanitizeKey = (value: string) =>
  value.replace(SAFE_CHARACTERS, " ").replace(/\s+/g, "-");
