module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  // Reuse Next's bundled Babel preset so ES modules/JSX are transformed
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
}
