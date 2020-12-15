import '@testing-library/jest-dom/extend-expect';

global.console = {
  warn: jest.fn(),
  error: jest.fn()
};
