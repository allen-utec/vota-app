import { customAlphabet } from "nanoid";

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

export function generateId() {
  return nanoid();
}

export function validateId(id: string) {
  return id.length === 10 && /[a-z0-9]{10}/g.test(id);
}