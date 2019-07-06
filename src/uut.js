import { getMood } from "./dep";

export function describeMood() {
  return `My mood is currently ${getMood()}`;
}
