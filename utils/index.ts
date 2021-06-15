/* eslint-disable no-console */
export const isDevelopment = process.env.VERCEL_ENV === 'development';

export const consoleWarnDevelopmentError = (error: Error) => {
  if (isDevelopment) {
    console.error(`${new Date().toUTCString()} uncaughtException:`, error.message);
    console.error(error.stack);
  }
};

export const safeParseInt = (s: string, radix?: number) => {
  const parsedData = parseInt(s, radix);
  return Number.isNaN(parsedData) ? 0 : parsedData;
};

export const pluralize = (str: string): string => `${str}s`;

export const makeCaseInsensitiveRegex = (x: string) => new RegExp(`^${x}`, 'i');
