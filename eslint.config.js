/* eslint-disable @typescript-eslint/no-require-imports */
const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");
const nextTypescript = require("eslint-config-next/typescript");

module.exports = [
  {
    ignores: ["CODEX/**", ".next/**", "out/**", "node_modules/**"],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
];
