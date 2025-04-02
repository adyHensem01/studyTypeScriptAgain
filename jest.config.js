// filepath: c:\Users\Mahdi\Desktop\LearningProcess\my-project-2\jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Use jsdom for React components
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for .ts and .tsx files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    '\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|tiff)$': '<rootDir>/tests/__mocks__/fileMock.js', // Mock static assets
  },
};