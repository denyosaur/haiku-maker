export const createId = () => {
  const input = new Date().toString();
  const hashedId = hashCode(input);

  return hashedId;
};

function hashCode(date: string) {
  for (var i = 0, hash = 0; i < date.length; i++)hash = Math.abs(Math.imul(31, hash) + date.charCodeAt(i) | 0);
  return hash;
};
