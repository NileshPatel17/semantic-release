module.exports = {
    preset: 'ts-jest',
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.json',
      },
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '((\\.|/)(spec))\\.ts?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  }