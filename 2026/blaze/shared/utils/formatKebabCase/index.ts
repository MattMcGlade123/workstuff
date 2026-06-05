export const kebabify = (value: string) => {
  const string = value.trim().toLowerCase().replace(/\s+/g, '-');

  return string;
};
