const getTimestamp = (): string => {
  return new Date().toLocaleTimeString('en-GB'); // 'en-GB' format is HH:mm:ss
};

// A no-op function that does nothing. Used in production.
const noOp = (..._args: any[]): void => {};

const log = __DEV__
  ? (...args: any[]): void => {
      const timestamp = `[${getTimestamp()}]`;
      console.log(`%c${timestamp}`, 'color: #9E9E9E;', ...args);
    }
  : noOp;

const warn = __DEV__
  ? (...args: any[]): void => {
      const timestamp = `[${getTimestamp()}]`;
      console.warn(`%c${timestamp}`, 'color: #FFA726;', ...args);
    }
  : noOp;

const error = __DEV__
  ? (...args: any[]): void => {
      const timestamp = `[${getTimestamp()}]`;
      console.error(`%c${timestamp}`, 'color: #EF5350;', ...args);
    }
  : noOp;

/**
 * A centralized logger utility for consistent and informative debugging.
 * Automatically disabled in production builds.
 */
export const Logger = {
  log,
  warn,
  error,
};
