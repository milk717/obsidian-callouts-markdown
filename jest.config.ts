import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  // moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/tests/__mocks__/SvgMock.tsx',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // transformIgnorePatterns: ['node_modules/(?!(react-markdown)/)'],
  // extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

export default config;
