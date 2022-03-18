const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomNumber(num: number) {
  return Math.floor(Math.random() * num);
}

function randomString(length: number) {
  const res = Array.from({ length: randomNumber(length) })
    .fill(null)
    .map((_) => alphabet[randomNumber(26)].toLowerCase())
    .reduce((p, n) => p + n, "");
  return res;
}

function randomName() {
  const firstName = alphabet[randomNumber(26)] + randomString(5);
  const lastName = alphabet[randomNumber(26)] + randomString(6);
  return `${firstName} ${lastName}`;
}

export function useTableData() {
  return new Array(20).fill(null).map((_) => {
    return {
      name: randomName(),
      age: randomNumber(100),
    };
  });
}
