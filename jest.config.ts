import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/tests/__mocks__/StyleMock.tsx',
    '\\.svg$': '<rootDir>/src/tests/__mocks__/SvgMock.tsx',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
