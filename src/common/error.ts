export const handleError = (label: string, customMessage?: string): void => {
  const message: string = customMessage || `Failed to fetch ${label}`;

  // This will activate the closest `error.js` Error Boundary
  throw new Error(message);
};
