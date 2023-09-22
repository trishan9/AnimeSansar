export const capitalize = (string: string): string => {
  const slicedString = string.slice(1);
  const capitalizedString = `${string[0].toUpperCase()}${slicedString}`;
  return capitalizedString;
};
