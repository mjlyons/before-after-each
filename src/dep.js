export const MOODS = ["happy", "excited", "sad", "bored"];

export function getMood() {
  return MOODS[Math.floor(Math.random() * MOODS.length)];
}
