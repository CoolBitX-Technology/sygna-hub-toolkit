export function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function generatePassword(length: number, symbol: boolean) {
  let password = "";
  let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  if (symbol) {
    possibleCharacters += "!@#$%^&*()_+-=[]{}|;'\"<>,.?/\\`~";
  }

  for (let i = 0; i < length; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

  return password;
}
