import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const raiz = fileURLToPath(new URL("./", import.meta.url));

export default defineConfig({
  resolve: {
    alias: { "@": raiz },
  },
  test: {
    include: ["tests/**/*.test.ts"],
    environment: "node",
  },
});
